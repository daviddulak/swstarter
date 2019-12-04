export class Common {
  static idFromUrl(url) {
    let parts = url.split('/');
    return parts[parts.length - 2];
  }
}
