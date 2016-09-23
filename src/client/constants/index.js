export default class Server {
    static get SERVER_HOST() {
        return 'localhost';
    }

    static get SERVER_PORT() {
        return '8080';
    }

    static get SERVER_REST() {
        return `http://${this.SERVER_HOST}:${this.SERVER_HOST}/api`;
    }
}
