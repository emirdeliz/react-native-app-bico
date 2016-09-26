import mongoose from 'mongoose';
import Professional from './professional';

try {
    mongoose.connect('mongodb://appbico:root@ds041486.mlab.com:41486/heroku_cw2tltpr');
} catch(e) {
    console.log(`Error: ${e}`);
}

export { Professional };
