module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) {
      return false;
  }

  /*let k = 0;
  let p = 0;
  while (k < str.length) {
      if (str[i] === '|') {
        p = p + 1;
      }
      k++;
  } 
  if (p % 2 !== 0) {
      return false;
  }*/

  let kr1 = 0;
  let kv2 = 0;
  let fi3 = 0;
  let pr4 = 0;
  let n1m5 = 0;
  let n3m6 = 0;
  let n5m7 = 0;
  let n7m8 = 0;
  let n8m9 = 0;

  let kr11 = 0;
  let kv22 = 0;
  let fi33 = 0;
  let pr44 = 0;
  let n2m55 = 0;
  let n4m66 = 0;
  let n6m77 = 0;
  let n7m88 = 0;
  let n8m99 = 0;

  let rev;
  let massOpen = [''];
  let i = 0;
  let pp = 0;
  while (i < str.length) {
      if (str[i] === '|') {
        if (massOpen[massOpen.length-1] === '|') {
            massOpen.pop();
        } else {
            massOpen.push('|');
        }
            
            let kk = 0;
            while (kk < massOpen.length-1) {
                if (massOpen[kk] === '|') {
                    return false;
                }
                kk++;
            }
            

      } else if (str[i] === '7') {
        if (massOpen[massOpen.length-1] === '7') {
            massOpen.pop();
        } else {
            massOpen.push('7');
        }
            
            let kk = 0;
            while (kk < massOpen.length-1) {
                if (massOpen[kk] === '7') {
                    return false;
                }
                kk++;
            }
            

      } else if (str[i] === '8') {
        if (massOpen[massOpen.length-1] === '8') {
            massOpen.pop();
        } else {
            massOpen.push('8');
        }
            
            let kk = 0;
            while (kk < massOpen.length-1) {
                if (massOpen[kk] === '8') {
                    return false;
                }
                kk++;
            }
            

      } else if (str[i] === '(' || str[i] === '[' || str[i] === '{' || str[i] === '1' || str[i] === '3' || str[i] === '5') {
        massOpen.push(str[i]);
      } else {

        if (str[i] === ')') {
            rev = '(';
        } else if (str[i] === ']') {
            rev = '[';
        } else if (str[i] === '}') {
            rev = '{';
        } else if (str[i] === '|') {
            rev = '|';
        } else if (str[i] === '2') {
            rev = '1';
        } else if (str[i] === '4') {
            rev = '3';
        } else if (str[i] === '6') {
            rev = '5';
        } else if (str[i] === '7') {
            rev = '7';
        } else if (str[i] === '8') {
            rev = '8';
        } 


          if (rev !== massOpen[massOpen.length-1]) {
            return false;
          } else {
              massOpen.pop();
          }

      }
      i++;

  }
  return true;
}
