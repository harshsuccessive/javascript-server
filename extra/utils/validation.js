const user =[{
    traineeEmail: 'trainee1@successive.tech',
    reviewerEmail: 'reviewer1@successive.tech',
    },{
        traineeEmail: 'trainee1@succssive.tech',
        reviewerEmail: 'reviewer1@successive.tech',
        }];

   function validateEmail(email)
   {
       let regx =/^([a-zA-z0-9/.-]+)@(successive).(tech)$/
        return regx.test(email);
   }

   function validateUser(user)
   {
       let valid=0;
       let invalid =0;
       user.forEach(element => {
           const {traineeEmail,reviewerEmail}= element;
           if(validateEmail(traineeEmail)==true)
           {
               valid=valid+1;
               console.log("valid user = ",traineeEmail)
           }
           else
           {
            console.log("invalid user = ",traineeEmail)
               invalid=invalid+1;
           }
           if(validateEmail(reviewerEmail)==true)
           {
            console.log("valid user = ",reviewerEmail)
            valid=valid+1;
           }
           else
           {
            console.log("invalid user = ",reviewerEmail)
               invalid=invalid+1;
           }
       });
       console.log("Count of valid users = ",valid);
       console.log("count of invalid users = ",invalid);
   }


   validateUser(user);
