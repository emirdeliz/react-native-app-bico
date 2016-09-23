import mongoose from 'mongoose';
import { JobSchema } from '../../model/job';
import { TypeJobSchema } from '../../model/type-job';
import { ProfessionalSchema } from '../../model/professional';

const Schema = mongoose.Schema;
const ProfessionalModel = {
    ...ProfessionalSchema,
    note: String,
    typeJob: [TypeJobSchema],
    job: [JobSchema],
    noteAveragePrice: Number,
    noteAverageService: Number,
    noteAverageScore: Number,
    distance: Number,
};

const Professional = mongoose.model('professional', new Schema(ProfessionalModel));
export default Professional;
