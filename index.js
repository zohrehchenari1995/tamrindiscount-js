

function calcDiscount(price){
  const minPrice = 100;
  const stepDiscount = 3;
  const addprice = 10;
  const maxDiscount = 25;
  if(price <= minPrice + addprice){
    return "no discount";
  }
    const discount =Math.floor(((price - minPrice)/addprice) *stepDiscount);
  
  if(discount > maxDiscount){
    return "the max discount is:" + maxDiscount;
  }
  console.log(discount);
}
const result2 = calcDiscount(190);
console.log(result2)


const course = {
  title :"javascript",
  discount :30,
  price :240,
  students :["ali","vahid","saheb"],
  isFree :false,
  category: {
    id :1,
    title :"frontend",
    englishTitle :"front",
  },
  calcOffprice :function(){
    this.offPrice = this.price - (this.price * this.discount/100);
    return  this.offPrice;
  }

}

// const resultDiscount = course.calcOffprice();
// console.log(resultDiscount);
console.log(course.calcOffprice());
console.log(course.offPrice);
