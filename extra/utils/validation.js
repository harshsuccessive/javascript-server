const user =[{
    traineeEmail: 'trainee1@successive.tech',
    reviewerEmail: 'reviewer1@successive.tech',
    },{
        traineeEmail: 'trainee1@succssive.tech',
        reviewerEmail: 'reviewer1@successive.tech',
        }];
        let invalidUsers = [];
        let validUsers =[];

   function validateEmail(email)
   {
       let regx =/^([a-zA-z0-9/.-]+)@(successive).(tech)$/
        return regx.test(email);
   }

   function validateUser(user)
   {
       let countOfValid=0;
       let countOfInvalid =0;
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


   validateUser(user);