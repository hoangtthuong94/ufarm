import {BaseModel} from './base';
import {UserModel} from './user';

export class OauthModel extends BaseModel {
  get token() {
    return this._token;
  }

  set token(value) {
    this._token = value || null;
  }

  get user() {
    return this._user;
  }

  set user(value) {
    this._user = value ? new UserModel(value) : null;
  }

  get expiredAt() {
    return this._expiredAt;
  }

  set expiredAt(value) {
    this._expiredAt = value || null;
  }
}
