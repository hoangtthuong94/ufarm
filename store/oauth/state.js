import {UserModel} from '../../models/user';

export default () => ({
  user: UserModel,
  token: null,
  expiredAt: null
});
