import {validateEmail} from './helpers'
        


  export default function validateUser(user: IUsers[]): void
   {
    let invalidUsers: string[] = [];
    let validUsers: string[] =[];
       let countOfValid: number=0;
       let countOfInvalid: number =0;
       user.forEach(element => {
           const {traineeEmail,reviewerEmail}= element;
           if(validateEmail(traineeEmail)==true)
           {
            countOfValid=countOfValid+1;
               validUsers.push(traineeEmail);
           }
           else
           {
            invalidUsers.push(traineeEmail);
            countOfInvalid=countOfInvalid+1;
           }
           if(validateEmail(reviewerEmail)==true)
           {
            validUsers.push(reviewerEmail);
            countOfValid=countOfValid+1;
           }
           else
           {
            invalidUsers.push(reviewerEmail);
            countOfInvalid=countOfInvalid+1;
           }
       });
       console.log("Valid users are ",validUsers);
       console.log("Count of valid users = ",countOfValid);
       console.log("Invalid users are ",invalidUsers);
       console.log("count of invalid users = ",countOfInvalid);
   }


   //validateUser(user);
