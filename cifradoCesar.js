function rot13(str) {
    str = str.toUpperCase();
    const alphab = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const splitAlphab = alphab.split("");
    const alphab13 = "NOPQRSTUVWXYZABCDEFGHIJKLM"
    const splitAlphab13 = alphab13.split("")
  
    let str13 = [];
    const n = str.length;
    for (let i = 0; i < n; i++ ){
      if (alphab.includes(str[i])){
        str13 += splitAlphab13[splitAlphab.indexOf(str[i])]
    } else {
      str13 += str[i]
    }
    }
    return str13;
  }
  
  console.log(rot13("SErR PBQR PNZC"));