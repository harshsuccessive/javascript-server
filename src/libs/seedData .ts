import UserRepository from '../repositories/user/UserRepository';

export default function seed () {
const repository = new UserRepository();
repository.create({name: 'Harsh', roll: '123', role: 'trainee', email: 'harsh.rastogi@successive.tech'});
}