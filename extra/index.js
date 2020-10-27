import {diamond,equilateral} from './patterns';

import{hasPermission} from './utils';
import{validateUser} from './utils';

diamond(5);
console.log()
equilateral(5);



let d;
d=hasPermission('getUsers','head-trainer','read');
console.log(d);


validateUser(user);
