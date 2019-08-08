import {BaseModel} from './base';

export class UserModel extends BaseModel {
  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value || null;
  }

  get email() {
    return this._email;
  }

  set email(value) {
    this._email = value || null;
  }

  get phoneCountryPrefix() {
    return this._phoneCountryPrefix;
  }

  set phoneCountryPrefix(value) {
    this._phoneCountryPrefix = value || null;
  }

  get phoneNationalNumber() {
    return this._phoneNationalNumber;
  }

  set phoneNationalNumber(value) {
    this._phoneNationalNumber = value || null;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    this._firstName = value || null;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    this._lastName = value || null;
  }
}
