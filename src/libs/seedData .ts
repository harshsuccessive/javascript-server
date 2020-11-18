import UserRepository from '../repositories/user/UserRepository';
import * as bcrypt from 'bcrypt';
import configuration from '../config/configuration';
const userRepository: UserRepository = new UserRepository();
export default () => {
    userRepository.count()
    .then(res => {
        if(res === 0){
            const saltRounds = 10;
            const password = configuration.password;
            const salt = bcrypt.genSaltSync(saltRounds);
            const hash = bcrypt.hashSync(password,salt);
            console.log('data seeding in progress');
            userRepository.create({
                id: '1',
                name: 'Head Trainer',
                role: 'head-trainer', 
                email: 'headtrainer@successive.tech',
                password: hash
            }, undefined);
            userRepository.create({
                id: '2',
                name: 'Trainee', 
                role: 'trainee', 
                email: 'trainee@successive.tech',
                password: hash
            }, undefined);
        }
    })
    .catch(err => console.log(err));
}