import {diamond,equilateral} from './patterns';
import{hasPermission} from './utils';
import{validateUser} from './utils';
diamond(5);
console.log()
equilateral(5);



let d;
const user =[{
    traineeEmail: 'trainee1@successive.tech',
    reviewerEmail: 'reviewer1@successive.tech',
    },{
        traineeEmail: 'trainee1@succssive.tech',
        reviewerEmail: 'reviewer1@successive.tech',
        }];

d=hasPermission('getUsers','trainer','read');
console.log(d);
validateUser(user);
