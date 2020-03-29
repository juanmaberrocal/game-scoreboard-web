class Collection {
  constructor(records = []) {
    this._setModel(Collection.#model);
    this._setModels(records);
    this._setLength();
  }

  /*
   Class
   */

  /*
   Instance
   */
  all() {
    return this.models;
  }

  find(...args) {
    return this.models.find(...args);
  }

  map(...args) {
    return this.models.map(...args);
  }

  filter(...args) {
    return this.models.filter(...args);
  }

  first() {
    return this.models[0];
  }

  last() {
    return this.models[this.length - 1]
  }

  /*
   Private
   */
  static #model = 'Model';

  // Support for the experimental syntax 'classPrivateMethods' isn't currently enabled
  _setModel(model) {
    this.model = model;
  }

  _setModels(records) {
    this.models = records.filter(record => record.constructor.name === this.model);
  }

  _setLength() {
    this.length = this.models.length;
  }
}

export default Collection;
