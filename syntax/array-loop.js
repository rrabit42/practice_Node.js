var number = [1, 400, 12, 34, 5];
var i = 0;
var total = 0;
while(i < number.length){
  total += number[i];
  // console.log(number[i]); // number[5]는 undefined가 뜸
  i = i + 1;
}
