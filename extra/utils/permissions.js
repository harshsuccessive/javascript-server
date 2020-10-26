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
        return (permissions[moduleName][permissionType].includes(role));
        };
    d= hasPermission('getUsers','trainer','read');
console.log(d);
