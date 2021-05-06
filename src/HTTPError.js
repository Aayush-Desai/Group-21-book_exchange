export default class HTTPError extends Error {
  constructor(err) {
    super(`${err.status} - ${err.statusText}`);
    this.status = err.status;
  }
}
