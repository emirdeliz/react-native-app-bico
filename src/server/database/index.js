import mongoose from 'mongoose';
import { Professional } from './professional';

mongoose.connect('mongodb://localhost/app-bico');

export default Professional;
