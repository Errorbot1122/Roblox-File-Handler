const Instance = require('./Instance.js');

/**
 * @inheritdoc
 * @class
 * 
 * @shortdecription Base class for everthing with a location
 * @classdesc The base class for all objects that have a physical location in the world, specifically {@link BaseParts} and {@link Model}
 */
class PVInstance extends Instance {
  constructor() {
    super();
  }
}

module.exports = PVInstance;