/**
 * @typedef {Object} Item
 * @property {Object} $ - Xml Tags
 * @property {String} $.class - The item's class
 * @property {Array} Properties - An array of properties 
 * @property {Array<Item>=} Item - An array of its children
 */
/**
 * @typedef {}
 */

const fs = require('fs');
const xml2js = require('xml2js');
const util = require('util');
const RoModules = require('./RoModules.js')
const RoClasses = RoModules.Classes
const RoEnums = RoModules.Enum

/*
const TOKENNAMETOENUMTYPE = {
  BackSurface: "SurfaceType",
  BottomSurface: "SurfaceType",
  FrontSurface: "SurfaceType",
  LeftSurface: "SurfaceType",
  RightSurface: "SurfaceType",
  TopSurface: "SurfaceType",
  BackSurfaceInput: "InputType",
  BottomSurfaceInput: "InputType",
  FrontSurfaceInput: "InputType",
  LeftSurfaceInput: "InputType",
  RightSurfaceInput: "InputType",
  TopSurfaceInput: "InputType"
  
}
*/

const Instance = RoClasses.Instance

const xmlParser = new xml2js.Parser();

let REFIDTOINSTANCE = {}

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
      return isXML(result, true)
    });
	};
}

function isItem(item) {
  return isXMLTag(item) && item.$.referent
}


/**
 * @param {String|Item|Instance} instance - the instance you want to convert
 * @returns {Instance | Boolean}
 */
function convertValidInstance(instance) {
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

  return
}

/**
 * @param {Item} item - The Item you want convert
 * @param {String|Item|Instance} parent - The item's parent
 * @return {Instance}
 */
function convertItemToInstance(item, parent) {
  console.log(parent)

  parent = convertValidInstance(parent)

  let returnInst = null;

  propertyTypes = item.Properties[0];

  returnInstClassName = item.$.class;
  
  try {
    
    returnInst = new RoClasses[returnInstClassName]();
  }
  catch(err) {

    console.log(`\n
    Sorry,\n
    but the package currently not support the Instance class. I will try to fix it ASAP. In the mean time you can report it to GitHub. ${returnInstClassName}, ${err}\n`);

    return null
  }

  returnInst.referentId = item.$.referent
  
  REFIDTOINSTANCE[returnInst.referentId] = returnInst

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

          returnInst[propertyName] = new RoClasses.CFrame(
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
        case "vector3":

          returnInst[propertyName] = new RoClasses.Vector3(
            Number(property.X), 
            Number(property.Y), 
            Number(property.Z)
          )
          break;
        default:

          if (propertyValue) {

            try {

              returnInst[propertyName] = JSON.parse(propertyValue)
            } 
            catch(err) {
              /*
              Old Text

              `\n
                ERROR:\n
                Could not set ${propertyValue} to the value ${propertyName} from ${returnInst.name}. ${err}
                \n`
              */ 
              console.log(
                `\n
                Sorry,\n 
                currently the the datatype ${propertyType} is currently not suppourted, I will try to fix it ASAP. In the mean time you can report it to GitHub.\n
                ${err}\n`
              )
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