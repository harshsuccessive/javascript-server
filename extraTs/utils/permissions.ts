let d: number;
import {permissions} from '../constant'
    export default function hasPermission(moduleName: string, role: string, permissionType: string): void{
        console.log(permissions[moduleName][permissionType].includes(role));
        };
    //hasPermission('getUsers','trainer','read');