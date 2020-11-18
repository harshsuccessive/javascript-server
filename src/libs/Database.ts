import * as mongoose from 'mongoose';
import seed from './seedData ';

class Database {
    static open (mongoURL: string) {
        return new Promise( ( resolve, reject ) => {
            console.log('Inside open method');
            mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
                if ( err ) {
                    console.log(err);
                    reject(err);
                    return;
                }
                seed();
                resolve();
            });
        });
    }

    static disconnect() {
        console.log('Inside disconnect');
    }
}
export default Database;