import CollectionFactory from './CollectionFactory';
import ModelFactory from './ModelFactory';

class RecordFactory {
  constructor(klassName, data, included = []) {
    if (Array.isArray(data)) {
      return new CollectionFactory(klassName, data, included);
    } else {
      return new ModelFactory(klassName, data, included);
    }
  }
}

export default RecordFactory;
