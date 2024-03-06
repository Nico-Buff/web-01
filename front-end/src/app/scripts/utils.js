export function parseUrl(url = window.location.href) {
  return (url.split("?")[1] ?? "")
    .split("&")
    .map((q) => q.split("="))
    .reduce((params, keyValue) => {
      let [k, v] = keyValue;
      params[k] = v;
      return params;
    }, {});
}
