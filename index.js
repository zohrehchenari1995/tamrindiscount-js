
 const eventInput = document.querySelector("#search-value");

 eventInput.addEventListener("copy",(eventCopy)=>{
    console.log(`${eventCopy.type} : ${document.getSelection()}`);
 });