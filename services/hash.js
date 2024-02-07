const CryptoJS = require("crypto-js");

function md5Hash(input) {
    const hash = CryptoJS.MD5(input);
    
    const hexHash = hash.toString(CryptoJS.enc.Hex);
    
    return hexHash;
}

module.exports = {
  md5Hash
}
