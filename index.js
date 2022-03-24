/**
 * @typedef {Object} Item
 */

import * as xml2js		from 'xml2js';
import * as fs			from 'fs';

// Classes
import BasePart 		from './Classes/BasePart.mjs'
import FormFactorPart 	from './Classes/FormFactorPart.mjs'
import GuiService 		from './Classes/GuiService.mjs'
import Instance 		from './Classes/Instance.mjs'
import Model	 		from './Classes/Model.mjs'
import Part		 		from './Classes/Part.mjs'
import PVInstance		from './Classes/PVInstance.mjs'
import Terrain		 	from './Classes/Terrain.mjs'
import Workspace		from './Classes/Workspace.mjs'

// Datatypes
import BaseVector 		from './Datatypes/BaseVector.mjs'
import CFrame 			from './Datatypes/CFrame.mjs'
import Color3 			from './Datatypes/Color3.mjs'
import Color3uint8 		from './Datatypes/Color3uint8.mjs'
import Vector3	 		from './Datatypes/Vector3.mjs'

// Enums
import InputType 		from './Enums/InputType.mjs'
import Material 		from './Enums/Material.mjs'
import PartType 		from './Enums/PartType.mjs'
import SurfaceType 		from './Enums/SurfaceType.mjs'

import _errorConverter 	from "./modules/Errors.mjs"


export const RoClasses	= {BasePart, FormFactorPart, GuiService, Instance, Model, Part, PVInstance, Terrain, Workspace}
export const RoTypes 	= {BaseVector, CFrame, Color3, Color3uint8, Vector3}
export const RoEnums	= {InputType, Material, PartType, SurfaceType}

export const RoModules	= { ...RoClasses, ...RoTypes, ...RoEnums}

export 					{ BasePart, FormFactorPart, GuiService, Instance, Model, Part, PVInstance, Terrain, Workspace, BaseVector, CFrame, Color3, Color3uint8, Vector3, InputType, Material, PartType, SurfaceType }

const xmlParser			= new xml2js.Parser();

const _announced = []

/**
 * @description The name of the package
 * @private
 */
const packageName		= 'Roblox File Parser';

/**
 * @shortdescription What types of errors get "thrown"
 * What "types" of errors can be logged on to the console, wether it could be a warning or a debug log
 * 
 * **Key:**
 * | Number 	| Action																						|
 * |:------:	|-------------------------------------------------------------------------------------------	|
 * |	`0`		| <small>*All errors* are **ignored**</small>													|
 * |	`1`		| <small>**Simplistic** *errors* are generated</small>											|
 * |	`2`		| <small>**Simplistic** *errors **AND** warnings* are generated</small>							|
 * |	`3`		| <small>**Normal** *warnings* and **Simplistic** *errors*</small>								|
 * |	`4`		| <small>**Normal** *errors **AND** warnings*</small>											|
 * |	`5`		| <small>**Raw** *errors **AND** warnings* (Throws them)</small>								|
 * |	`6`		| <small>**Raw** *errors**,** warnings **AND** debugs* (Same as 5, minus the debugs)</small>	|
 *
 * @type {Number}
 */
const logMode			= 1;

/**
 * @shortdescription If you want to end the fuction if an error occors
 * Throw eny error the occures, no mater how miniscule it might be
 * 
 * @type {Boolean}
 **/
const throwErrors		= false;

export class Parser {
	constructor() {
		/**
		 * @shortdescription instance look-up table
		 * @description The look-up table for all instances that exist (by Refrance id)
		 * 
		 * @type {Object}
		 */
		this.REFIDTOINSTANCE = {}
		
	}

	/**
	 * @shortdescription The all-around 'to instance' converter
	 * @description converts a Referent Id, Item into a valid Instance
	 * 
	 * @param {String|Item|Instance} instance - the instance you want to convert
	 * @returns {Instance}
	 */
	toValidInstance(instance) {
	
	  if (instance) {
	
	    if (typeof instance === 'string') {
	
	      return this.REFIDTOINSTANCE[instance]
	    }
	    else if (instance instanceof RoClasses.Instance) {
	
	      return instance
	    }
	    else if (isItem(instance)) {
	
	      return this.itemToInstance(instance)
	    }
	  }
	
	  return null
	}

	/**
	 * @shortdescription Item => Instance
	 * @description Convert an parsed XML Item into a valid roblox Instance if posible
	 * 
	 * @param {Item} item - The Item you want convert
	 * @param {String|Item|RoClasses.Instance} parent - The item's parent
	 * @param {Object} options - extra options
	 * 
	 * @return {RoClasses.Instance|Item}
	 */
	itemToInstance(item, parent, options) {
		
		const defultOptions = {
			REFIDTOINSTANCE: this.REFIDTOINSTANCE,
			returnErrors: false
		}
		
		options = {
			...defultOptions,
			...options
		}

		// just return the item if it is already parsed
		try {
			if (item.isParsed) return item
		}
		catch (e) {
			if (options.returnErrors) throw _errorConverter(e) 
			return item
		}
		
		
		// Vars
		const children = item.Item
		const propertyTypes = item.Properties[0];
		const referentId = item.$.referent;
		const returnInstClassName = item.$.class;
		
		parent = this.itemToInstance(parent)
		
		let convertedChildren = []
		
		let returnInst = null;
		
		try {
			// Try to create the inst
			returnInst = new RoClasses[returnInstClassName]();
		}
		catch(e) {
			// Debug logs
			log: if (logMode >= 1 && logMode <= 4) {
				// Leave if it has already "announced" that its invalid (prevents repeat "announcing")
				if (_announced.indexOf(returnInstClassName) != -1) break log;

				console.warn(`Instance Class '${returnInstClassName}' is currentlly unsported\n`)

				// Add this to the array to prevent repeat "announcing"
				_announced.push(returnInstClassName)
				
			}
		    else if (logMode == 5) {
				if (throwErrors) throw _errorConverter(err);
				else console.error(_errorConverter(err));
			}
			else {
				if (throwErrors) throw err;
				else console.error(err);
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
			children.forEach((child, i) => convertedChildren[i] = this.itemToInstance(child, returnInst));
		}
		
		returnInst.Children = convertedChildren
		
		for (const propertyTypeKey in propertyTypes) {
		
			const propertyType = propertyTypes[propertyTypeKey];
			
			propertyType.forEach(property => {
				try {
					returnInst[property.$.name] = _convertPropertyToType(property, propertyTypeKey, options)
				}
				catch (e) {
					
					// Debug logs
					log: if (logMode >= 1 && logMode <= 4) {
						
						// Leave if it has already "announced" that its invalid (prevents repeat "announcing")
						if (_announced.indexOf(propertyTypeKey) != -1) break log;
		
						console.warn(`Datatype '${propertyTypeKey}' is currentlly unsported\n`)
		
						// Add this to the array to prevent repeat "announcing"
						_announced.push(propertyTypeKey)
					}
				    else if (logMode == 5) {
						
						if (throwErrors) throw _errorConverter(err);
						else console.error(_errorConverter(err));
					}
					else {
						
						if (throwErrors) throw err;
						else console.error(err);
					}
				}
			});
		}
		
		return returnInst;
	}

	/**
	 * @shortdescription File => Object
	 * @description Convert a file into an object
	 * 
	 * @param {String} path - The file path to convert
	 * @returns {Object}
	 */
	fileToObject(path) {

		let data, output;
		
		// Read the file
		try {
			data = fs.readFileSync(path)
		}
		catch (e) {
			throw _errorConverter(e)
		}
		
		xmlParser.parseString(data, (err, jsObject) => { 
			if (err) throw err;
			
			output = jsObject
		});

		return output
	}

	/**
	 * @shortdescription XML => Object
	 * @description Convert a parsed XML file into an object
	 * 
	 * @param {String} xml - The XML string data to convert
	 * @returns {Object}
	 */
	xmlToObject(xml) {
		let output;
		
		xmlParser.parseString(xml, (err, jsObject) => {
			
			// throws the error if there is one
			if (err) throw _errorConverter(err);
			
			output = jsObject;
		})

		return output;
	}

	/**
	 * @shortdescription Object(s) => Istance(s)
	 * 
	 * @param {*} objs - A valed Item into an instance
	 * @returns {Instance|Object}
	 */
	objToInstance(objs) {
	
		if (Array.isArray(objs)) {
		
			let returnArray = []
			
			objs.forEach(obj => returnArray.push(objectToInsts(obj)))
		
			return returnArray
		}
		else if (objs.Item) {
		
			return itemToInstance(objs.Item)
		}
		else if (isItem(objs)) {
		
			return itemToInstance(objs)
		} 
	}

	/**
	 * Convert any RBXL/RBXM/XML File into a parent/child tree of Instances (Just like how roblox dose it)
	 * 
	 * The callback function's params are:
	 * 
	 * errs: An Array of Errors (0 = Read File Error, 1 = Parse Error)
	 * newInstences: The new array of instances
	 * 
	 * @shortdescription The main file parser
	 * 
	 * @param {String} path - The path to the file you want to parse
	 * @returns {Array<Instance|Object>}
	 */
	parseFile(path) {
		const result = this.fileToObject(path)
				
		if (result.roblox) {
			
			const nexXMLObj = result.roblox
			let newInstences = []
			
			const items = nexXMLObj.Item
			
			items.forEach(item => newInstences.push(this.itemToInstance(item)))
				
			return newInstences
		}
	}
}


/**
 * @shortdescription Valid XML tag checker
 * @description Check if the xml_Tag is the parse-able/parsed XML Tag
 * 
 * @param {*} xml_Tag - The object to check
 * @returns {Boolean}
*/
export function isXMLTag(xml_Tag) {
	let isParsed = (typeof xml_Tag === 'object')
	
	if (isParsed) {

		// Check if there is eneything inside the tag
		for (const keys in xml_Tag) return true

		// If not, return false
		return false
	}
	else {
		let output;
		
		xmlParser.parseString(xml_Tag, (err, result) => {
			if (err) throw err
			
			output = isXMLTag(result)
		});

		if (output) return output
	};
}

/**
 * @shortdescription Valid item checker
 * @description check if the item is the Item type
 * 
 * @type {Function}
 * 
 * @param {*} item - The object to check
 * @returns {Boolean}
 */
export const isItem = item => (isXMLTag(item) && item.$.referent) || !item.isParsed

/**
 * @shortdescription Roblox's FindFirstChildOfClass, but with items
 * @description Finds the first instance in 'itemList' with the same class as 'className'
 * 
 * @param {Array<Item>} itemList - A list of Item objects
 * @param {String} className - The name of the className
 * @param {String|Item|RoClasses.Instance} parent - The item's parent
 * @returns {null | Item}
 */
export function findFirstItemByClassName(itemList, className, parent) {
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
 * @shortdescription Property => Type
 * 
 * Converts a property into a valid type
 * @private
 * 
 * @param {*} property 
 * @param {String | Number} propertyTypeKey - The key to select the proptry
 * @param {Object} localREFIDTOINSTANCE - The 'REFIDTOINSTANCE' it will use to find instances
 * @returns {*}
 */
export function _convertPropertyToType(property, propertyTypeKey, options, localREFIDTOINSTANCE) {
  const propertyValue = property._;
  const propertyName = property.$.name;
  
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
		log: if (logMode >= 1 && logMode <= 4) {
						
			// Leave if it has already "announced" that its invalid (prevents repeat "announcing")
			if (_announced.indexOf(propertyTypeKey) != -1) break log;
	
			console.warn(`Datatype '${propertyTypeKey}' is currentlly unsported\n`)
	
			// Add this to the array to prevent repeat "announcing"
			_announced.push(propertyTypeKey)
		}
		else if (logMode == 5) {
			
			if (throwErrors) throw _errorConverter(err);
			else console.error(_errorConverter(err));
		}
		else {
			
			if (throwErrors) throw err;
			else console.error(err);
		}

		return propertyValue
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