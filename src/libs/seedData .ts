import UserRepository from '../repositories/user/UserRepository';
import * as bcrypt from 'bcrypt';
import configuration from '../config/configuration';
const userRepository: UserRepository = new UserRepository();
export default () => {
    userRepository.count()
    .then(res => {
        if(res === 0){
            console.log('data seeding in progress');
            userRepository.create({
                id: '1',
                name: 'Head Trainer',
                role: 'head-trainer', 
                email: 'headtrainer@successive.tech',
                password: "12345"
            }, undefined);
            userRepository.create({
                id: '2',
                name: 'Trainee', 
                role: 'trainee', 
                email: 'trainee@successive.tech',
                password: "training@123"
            }, undefined);
        }
    })
    .catch(err => console.log(err));
}