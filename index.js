// INCREMENT
function increment(arrayNum , number){

  let newArray = [];
  for(const item of arrayNum){
    newArray.push(item + number);
  }
  return newArray;
}
const resultNewArray = increment([2,4,6],2);
console.log(resultNewArray);



// DECREMENT
function decrement(arr ,num){
  let array = [];
  for(const index of arr){
    array.push(index - num);
  }
  return array;
}
const resultDecrement = decrement([10,8,6],3);
console.group(resultDecrement);

 
// ! دوتا تابع فوق را با استفاده از تابع مرتبه بالا و کال بک میایم و از تکرارشون جلوگیری میکنیم

// call back function
function inc(item,number){
  return item + number;
}
function dec(item,number){
  return item - number;
}

function operationOnArray (data,cb,number){
  const newArray = [];
  for(const item of data){
    newArray.push(cb(item,number));
  }
  return newArray;
}
const resultInc = operationOnArray([5,7,9],inc,2);
const resultDec = operationOnArray([10,9,8],dec,3);
console.log(resultInc);
console.log(resultDec);