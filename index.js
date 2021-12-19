const fs = require('fs');
const xml2js = require('xml2js');
//const util = require('util')

const RoModules = require('./dont_doc/RoModules.js');
//const Globles = require('./Globles.js');

const RoClasses = RoModules.Classes;
const RoTypes = RoModules.Datatypes;
const RoEnums = RoModules.Enum;
const Instance = RoClasses.Instance;

const xmlParser = new xml2js.Parser();

/**
 * @description The name of the packege
 * @private
 */
const packageName = 'Roblox File Parser';

/**
 * @shortdecription instance look-up table
 * @description The look-up table for all instances that exist (by Refrance id)
 * 
 * @kind {Object}
 */
let REFIDTOINSTANCE = {}

let debug = false;
let showStack = true;
let showExtraData = true;

/**
 * @shortdecription Valid XML tag checker
 * @description Check if the xml_Tag is the parse-able/parsed XML Tag
 * 
 * @kind {Function}
 * @param {*} xml_Tag - The object to check
 * @returns {Boolean}
*/
function isXMLTag(xml_Tag) {
  let isParsed = (typeof xml_Tag === 'object')
  
  if (isParsed) {

    for (const keys in xml_Tag) {
      return true
    }

    return false
  }
  else {
    
    xmlParser.parseString(xml_Tag, (err, result) => {

      return isXMLTag(result, true)
    });
	};
}

/**
 * @shortdecription Valid item checker
 * @description check if the item is the Item type
 * 
 * @param {*} item - The object to check
 * @returns {Boolean}
 */
const isItem = item => (isXMLTag(item) && item.$.referent) || !item.isParsed


/**
 * @shortdecription The all around 'to instance' converter
 * @description converts a Referent Id, Item into a valid Instance
 * 
 * @param {String|Item|Instance} instance - the instance you want to convert
 * @returns {Instance}
 */
function convertValidInstance(instance) {

  if (instance) {

    if (typeof instance === 'string') {

      return REFIDTOINSTANCE[instance]
    }
    else if (instance instanceof Instance) {

      return instance
    }
    else if (isItem(instance)) {

      return convertItemToInstance(instance)
    }
  }

  return null
}

/**
 * @shortdecription Roblox's FindFirstChildOfClass, but with items
 * @description Finds the first instance in 'itemList' with the same class as 'className'
 * 
 * @param {Array<Item>} itemList - A list of Item objects
 * @param {String} className - The name of the className
 * @param {String|Item|Instance} parent - The item's parent
 * @returns {null | Item}
 */
function findFirstItemByClassName(itemList, className, parent) {
  className = className.toLocaleLowerCase();
  
  for (let i in itemList) {

    let item = itemList[i];
    itemClass = item.$.class.toLocaleLowerCase();

    if (itemClass == className) {

      return item
    }
    else if (item.Item) {

      return findFirstItemByClassName(item.Item, className)
    }
  }

  return null
}

/**
 * @shortdecription Property => Type
 * 
 * Converts an property into an valid type
 * @private
 * 
 * @param {*} property 
 * @param {String | Number} propertyTypeKey - The key to select the proptry
 * @param {Object} localREFIDTOINSTANCE - The 'REFIDTOINSTANCE' it will use to find instances
 * @returns {*}
 */
function _convertPropertyToType(property, propertyTypeKey, localREFIDTOINSTANCE = REFIDTOINSTANCE) {
  propertyValue = property._;
  propertyName = property.$.name;
  
  switch (propertyTypeKey.toLowerCase()) {
    case 'string':

      // Add the string
      return propertyValue;
    case 'coordinateframe':

      // Convert the CFrame Proproty
      return new RoTypes.CFrame(
        Number(property.X), 
        Number(property.Y), 
        Number(property.Z), 
        Number(property.R00), 
        Number(property.R01), 
        Number(property.R02), 
        Number(property.R10), 
        Number(property.R11), 
        Number(property.R12), 
        Number(property.R20), 
        Number(property.R21), 
        Number(property.R22)
      );
    case 'ref':
      
      // Add the ref
      return localREFIDTOINSTANCE[propertyValue]
    case 'color3uint8':

      // Add the Color3
      return new RoTypes.Color3uint8(Number(propertyValue))

      break;
    default:
      
      let datatype;

      try {
        // Create the datatype
        datatype = new RoTypes[propertyTypeKey]();
      } 
      catch(err) { 
        if (debug) {  
          console.log(colors.warn(`\n  Sorry, \n\n  but the package, ${packageName}, currently not support the datatype ${propertyTypeKey} is currently not suppourted with the proprety '${propertyName}', I will try to fix it ASAP. In the mean time you can report it to the GitHub Repo.\n`))
        
          if (showExtraData) {
            
            console.log(colors.data(`\nValue: ${propertyValue}\n`))
          }
          if (showStack) {
            
            console.log(colors.info(`Stacktrace:\n==================\n${err.stack}\n\n`))
          }
        }

        return err
      }

      for (const datatypeValueKey in datatype) {
        
        if (property[datatypeValueKey]) {
          const newPropertyValue = property[datatypeValueKey]

          datatype[datatypeValueKey] = JSON.parse(newPropertyValue)
        }
      }

      return datatype

      break; 
  }

  return
}

/**
 * @shortdecription Item => Instance
 * @description Convert an parsed XML Item into a valid roblox Instance if posible
 * 
 * @param {Item} item - The Item you want convert
 * @param {String|Item|Instance} parent - The item's parent
 * @param {Object} options - extra options
 * 
 * @return {Instance | Item}
 */
function convertItemToInstance(item, parent, options) {

  // just return the item if it is already parsed
  if (item.isParsed) {return item}

  const defultOptions = {

    REFIDTOINSTANCE: {}
  }

  options = {
    ...defultOptions,
    ...options
  }

  // Vars
  const children = item.Item
  const propertyTypes = item.Properties[0];
  const referentId = item.$.referent;
  const returnInstClassName = item.$.class;
  parent = convertValidInstance(parent)

  let convertedChildren = []

  let returnInst = null;
  
  try {
    // Try to create the inst
    returnInst = new RoClasses[returnInstClassName]();
  }
  catch(err) {
    // Debug logs
    if (debug) {

      console.log(colors.warn(`\n  Sorry,\n  but the package, ${packageName}, currently not support the Instance class '${returnInstClassName}'. We will try to fix it ASAP. In the mean time you can report it to the GitHub Repo.\n`));

      if (showStack) {

        console.log(colors.info(`\nStacktrace:\n==================\n${err.stack}\n`))
      }
    }

    // returns the instance even if it is not parsed
    item.isParsed = false;
    return item;
  }

  // set isParsed
  returnInst.isParsed = true

  // Set the parent
  returnInst.Parent = parent;

  if (referentId != null) {
    
    // Set the instances ref-id
    returnInst.referentId = referentId;
    
    // Add the new inst to refrance id, refrence table
    options.REFIDTOINSTANCE[referentId] = returnInst;
  }

  if (children) {

    // Convert all the children
    children.forEach((child, i) => {
      convertedChildren[i] = convertItemToInstance(child, returnInst)
    });
  }
  
  returnInst.Children = convertedChildren

  for (const propertyTypeKey in propertyTypes) {

    const propertyType = propertyTypes[propertyTypeKey];

    propertyType.forEach(property => _convertPropertyToType(property, propertyTypeKey));
  }

  return returnInst;
}

/**
 * @shortdecription File => Object
 * @description Convert a file into an object
 * 
 * @param {String} path - The file path to convert
 * @param {Function} callback - The callback function
 */
function fileToObject(path, callback) {

  // Read the file
  fs.readFile(path, (rErr, data) => {
    
    // Parse the xml file
    xmlParser.parseString(data, (xErr, jsObject) => {
      
      callback([rErr, xErr], jsObject, path);
    })
  })
}

/**
 * @shortdecription XML => Object
 * @description Convert a parsed XML file into an object
 * 
 * @param {String} xml - The XML data to convert
 * @param {Function} callback - The callback function
 */
function xmlToObject(xml, callback) {

  // only parse the xlm
  xmlParser.parseString(xml, (xErr, jsObject) => {

    callback(xErr, jsObject, path);
  })
}

/**
 * @shortdecription Object(s) => Istance(s)
 * @description Convert one or multiple instances into one or meny objects
 * 
 * @param {*} objs - A valed Item into an instance
 */
function objToInst(objs) {
  
  if (Array.isArray(objs)) {
    
    let returnArray = []

    objs.forEach(obj => {
      
      returnArray.push(objectToInsts(obj))
    })

    return returnArray
  }
  else if (objs.Item) {
    
    return convertItemToInstance(objs.Item)
  }
  else if (isItem(objs)) {
    
    return convertItemToInstance(objs)
  } 
}

/**
 * @shortdecription The main file parser
 * @description Convert any RBXL/RBXM/XML File into a parent/child tree of Instances (Just like how roblox dose it)
 * 
 * @param {String} path - The path to the file you want to parse
 * @param {*} callback - The callback function
 */
function parseFile(path, callback) {

  fileToObject(path, (errs, result) => {

    if (result.roblox) {
    
      const nexXMLObj = result.roblox
      let newInstences = []

      items = nexXMLObj.Item

      items.forEach(item => {
        
        newInstences.push(convertItemToInstance(item))
      })

      callback(errs, newInstences)
    }
  });
}

module.exports = {
  Classes: {
    ...RoClasses,
    ...RoTypes,
  },
  Roblox: {
    Classes: RoClasses,
    Datatypes: RoTypes,
    Enum: RoEnums
  },
  isXMLTag,
  isItem,
  convertValidInstance,
  findFirstItemByClassName,
  fileToObject,
  xmlToObject,
  objToInst,
  parseFile
}