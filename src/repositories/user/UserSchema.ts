import * as mongoose from 'mongoose';

export class UserSchema extends mongoose.Schema {
constructor(collecion) {
const schema = Object.assign({
_id: String,
name: String,
role: String,
email: String,
password: String
});
super(schema, collecion);
}
}