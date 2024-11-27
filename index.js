// // function loginUser(email,callback){
// //   setTimeout(()=>{
// //     callback({email});
// //   },1000);
// // }

// // function findEnrolldCourse(email,callback){
// //   setTimeout(()=>{
// //     callback(["react","next","typescript"]);
// //   },2000);
// // }

// // function getEpisode(courseTitle,callback){
// //   setTimeout(()=>{
// //     callback(["E01","E02","E03"]);
// //   },1000);
// // }

// // loginUser("user@gmail.com",(userData)=>{
// //   console.log(userData);
// //   findEnrolldCourse(userData,(course)=>{
// //     console.log(course);
// //     getEpisode(course[0],(episode)=>{
// //       console.log(episode);
// //     })
// //   })
// // })

// //------------------------------------ promise

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ email: "user@gmail.com" });
//   }, 1000);
// });

// function loginUser(email) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ email });
//     }, 2000);
//   });
// }

// function findEnRolledCourse(email) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(["react", "next", "tail"]);
//     }, 1000);
//   });
// }

// function getEpisode() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(["E01", "E02", "E03"]);
//     }, 2000);
//   });
// }

// async function displayEpisode() {
//   const userData = await loginUser("user@gmail.com");
//   const course = await findEnRolledCourse(userData.email);
//   const episode = await getEpisode(course[0]);
//   return episode;
// }
// (async()=>{
//   console.log(await displayEpisode());
// })();

// // loginUser("user@gmail.com")
// // .then((userData)=>{
// //   console.log(userData);
// //   return findEnRolledCourse(userData.email);
// // })
// // .then((course)=>{
// //   console.log(course);
// //   return getEpisode(course[0]);
// // })
// // .then((episode)=>{
// //   console.log(episode)
// // })


// console.log("first log before fetch");

// setTimeout(()=>{
//   console.log("callback run after 2 seconde");
// },2000);

// console.log("second log after fetch");

const getDataBtn = document.querySelector(".get-data");
const postDataBtn = document.querySelector(".post-data");

getDataBtn.addEventListener("click",getUsers);
postDataBtn.addEventListener("click",loginUser);


function getUsers(){
  fetch("https://reqres.in/api/users")
  .then((res)=>{
    return res.json();
  })
  .then((res)=>{
    console.log(res.data);
  })
}

function loginUser(){

  const user = {
    "email": "eve.holt@reqres.in",
    "password": "cityslicka",
};
  fetch("https://reqres.in/api/login",{
    method: "POST",
    body: JSON.stringify(user),
    headers:{
      "Content-Type":"appliction/json",
    }
  })
  .then((res)=>{
    return res.json();
  })
  .then((res)=>{
    console.log(res);
  })
  .catch((err)=>{
    console.log(err);
  })
}

