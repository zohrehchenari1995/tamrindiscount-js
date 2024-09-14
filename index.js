
// // !!chera az khat 11 mirim??
// function calcDiscount(price){
//   const minPrice = 100;
//   const stepDiscount = 3;
//   const addprice = 10;
//   const maxDiscount = 25;
//   if(price <= minPrice + addprice){
//     return "no discount";
//   }
//     const discount =Math.floor(((price - minPrice)/addprice) *stepDiscount);
  
//   if(discount > maxDiscount){
//     return "the max discount is:" + maxDiscount;
//   }
//   console.log(discount);
// }
// const result2 = calcDiscount(190);
// console.log(result2)


// !!key word this??
const course = {
  title :"javascript",
  discount :30,
  price :240,
  students :["ali","vahid","saheb"],
  isFree :false,
  // price: 500,
  category: {
    id :1,
    title :"frontend",
    englishTitle :"front",
  },
  calcOffprice :function(){
    this.offPrice = this.price - (this.price * this.discount/100);
    this.country = "dubai";
    return  this.offPrice;
  
  }

}

console.log(course.calcOffprice());
console.log(course.offPrice);
console.log(course.country);


// factory function

// function createCourse(title,price,discount){
//   return {
//     title,
//     price,
//     discount,
//   }
// }
// console.log(createCourse("react.js",200,10));
// console.log(createCourse("javascript",500,20))

// factory function

// function creatCircleArea(radius,qotr,p){
//   return {
//     radius,
//     qotr,
//     p,
//   }
// }
// console.log(creatCircleArea(2,4,3.14));

// factory function

// function infoUser(price,discount){
//   return {
//     price,
//     discount,
//     calcoffPrice(){
//       return price -(price * discount/100);
//     }
//   }
// }
//  const result =infoUser("zohreh","ch",29);
//  console.log(result)
//  const resultFun = infoUser(200,10).calcoffPrice();
//  console.log(resultFun);

// factory function

// function createCourse(title,price,discount){
//   return {
//     title,
//     price,
//     discount,
//     calcOffprice(){
//       return price - (price * discount/100);
//     },
//   }
// }
// const result = createCourse("react",500,20).calcOffprice();
// console.log(result);



// constructor function
// function CreateCourse(title,discount,price){
//   this.title = title;
//   this.discount = discount;
//   this.price = price;
//   this.calcOffprice = function(){
//     return price - (price * discount/100);
//   }
// }
// const result3 = new CreateCourse("js",50,600);
// const result4 = new CreateCourse("react",20,700);
// console.log(result3.calcOffprice());
// console.log(result4.calcOffprice());

// built in constructor function

// const userName ="saheb";
// console.log(userName.length);


// const strLit = "saheb";
// const strObj =  new String ("saheb");
// console.log(strLit);
// console.log(strObj);
// console.log(typeof strLit);
// console.log(typeof strObj);


