function isValidIP(str) {
  console.log(str);
  const regexLetters = /\D/;
  const regexLeadingCero = /^0/;
  const limit = 255;
  const edgeCase = "0.0.0.0";

  if (str === edgeCase) {
    console.log("true");
    return true;
  }

  var ip = str.toString().split(".");
  console.log(ip);

  var isMatchLeadingCero = ip.map(x => regexLeadingCero.test(x));

  for (var i = 0; i < ip.length; i++) {
    if (ip[i] === "0") {
      isMatchLeadingCero[i] = false;
    }
  }

  /*   console.log(isMatchLeadingCero); */

  var isMatchLetters = ip.map(x => regexLetters.test(x));
  /*   console.log(isMatchLetters); */

  var isMatchLessThanLimit = ip.map(x => parseInt(x) > limit);
  /*   console.log(isMatchLessThanLimit); */
  var isMatchtoCero = ip.map(x => x === "0");
  /*   console.log(isMatchtoCero); */
  var isMatchToDoubleCero = ip.map(x => x === "00");
  /*   console.log(isMatchToDoubleCero); */
  var isMatchLessThanTwoDigits = ip.map(x => x < 2);
  /*   console.log(isMatchLessThanTwoDigits); */
  var isMatchtoNull = ip.includes("");

  if (isMatchtoCero.includes(true) && isMatchLessThanTwoDigits.includes(true)) {
    if (
      ip.length != 4 ||
      isMatchLetters.includes(true) ||
      isMatchLessThanLimit.includes(true) ||
      isMatchLeadingCero.includes(true) ||
      isMatchToDoubleCero.includes(true) ||
      isMatchtoNull
    ) {
      return false;
    } else {
      return true;
    }
  } else if (
    ip.length != 4 ||
    isMatchLetters.includes(true) ||
    isMatchLeadingCero.includes(true) ||
    isMatchLessThanLimit.includes(true) ||
    isMatchToDoubleCero.includes(true) ||
    isMatchtoNull
  ) {
    return false;
  } else {
    return true;
  }
}

isValidIP("0.0.0.0"); //valid
isValidIP("1.2.3.4"); //valid
isValidIP("123.45.67.89"); //valid
isValidIP("123.456.789.0"); //invalid leading cero
isValidIP("123.456.78.90"); //invalid more than 255
isValidIP("123.045.067.089"); //invalid leading cero
isValidIP("42.117.0.67"); //should be true
isValidIP("84.46.0.95"); //should be true
isValidIP("0.0.0.0"); //should be true
isValidIP("247.246.23.00"); //should be false
isValidIP("190..169.245"); //should be false
isValidIP("219.00.221.15"); //should be false
isValidIP("082.221.0.155"); //should be false

/* function isValidIP(str) {
    console.log(str);
    const regexLetters = /\D/;
    const regexLeadingCero = /^0/;
    const limit = 255;
  
    var ip = str.toString().split(".");
    console.log(ip);
    var isMatchLetters = ip.map(x => regexLetters.test(x));
    console.log(isMatchLetters);
    var isMatchLeadingCero = ip.map(x => regexLeadingCero.test(x));
    console.log(isMatchLeadingCero);
    var isMatchLessThanLimit = ip.map(x => parseInt(x) > limit);
    console.log(isMatchLessThanLimit);
    var isMatchtoCero = ip.map(x => parseInt(x) === 0);
    console.log(isMatchtoCero);
    var isMatchToDoubleCero = ip.map(x => x === "00");
    console.log(isMatchToDoubleCero);
    var isMatchtoNull = ip.includes("");
  
    if (isMatchtoCero.includes(true)) {
      if (
        ip.length != 4 ||
        isMatchLetters.includes(true) ||
        isMatchLessThanLimit.includes(true) ||
        isMatchToDoubleCero.includes(true) ||
        isMatchtoNull
      ) {
        return false;
      } else {
        return true;
      }
    } else if (
      ip.length != 4 ||
      isMatchLetters.includes(true) ||
      isMatchLeadingCero.includes(true) ||
      isMatchLessThanLimit.includes(true) ||
      isMatchToDoubleCero.includes(true) ||
      isMatchtoNull
    ) {
      return false;
    } else {
      return true;
    }
  } */
