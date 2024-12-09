// selecting
const getDataBtn = document.querySelector(".get-data");
const postDataBtn = document.querySelector(".post-data");
const updateDataBtn = document.querySelector(".update-data");
const deleteDataBtn = document.querySelector(".delete-data");

// event
getDataBtn.addEventListener("click",getUser);
postDataBtn.addEventListener("click",loginUser);
updateDataBtn.addEventListener("click",updateUser);
deleteDataBtn.addEventListener("click",deleteUser)

// function fetch api

// async function getUser(){
//  try{
//   const res = await fetch("https://reqres.in/api/users"); 
//   const result2 =  await res.json();
//   console.log(result2.data);
//   if(result2.ok){
//     return result2;
//   }
//   throw new Error(result2.error);
// }
// catch(error){
//   console.log(error.message);
// };
// }

// async function loginUser(){
//   const user={
//       "email": "eve.holt@reqres.in",
//       "password": "cityslicka",
//   };

//  try{
//   const res = await fetch("https://reqres.in/api/login",{
//     method:"POST",
//     body:JSON.stringify(user),
//     headers:{
//       "Content-Type":"application/json",
//     }
//   });
  
// const result = await res.json();
// console.log(result);
// if(result.ok){
//   return result;
// }
// throw new Error(result.error);
//  }
//  catch(error){
//   console.log(error.message);
//  }
// }

// config axios
const app = axios.create({
  baseURL: 'https://reqres.in/api'
});

// interceptors for req
app.interceptors.request.use((config)=>{
  return config
},
(error)=>{
  return Promise.reject(error)
})

// interceptors for response
app.interceptors.response.use((response)=>{
  console.log("successfully fetch");
  return response;
},
(error)=>{
  console.log("something went wrong");
  return Promise.reject(error);
})

// axios get & post

async function getUser(){
  const token = "@#eot#io";
  try{
    const res = await app.get("/users?page=2",{
      Authorization : `Bearer ${token}`,
    });
    console.log(res.data.data);
 }
 catch(error){
  console.log(error);
 }
}

async function loginUser(){
  const user = {
    "email": "eve.holt@reqres.in",
    // "password": "cityslicka",
  }
  try{
    const res2 = await app.post("/login",user);
    console.log(res2.data);
  }
  catch(error){
    console.log(error.response.data.error);
  }
}

// axios update & delete

async function updateUser(){
 const userInfo = {
    "name": "morpheus",
    "job": "zion resident"
}
try{
  const  {data}= await app.patch("/users/2",userInfo);
  console.log(data);
}
catch(error){
  console.log(error.response.error);
}
}

async function deleteUser(){
  
  try{
    const {data}= await app.delete("/users/2",{
    });
    console.log(data.data);
  }
  catch(error){
    console.log(error.response.data.error);
  }
}