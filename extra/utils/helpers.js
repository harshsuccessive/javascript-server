export function validateEmail(email)
{
    let regx =/^([a-zA-z0-9/.-]+)@(successive).(tech)$/
     return regx.test(email);
}
