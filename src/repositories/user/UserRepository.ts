import * as mongoose from 'mongoose';
import IUserModel from './IUserModel';
import { userModel } from './UserModel';

export default class UserRepository {
public static generateObjectId() {
return String(mongoose.Types.ObjectId);
}
public create (data: any): Promise<IUserModel> {
console.log(data);
const id = UserRepository.generateObjectId();
const model = new userModel({
_id: id,
...data,
});
return model.save();
}

public count() {
return userModel.countDocuments();
}
} 