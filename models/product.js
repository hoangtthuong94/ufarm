import {BaseModel} from './base';

export class Product extends BaseModel {
  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value || null;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value || null;
  }

  get price() {
    return this._price || 0;
  }

  set price(value) {
    this._price = value || 0;
  }

  get category() {
    return this._category;
  }

  set category(value) {
    this._category = value || null;
  }

  get thumbnail() {
    return this._thumbnail;
  }

  set thumbnail(value) {
    this._thumbnail = value || null;
  }


  get description() {
    return this._description;
  }

  set description(value) {
    this._description = value || null;
  }
}
