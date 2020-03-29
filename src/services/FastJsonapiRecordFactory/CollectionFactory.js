import ModelFactory from './ModelFactory';
import Games from '../../collections/Games';
import Matches from '../../collections/Matches';
import MatchPlayers from '../../collections/MatchPlayers';
import Players from '../../collections/Players';

class CollectionFactory {
  constructor(klassName, data, included = []) {
    this.klass = this._getKlass(klassName);
    this.records = this._getRecords(klassName, data, included);

    return this._build();
  }

  /*
   Private
   */
  static #collections = {
    game: Games,
    match: Matches,
    match_player: MatchPlayers,
    player: Players
  }

  // Support for the experimental syntax 'classPrivateMethods' isn't currently enabled
  _build() {
    return new this.klass(this.records);
  }

  _getKlass(klassName) {
    const collectionName = klassName.replace(/s$/, '');
    return CollectionFactory.#collections[collectionName];
  }

  _getRecords(klassName, recordsData, included) {
    return recordsData.map(recordData => this._getRecord(klassName, recordData, included));
  }

  _getRecord(klassName, recordData, included) {
    if (recordData.attributes) {
      return new ModelFactory(klassName, recordData, included);
    } else {
      const includedRecord = included.find(i => i.id === recordData.id && i.type === recordData.type);
      return new ModelFactory(klassName, (includedRecord || recordData), included);
    }
  }
}

export default CollectionFactory;
