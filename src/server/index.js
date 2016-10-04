import express from 'express';
import bodyParser from 'body-parser';

import './database';
import router from './router';

const port = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));

app.get('/', (req, res) => {
    res.write('<p>Hello World</p>');
    res.end();
});

app.use('/api', router);
app.listen(port);
console.log(`Magic happens on port ${port}`);
