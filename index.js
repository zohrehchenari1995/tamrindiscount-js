

// !capitalize satement
const userName = "sAHeb"; 

function capitalizeFirstLetter (string){
  const lowerCaseString = string.toLowerCase();
  const newString = lowerCaseString[0].toUpperCase() + lowerCaseString.slice(1);
  return newString;
}
console.log(capitalizeFirstLetter("sAHeb"));

function capitalizeStatemant(string){
  const name = string.split(" ");
  const newNames = [];
  for(const n of name){
    newNames.push(capitalizeFirstLetter(n));
    return newNames.join(" ");
  };
  
}
const message = "the dogs,dogs are my favorite pet";
console.log(capitalizeStatemant(message));