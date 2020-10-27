export let permissions =
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
    export const user =[{
        traineeEmail: 'trainee1@successive.tech',
        reviewerEmail: 'reviewer1@successive.tech',
        },{
            traineeEmail: 'trainee1@succssive.tech',
            reviewerEmail: 'reviewer1@successive.tech',
            }];
    