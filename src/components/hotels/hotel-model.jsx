import Immutable from 'immutable';

const HotelRecord = Immutable.Record({
  name : undefined,
  type : undefined,
  _id  : undefined,
  city : undefined
});

export
class HotelModel extends HotelRecord {
  get id () { return this._id; }
  get title () {
    return `${this.name} (${this.city})`;
  }
}