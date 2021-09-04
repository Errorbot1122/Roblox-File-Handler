/**
 * @typedef {Object} Item
 * @property {Object} $ - Xml Tags
 * @property {String} $.class - The item's class
 * @property {String} $.referent - The item's class
 * @property {Array=} Properties - An array of properties 
 * @property {Array<Item>} Item - An array of its children
 */



const fs = require('fs');
const xml2js = require('xml2js');
const util = require('util');
const colors = require("colors/safe");

const RoModules = require('./RoModules.js');
const RoClasses = RoModules.Classes;
const RoTypes = RoModules.Datatypes;
const RoEnums = RoModules.Enum;
const Instance = RoClasses.Instance;

const xmlParser = new xml2js.Parser();

const packageName = "Roblox File Parser";

let REFIDTOINSTANCE = {}

let debug = false;
let showStack = true;
let showExtraData = true;

colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'gray',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'

});  

/**
 * @param {*} x - The object you want to convert
 * @returns {{value:*}}
 */
function toObject(x) {

  return {value: x}
}

/**
 * check if the xml_Tag is the parse-able/parsed XML Tag
 * 
 * @param {*} xml_Tag - The object to check
 * @returns {Boolean}
*/
function isXMLTag(xml_Tag) {
  let isParsed = (typeof xml_Tag === "object")
  
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
 * check if the item is the Item type
 * 
 * @param {*} item - The object to check
 * @returns {Boolean}
 */
function isItem(item) {

  return (isXMLTag(item) && item.$.referent) || item.isParsed
}


/**
 * converts a referent id, item, or 
 * 
 * @param {String|Item|Instance} instance - the instance you want to convert
 * @returns {Instance}
 */
function convertValidInstance(instance) {

  if (instance) {

    if (typeof instance === "string") {

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
 * @param {Array<Item>} itemList - A list of Item objects
 * @param {String} className - The name of the className
 * @param {String|Item|Instance} parent - The item's parent
 * @returns {null | Item}
 * @description Finds the first instance in 'itemList' with the same class as 'className'
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
 * @param {Item} item - The Item you want convert
 * @param {String|Item|Instance} parent - The item's parent
 * @return {Instance|Item}
 */
function convertItemToInstance(item, parent) {

  // Vars
  let children = item.Item
  
  let propertyTypes = item.Properties[0];

  let returnInstClassName = item.$.class;

  let convertedChildren = []

  let returnInst = null;

  let referentId = item.$.referent;


  parent = convertValidInstance(parent)
  
  if (referentId != null) {
    REFIDTOINSTANCE[referentId] = item;
  }

  try {

    returnInst = new RoClasses[returnInstClassName]();
  }
  catch(err) {

    if (debug) {

      console.log(colors.warn(`\n  Sorry,\n  but the package, ${packageName}, currently not support the Instance class '${returnInstClassName}'. We will try to fix it ASAP. In the mean time you can report it to the GitHub Repo.\n`));

      if (showStack) {

        console.log(colors.info(`\nStacktrace:\n==================\n${err.stack}\n`))
      }
    }

    item.isParsed = false;
    return item;
  }

  returnInst.isParsed = true

  returnInst.Parent = parent;

  if (referentId != null) {
    
    returnInst.referentId = referentId;
    
    REFIDTOINSTANCE[referentId] = returnInst;
  }

  if (children) {
  
    children.forEach((child, i) => {

      convertedChildren[i] = convertItemToInstance(child, returnInst)
    });
  }
  
  returnInst.Children = convertedChildren

  for (const propertyTypeKey in propertyTypes) {

    const propertyType = propertyTypes[propertyTypeKey];

    console.log(propertyTypeKey)

    propertyType.forEach(property => {

      propertyValue = property._;
      propertyName = property.$.name;
      
      switch (propertyTypeKey.toLowerCase()) {
        case "string":

          returnInst[propertyName] = propertyValue;
          break;
        case "coordinateframe":

          returnInst[propertyName] = new RoTypes.CFrame(
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
          break;
        case "ref":

          returnInst[propertyName] = REFIDTOINSTANCE[propertyValue]
          break;
        case "color3uint8":

          returnInst[propertyName] = new RoTypes.Color3uint8(Number(propertyValue))

          console.log(returnInst[propertyName])
          break;
        default:
            
          try {

            let datatype;
            //console.log(propertyValue, propertyTypeKey)

            if (propertyValue == null) { 

              datatype = new RoTypes[propertyTypeKey]();


              for (const datatypeValueKey in datatype) {

                const newPropertyValue = property[datatypeValueKey]
                
                if (property[datatypeValueKey]) {
                  
                  datatype[datatypeValueKey] = JSON.parse(newPropertyValue)
                }
              }
            }

            returnInst[propertyName] = (datatype) ? datatype : JSON.parse(propertyValue)
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
          }

        break; 
      }
    });
  }

  return returnInst;
}

fs.readFile('robloxExample.rbxlx', (err, data) => {

	xmlParser.parseString(data, (err, result) => {

    let newXml = result.roblox;

    isXMLTag(findFirstItemByClassName(newXml.Item, "Part"))
    console.log(convertItemToInstance(findFirstItemByClassName(newXml.Item, "Part")));
	});
});