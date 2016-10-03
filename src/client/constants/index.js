export default class Server {
    static get SERVER_HOST() {
        return 'app-bico.herokuapp.com';
        //return 'localhost:8080';
    }

    static get SERVER_PORT() {
        return 'N-A';
    }

    static get SERVER_REST() {
        return `http://${this.SERVER_HOST}/api`;
    }
}
