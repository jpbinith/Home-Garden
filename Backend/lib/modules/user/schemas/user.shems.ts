import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
    user_name: {
        type: String,
        unique: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: String,
    email: String,
    phone_number: [String]
});

export default mongoose.model('users', schema);