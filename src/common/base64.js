export function Base64 () {
  var BASE64 = {
    encode: function (str) {
      let Base64 = require('js-base64').Base64
      return Base64.encode(str)
    },
    decode: function (str) {
      let Base64 = require('js-base64').Base64
      return Base64.decode(str)
    }
  }
  return BASE64
}
