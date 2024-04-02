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

  mongoose.connect('mongodb+srv://emirdeliz:uRQwCCySXuXoegCW@app-bico.xes5sez.mongodb.net/?retryWrites=true&w=majority&appName=app-bico', options);
} catch (e) {
  console.log(`Error: ${e}`);
}

export { Account, Professional };
