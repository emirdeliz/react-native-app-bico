export default class Server {
  static get SERVER_HOST() {
    // return 'app-bico.herokuapp.com';
    return '192.168.0.21:8080';
  }

  static get SERVER_PORT() {
    return 'N-A';
  }

  static get SERVER_REST() {
    return `http://${this.SERVER_HOST}/api`;
  }
}
