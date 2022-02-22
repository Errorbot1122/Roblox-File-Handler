const Instance = require('./Instance.js');

/**
 * @inheritdoc
 * @class
 * 
 * @shortdescription Base class for everything with a location
 * @classdesc The base class for all objects that have a physical location in the world, specifically {@link BaseParts} and {@link Model}
 */
class PVInstance extends Instance {
  constructor() {
    super();
  }
}

module.exports = PVInstance;