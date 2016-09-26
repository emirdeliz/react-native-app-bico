import mongoose from 'mongoose';
import Professional from './professional';

mongoose.connect('mongodb://heroku_cw2tltpr:j2fffr3d5o9so9vco106n4e65@ds041486.mlab.com:41486/heroku_cw2tltpr');

export { Professional };
