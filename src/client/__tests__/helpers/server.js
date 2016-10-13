import colors from 'colors';
import koa from 'koa';
import bodyParser from 'koa-bodyparser';

let app = koa();
app.use(bodyParser());

let mockRoutes = {};
let MockApp = {
    before: () => {
        // before each test
        mockRoutes = {};
    },
    after: () => {
        // after each test
        mockRoutes = {};
    },
    get: (path, response, params = null) => {
        this.stub('GET', path, response, params);
    },
    post: (path, response, params = null) => {
        this.stub('POST', path, response, params);
    },
    put: (path, response, params = null) => {
        this.stub('PUT', path, response, params);
    },
    delete: (path, response, params = null) => {
        this.stub('DELETE', path, response, params);
    },
    stub: (method, path, response, params = null) => {
        if (path[0]!=='/') path = '/' + path;
        console.log('KOA stubbing: %s %s'.magenta, method.blue, path.green);
        if (typeof response === 'string') {
            response = {body: response, params: params};
        }
        if (!response.body) {
            // assume it's a json object
            response = {body: response, params: params};
        }
        response.params = params;
        mockRoutes[method + ':' + path] = response;
    },
    pageNotFound: (req) => {
        console.log('KOA ERROR: URL not registered: %s %s'.red, req.method.blue, req.url.green);

        req.status = 404;

        switch (req.accepts('html', 'json')) {
            case 'html':
                req.type = 'html';
                req.body = '<p>Test Page Not Found</p>';
                break;
            case 'json':
                // TODO: error message json format from v3?
                req.body = {
                    message: 'Test Page Not Found'
                };
            break;
                default:
                req.type = 'text';
                req.body = 'Test Page Not Found';
        }
    },
    process: (req) => {
        let key = req.method + ':' + req.url;
        let found = mockRoutes[key];

        if (found) {
            if (found.params) {
                /*
                if (!_.isEqual(req.request.body, found.params)) {
                    console.log('KOA: %s %s received with wrong params'.red, req.method.blue, req.url.green);
                    console.log('expected: %s'.red, JSON.stringify(found.params));
                    console.log('received: %s'.red, JSON.stringify(req.request.body));

                    return this.pageNotFound(req);
                }
                */
            }
            if (found.body)   req.body = found.body;
            if (found.status) req.status = found.status;

            console.log('KOA: %s %s'.red, req.method.blue, req.url.green);
        } else {
            this.pageNotFound(req);
        }
    },
};


app.use(function *(){
    // look up in current app
    if (this.path === '/test/console.json') {
        console[this.request.body.level](...["App Log:", ...this.request.body.arguments]);
    }
    else {
        MockApp.process(this);
    }
});

app.listen(3001);

export default MockApp;
