import ImageSchema from '../image';
import RatingSchema from '../rating';
import TypeJobSchema from '../type-job';
import ClientSchema from '../client';
import ProfessionalSchema from '../professional';

const JobSchema = {
    dateExecution: Date,
    rating: RatingSchema,
    typeJob: TypeJobSchema,
    description: String,
    images: [ImageSchema],
    professional: ProfessionalSchema,
    client: ClientSchema,
};

export default JobSchema;
