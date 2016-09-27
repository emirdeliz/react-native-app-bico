import mongoose from 'mongoose';
import JobSchema from '../../../imports/model/job';
import TypeJobSchema from '../../../imports/model/type-job';
import ProfessionalSchema from '../../../imports/model/professional';

const Schema = mongoose.Schema;
const ProfessionalModel = {
    ...ProfessionalSchema,
    typeJob: [TypeJobSchema],
    job: [JobSchema],
};

const Professional = mongoose.model('professional', new Schema(ProfessionalModel));
export default Professional;
