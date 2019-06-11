function scramble(str1, str2) {
  var strOne = str1.split("");
  var strTwo = str2.split("");

  var strOneArray = [];
  var strTwoArray = [];

  for (i = 0; (i = strOne.length); i++) {}

  let checker = (arr, target) => target.every(v => arr.includes(v));
  console.log(checker(strOne, strTwo));
  return checker(strOne, strTwo);
}

scramble("cedewaraaossoqqyt", "codewars");
