import { diamond, equilateral } from './patterns';
import { hasPermission } from './utils';
import { validateUser } from './utils';
import { user } from './constant';
diamond(5);
console.log();
equilateral(5);




let d: boolean;
d = hasPermission('getUsers', 'trainer', 'read');
console.log(d);
validateUser(user);