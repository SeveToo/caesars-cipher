function zaszyfruj() {
  let wyraz = document.getElementById("normal").value;
  let szyfr = "";
  for (const i of wyraz) {
    console.log(i);
    if (i == " ") {
      let AsciiLitery = i.charCodeAt(0);
      szyfr += String.fromCharCode(AsciiLitery);
    } else if (i.charCodeAt(0) > 108) {
      let AsciiLitery = i.charCodeAt(0) - 12;
      szyfr += String.fromCharCode(AsciiLitery);
    } else {
      let AsciiLitery = i.charCodeAt(0) + 14;
      szyfr += String.fromCharCode(AsciiLitery);
    }
  }
  document.getElementById("encripted").innerHTML = szyfr;
}
function odszyfruj() {
  let szyfr = document.getElementById("encripted").value;
  let norm = "";

  for (const i of szyfr) {
    console.log(i);
    if (i == " ") {
      let AsciiLitery = i.charCodeAt(0);
      norm += String.fromCharCode(AsciiLitery);
    } else if (i.charCodeAt(0) < 111) {
      let AsciiLitery = i.charCodeAt(0) + 12;
      norm += String.fromCharCode(AsciiLitery);
    } else {
      let AsciiLitery = i.charCodeAt(0) - 14;
      norm += String.fromCharCode(AsciiLitery);
    }
  }
  document.getElementById("normal").innerHTML = norm;
}

// console.log(szyfr);

// console.log("----");

// console.log('n'.charCodeAt(0));
// console.log(m.charCodeAt(0));
// let a = "a"; // 97
// let z = "z"; // 122
// let n = "n"; // 110

// console.log(a.charCodeAt(0)); // 97
// console.log(z.charCodeAt(0)); // 122
// console.log(n.charCodeAt(0)); // 110
// console.log(String.fromCharCode(65));
