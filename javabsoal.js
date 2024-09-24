
// !!key word this??
// const course = {
//   title :"javascript",
//   discount :30,
//   price :240,
//   students :["ali","vahid","saheb"],
//   isFree :false,
//   // price: 500,
//   category: {
//     id :1,
//     title :"frontend",
//     englishTitle :"front",
//   },
//   calcOffprice :function(){
//     this.offPrice = this.price - (this.price * this.discount/100);
//     this.country = "dubai";
//     return  this.offPrice;
  
//   }

// }

// console.log(course.calcOffprice());
// console.log(course.offPrice);
// console.log(course.country);



// !! جواب اشکال کلمه کلیدی this
// const student = {
//   name: "zohreh",
//   family: "chenari",
//   course: "javascript",
//   group: "2",
//   fullInfo: function () {
//     this.info =
//       this.name.charAt(0).toUpperCase() +
//       this.name.slice(1).toLowerCase() +
//       " " +
//       this.family.charAt(0).toUpperCase() +
//       this.family.slice(1).toLowerCase() +
//       " - BootCamp:#" +
//       this.group +
//       " Course: " +
//       this.course;
//     return this.info;
//   },
// };

// console.log(
//   student.name.charAt(0).toUpperCase() +
//     student.name.slice(1).toLowerCase() +
//     " " +
//     student.family.charAt(0).toUpperCase() +
//     student.family.slice(1).toLowerCase() +
//     " - BootCamp:#" +
//     student.group +
//     " Course: " +
//     student.course
// );
// console.log(
//   student.name.charAt(0).toUpperCase() +
//     student.name.slice(1).toLowerCase() +
//     " " +
//     student.family.charAt(0).toUpperCase() +
//     student.family.slice(1).toLowerCase() +
//     " - BootCamp:#" +
//     student.group +
//     " Course: " +
//     student.course
// );
// console.log(
//   student.name.charAt(0).toUpperCase() +
//     student.name.slice(1).toLowerCase() +
//     " " +
//     student.family.charAt(0).toUpperCase() +
//     student.family.slice(1).toLowerCase() +
//     " - BootCamp:#" +
//     student.group +
//     " Course: " +
//     student.course
// );

// console.log(student.fullInfo());
// console.log(student.info);
// console.log(student.info);
// console.log(student.info);




// !!chera az khat 11 mirim??
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



// !! جواب اشکال تخفیف
// function calcDiscount(price) {
//   const minPrice = 100;
//   const stepDiscount = 3;
//   const addPrice = 10;
//   const maxDiscount = 25;
//   if (price <= minPrice + addPrice) {
//     return "no discount";
//   }
//   const discount = Math.floor(((price - minPrice) / addPrice) * stepDiscount);
//   return "discount is: " + (discount < maxDiscount ? discount : maxDiscount);
// }

// console.log(calcDiscount(150));
