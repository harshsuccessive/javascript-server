let d;
import {permissions} from '../constant'
    export default function hasPermission(moduleName, role, permissionType){
        console.log(permissions[moduleName][permissionType].includes(role));
        };
    //hasPermission('getUsers','trainer','read');