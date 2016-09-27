import mongoose from 'mongoose';
import Account from './account';
import Professional from './professional';

try {
    const options = {
        server: {
            socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 },
        },
        replset: {
            socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 },
        },
    };

    mongoose.connect('mongodb://appbico:root@ds041486.mlab.com:41486/heroku_cw2tltpr', options);
} catch (e) {
    console.log(`Error: ${e}`);
}

export { Account, Professional };
