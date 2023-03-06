function encrypt() {
    let plaintext = document.getElementById("input").value;
    let ciphertext = "";
    for (let i = 0; i < plaintext.length; i++) {
      let charCode = plaintext.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        ciphertext += String.fromCharCode((charCode - 65 + 3) % 26 + 65);
      } else if (charCode >= 97 && charCode <= 122) {
        ciphertext += String.fromCharCode((charCode - 97 + 3) % 26 + 97);
      } else {
        ciphertext += plaintext.charAt(i);
      }
    }
    document.getElementById("output").value = ciphertext;
  }
  
  function decrypt() {
    let ciphertext = document.getElementById("output").value;
    let plaintext = "";
    for (let i = 0; i < ciphertext.length; i++) {
      let charCode = ciphertext.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        plaintext += String.fromCharCode((charCode - 65 - 3 + 26) % 26 + 65);
      } else if (charCode >= 97 && charCode <= 122) {
        plaintext += String.fromCharCode((charCode - 97 - 3 + 26) % 26 + 97);
      } else {
        plaintext += ciphertext.charAt(i);
      }
    }
    document.getElementById("input").value = plaintext;
  }
  