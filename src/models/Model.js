class Model {
  constructor(id, attributes = {}, relationships = {}) {
    this.id = id ? parseInt(id, 10) : null;

    // this._setAttributes(attributes);
    this._setAttributes(Model.#attributes, attributes);
    this._setRelationships(Model.#relationships, relationships);
  }

  /*
   Class
   */

  /*
   Instance
   */

  /*
   Private
   */
  static #attributes = [];

  static #relationships = [];

  // Support for the experimental syntax 'classPrivateMethods' isn't currently enabled
  _setAttributes(klassAttributes, attributes) {
    klassAttributes.forEach((attribute) => {
      if (attributes[attribute]) {
        this[attribute] = attributes[attribute]
      }
    });
  }

  _setRelationships(klassRelationships, relationships) {
    klassRelationships.forEach((relationship) => {
      if (relationships[relationship]) {
        this[relationship] = relationships[relationship]
      }
    });
  }
}

export default Model;
