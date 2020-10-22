let d;
let permissions =
{
    'getUsers': {
    all: ['head-trainer'],
    read : ['trainee', 'trainer'],
    write : ['trainer'],
    Delete: [],
    },
    'getUser1': {
        all: ['head-trainer'],
        read : ['trainee', 'trainer'],
        write : ['trainer'],
        Delete: ['trainee'],
        }
            
    }
    export default function hasPermission(moduleName, role, permissionType){
        console.log(permissions[moduleName][permissionType].includes(role));
        };
    //hasPermission('getUsers','trainer','read');