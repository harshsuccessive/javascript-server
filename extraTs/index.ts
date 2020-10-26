import {diamond,equilateral} from './patterns';
diamond(5);
console.log()
equilateral(5);


import{hasPermission} from './utils';
import{validateUser} from './utils';
const user =[{
    traineeEmail: 'trainee1@successive.tech',
    reviewerEmail: 'reviewer1@successive.tech',
    },{
        traineeEmail: 'trainee1@succssive.tech',
        reviewerEmail: 'reviewer1@successive.tech',
        }];


hasPermission('getUsers','trainer','read');
validateUser(user);