
const cart = [
  {
    id:1,
    title:"p-1",
    price:100,
  },
  {
    id:2,
    title:"p-2",
    price:110,
  },
  {
    id:3,
    title:"p-3",
    price:120,
  },
  {
    id:4,
    title:"p-4",
    price:130,
  },
]

const enRolledCart = [];

function checkedEnrolled (carts, enRolled){

   const cartCourseIds = carts.map((getIdCart)=> { return getIdCart.id});
   const found = enRolled.some((item)=> { return cartCourseIds.includes(item)});
   if(found) {
    return "your course is exist"
  };
   return "your successfuly regidter";
}
console.log(checkedEnrolled(cart,enRolledCart))