import ProfessionalSchema from '../professional';

const ChatSchema = {
    user: ProfessionalSchema,
    text: String,
    image: String,
    createdAt: Date,
};

export default ChatSchema;
