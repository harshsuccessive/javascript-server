export function validateEmail ( email: string ): boolean {
    const regx = /^([a-zA-z0-9/.-]+)@(successive).(tech)$/;
     return regx.test( email );
}
