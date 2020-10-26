let d: boolean;
import {permissions} from '../constant'
    export default function hasPermission(moduleName: string, role: string, permissionType: string): boolean{
        return (permissions[moduleName][permissionType].includes(role));
        };
//d= hasPermission('getUsers','trainer','read');
    //console.log(d);