let alphabet = "abcdefghijklmnopqrstuvwxyz";
let map1 = "zxcvbnmasdfghjklqwertyuiop";
let map2 = "qazwsxedcrfvtgbyhnujmikolp";

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`What's would you like ciphered?`, text => {
  text = text.toLowerCase();

  let result = "";

  for (let i = 0; i < text.length; i++){

    if (i % 2 == 0){
    let ind = alphabet.indexOf(text.charAt(i));
　　 result += map1.charAt(ind);
    }
    else if (i % 2 != 0){
     let ind = alphabet.indexOf(text.charAt(i));
     result += map2.charAt(ind);
    }
  }

  console.log(`${text} was ciphered into ${result}`)
  readline.close()
})