import {diamond,equilateral} from './patterns';
import{hasPermission} from './utils';
import{validateUser} from './utils';
diamond(5);
console.log()
equilateral(5);




const user =[{
    traineeEmail: 'trainee1@successive.tech',
    reviewerEmail: 'reviewer1@successive.tech',
    },{
        traineeEmail: 'trainee1@succssive.tech',
        reviewerEmail: 'reviewer1@successive.tech',
        }];

hasPermission('getUsers','trainer','read');
validateUser(user);
