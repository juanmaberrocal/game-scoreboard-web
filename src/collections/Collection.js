class Collection {
  constructor(records = []) {
    this._setModel(Collection.#model);
    this._setRecords(records);
    this._setLength();
  }

  /*
   Class
   */

  /*
   Instance
   */
  all() {
    return this.records;
  }

  find(...args) {
    return this.records.find(...args);
  }

  findById(id) {
    return this.find(record => record.id === id);
  }

  map(...args) {
    return this.records.map(...args);
  }

  filter(...args) {
    return this.records.filter(...args);
  }

  first() {
    return this.records[0];
  }

  last() {
    return this.records[this.length - 1]
  }

  /*
   Private
   */
  static #model = 'Model';

  // Support for the experimental syntax 'classPrivateMethods' isn't currently enabled
  _setModel(model) {
    this.model = model;
  }

  _setRecords(records) {
    this.records = records.filter(record => record.constructor.name === this.model);
  }

  _setLength() {
    this.length = this.records.length;
  }
}

export default Collection;
