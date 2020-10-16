module.exports = function toReadable(number) {
   if (number === 0) return "zero";
   let first = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
   let second = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
   let third = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
   let b = number, check = 0, arr = [], t, str = "", bool;
   while (b >= 10) {
      arr[check] = b % 10;
      b = Math.floor(b / 10);
      check++;
   }
   arr[check] = b;
   check++;

   for (let i = check - 1; i >= 0; i--) {
      t = i + 1;
      if (bool === 1) {
         str = str + find_s(arr[i], second);
         bool = 0;
      }
      else if (t === 2 || t === 5 || t === 8) {
         if (arr[i] === 1) {
            bool = 1;
            continue;
         }
         else {
            if (arr[i] !== 0)
               str = str + find_t(arr[i], third);
         }
      }
      else if (t === 1 || t === 3 || t === 4 || t === 6 || t === 7 || t === 9 || t === 10) {
         if (t === 1 && arr[i] === 0) continue;
         str = str + find_f(arr[i], first);
      }
      if (t === 3) str = str + " " + "hundred";
      if (t === 4) str = str + " " + "thousand";
      if (t === 7) str = str + " " + "million";
      // if (i !== 0 ) str = str + " ";
      if (t !== 1) str = str + " ";
   }
   str = str.replace("  ", " ");
   if (str[str.length - 1] === " ") str = str.substring(0, str.length - 1);
   return str;
}
function find_f(num, first) {
   for (let i = 0; i < 10; i++) {
      if (num === i) return first[i];
   }
}
function find_s(num, second) {
   for (let i = 0; i < 10; i++) {
      if (num === i) return second[i];
   }
}
function find_t(num, third) {
   for (let i = 0; i < 8; i++) {
      if (num === i + 2) return third[i];
   }
}