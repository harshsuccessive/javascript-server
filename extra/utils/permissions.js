let d;
import {permissions} from '../constant'
    export default function hasPermission(moduleName, role, permissionType){
        return (permissions[moduleName][permissionType].includes(role));
        };
    d= hasPermission('getUsers','trainer','read');
console.log(d);
