import mongoose from 'mongoose';
import { ProfessionalSchema } from '../professional';

const { Schema } = mongoose;
const ContactSchema = new Schema({
  sender: ProfessionalSchema,
  messages: [],
});

const Contact = mongoose.model('job', ContactSchema);
export { ContactSchema, Contact };
