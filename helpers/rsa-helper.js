const CryptoJS = require("crypto-js");

export function encrypt_decrypt(action, string) {
    let output = false;
    const encrypt_method = "AES-256-CBC";
    const secret_key = 'learnpassencryptedurlgjhfgs65675fsdjhjh3423hgj';
    const secret_iv = 'learnpassencivgjhfgs65675fsdjhjh3423hgjx'; // Change IV to a different constant

    // Hash the secret key and convert to WordArray
    const key = CryptoJS.SHA256(secret_key);

    // Convert IV to WordArray
    const iv = CryptoJS.enc.Hex.parse(secret_iv.substring(0, 32)); // Use the first 16 bytes (32 characters) of secret_iv

    if (action == 'encrypt') {
        // Encrypt using the consistent IV
        output = CryptoJS.AES.encrypt(string, key, { iv: iv }).toString();
        output = btoa(output);
    } else if (action == 'decrypt') {
        // Decrypt using the consistent IV
        output = CryptoJS.AES.decrypt(atob(string), key, { iv: iv }).toString(CryptoJS.enc.Utf8);
    }
    return output;
}
