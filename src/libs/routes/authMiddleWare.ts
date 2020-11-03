import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import hasPermission from '../permission';

export default ( module, permissionType ) => (req: Request, res: Response, next: NextFunction ) => {
    try {

    console.log( 'the config is ' , module,permissionType );
    console.log( 'Header is ' , req.headers['authorization'] );
    const token = req.headers['authorization'];
    const decodedUser =  jwt.verify(token, 'qwertyuiopasdfghjklzxcvbnm123456');
    const { role } = decodedUser
    console.log( 'hello ' );
    console.log( 'User', decodedUser );
    
    if ( role ) {
        if ( hasPermission( module, role, permissionType )) {
            next();
        }
        else {
            next( { error:'Permission does not exist' } )
        }
    }
    else{
        next( { error: 'Role does not exist in token' } )
        }
 }
 catch( err ) {
     next( { error: 'authentication failed' } )
 }
}