import * as mongoose from 'mongoose';
import IUserModel from './IUserModel';
import { userModel } from './UserModel';
import * as bcrypt from 'bcrypt';
import VersionableRepository from '../versionable/VersionableRepository';

export default class UserRepository extends VersionableRepository<IUserModel, mongoose.Model<IUserModel>> {

    constructor() {
        super(userModel);
    }

    public create(data, creator) {
        const rawPassword = data.password;
        console.log('rawPassword' , rawPassword);
         const saltRounds = 10;
         const salt = bcrypt.genSaltSync(saltRounds);
         const hashedPassword = bcrypt.hashSync(rawPassword, salt);
         data.password = hashedPassword;
         console.log('data pass: ', data.password);
         return super.create(data, creator);
    }
     public updateUser(id, data, updator) {
       if ('password' in data) {
         const rawPassword = data.password;
         const saltRounds = 10;
         const salt = bcrypt.genSaltSync(saltRounds);
         const hashedPassword = bcrypt.hashSync(rawPassword, salt);
         data.password = hashedPassword;
     }
         return super.update(id, data, updator);
     }

    public getUser(data) {
        return super.getUser(data);
    }

    public deleteData(id, remover) {
        return super.delete(id, remover);
    }

    public findone(data) {
        return super.findOne(data);
    }

    public countData() {
        return userModel.countDocuments();
    }

    public getAll(query: any, projection: any = {}, options: any = {}, sort: any = {}): mongoose.DocumentQuery<IUserModel[], IUserModel> {
        options.limit = options.limit || 0;
        options.skip = options.skip || 0;
        const finalQuery = { deletedAt: undefined, ...query };
        return this.model.find(finalQuery, projection, options).sort({...sort});
    }
}