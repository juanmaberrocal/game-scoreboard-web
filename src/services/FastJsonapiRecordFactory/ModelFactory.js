import CollectionFactory from './CollectionFactory';
import Game from '../../models/Game';
import Match from '../../models/Match';
import MatchPlayer from '../../models/MatchPlayer';
import Player from '../../models/Player';

class ModelFactory {
  constructor(klassName, data, included = []) {
    this.klass = this._getKlass(klassName || data.type);
    this.id = data.id;
    this.attributes = data.attributes;
    this.relationships = this._getRelationships(data.relationships, included);

    return this._build();
  }

  /*
   Private
   */
  static #models = (modelName) => ({
    game: Game,
    match: Match,
    match_player: MatchPlayer,
    player: Player
  }[modelName])

  // Support for the experimental syntax 'classPrivateMethods' isn't currently enabled
  _build() {
    return new this.klass(this.id, this.attributes, this.relationships);
  }

  _getKlass(klassName) {
    const modelName = klassName.replace(/s$/, '');
    return ModelFactory.#models(modelName);
  }

  _getRelationships(relationshipsData, included) {
    const relationships = {};

    if (relationshipsData) {
      Object.entries(relationshipsData).forEach(([relationshipModel, relationship]) => {
        const relatedRecords = relationship.data;
        relationships[relationshipModel] = this._relationships(relationshipModel, relatedRecords, included);
      });
    }

    return relationships;
  }

  _relationships(relationshipModel, relatedRecords, included) {
    if (Array.isArray(relatedRecords)){
      return new CollectionFactory(relationshipModel, relatedRecords, included);
    } else {
      return this._relationship(relationshipModel, relatedRecords, included);
    }
  }

  _relationship(relationshipModel, relatedRecord, included) {
    const includedRecord = included.find(i => i.id === relatedRecord.id && i.type === relatedRecord.type);
    return new ModelFactory(relationshipModel, (includedRecord || relatedRecord), included);
  }
}

export default ModelFactory;
