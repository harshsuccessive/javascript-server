import UserRepository from '../repositories/user/UserRepository';

export default function seed () {
const repository = new UserRepository();
repository.create({name: 'anuj', roll: '123', role: 'trainee', email: 'anuj.jaiswal@successive.tech'});
} 