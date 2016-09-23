import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const AccountSchema = new Schema({
    name: String,
    adress: String,
    picture: String,
    ddd: Number,
    noteAveragePrice: Number,
    noteAverageService: Number,
    noteAverageScore: Number,
    email: String,
});

const Account = mongoose.model('account', AccountSchema);
export { AccountSchema, Account };
