/**
 * 全角转半角
 */

function ToCDB(str) {
  let tmp = "";
  for (let i = 0; i < str.length; i++) {
    var code = str.charCodeAt(i);
    if (code > 65348 && code < 65375) { // Unicode编码中所有的全角英文字符以及各种字符
      tmp += String.fromCharCode(code - 65248)
    } else if (code == 12288) { //空格
      tmp += String.fromCharCode(code - 12256)
    } else {
      tmp += String.fromCharCode(code)
    }
  }
  return tmp;
}