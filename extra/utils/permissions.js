<<<<<<< HEAD
import{permissions} from '../constant'
=======
import {permissions} from '../constant'



>>>>>>> 8e5ec29b98f4ac62767f62c4e2deb8cabd179f3c
export default function hasPermission(moduleName,role,permissionType){
    for(const [key,value] of Object.entries(permissions))
    {
        if (key == moduleName)
        {
            if(value.all.includes(role))
            {
                return true;
            }
            else{
                for(const [key1,value1] of Object.entries(value)){
                    if(key1== permissionType){
                        if(Object.values(value1).includes(role))
                        {
                            return true;
                        }
                        return false;
                    }
                    else{
                        continue;
                    }

                }
            }
        }
        else{
            continue;
        }

    }
}