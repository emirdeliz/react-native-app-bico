import mongoose from 'mongoose';
import AccountSchema from '../../../imports/model/account';

const { Schema } = mongoose;
const AccountModel = {
  ...AccountSchema,
};

const Account = mongoose.model('account', new Schema(AccountModel));
export default Account;
