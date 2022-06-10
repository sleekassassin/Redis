// const redis=require("redis");
// const client1 = redis.createClient(6379);
//
// client1.on('error', (err) => console.log('Redis Client Error', err));
//
// client1.connect();
// // client1.set("key","value");
// client1.get("key").then(function(hit){
//   if(hit===null){
//     console.log("mil gaya");
//   }
// });

const axios=require("axios");
const express=require("express");
const redis=require("redis");

const app=express();
// Make request
const client1=redis.createClient(6379);
const client2=redis.createClient(6378);

let f1=true;
let f2=true;

// (async function(){
//   try{
//     await client1.connect();
//   }
//   catch(error){
//     f1=false;
//   }
// })();
(async function(){
  try{
    await client2.connect();
  }
  catch(error){
    f2=false;
  }
})();
// client1.connect();
// client2.connect();
// client1.on("error", (error) => {
//  console.error(error);
// });
// console.log("number1");
client2.set("key2","pradeep");
// client1.set("key1","mohit");

console.log("hello");
// app.get("/",function(req,res){
//   try{
//     const key="key";
//     if(f1===false && f2===false){
//       axios.get("https://jsonplaceholder.typicode.com/photos").then(function(response){
//         res.send(response.data);
//       });
//     }
//     else if(f1===true && f2===true){
//       let f="null";
//       client1.get(key).then(function(hit){
//         f=hit;
//       });
//       if(f!=="null"){
//         client2.set(key, f,{
//           EX:300
//         });
//         res.send(JSON.parse(f));
//       }
//       else{
//         client2.get(key).then(function(hit){
//           f=hit;
//         });
//         if(f!=="null"){
//           client1.set(key, f,{
//             EX:300
//           });
//           res.send(JSON.parse(f));
//         }
//         else{
//           axios.get("https://jsonplaceholder.typicode.com/photos").then(function(response){
//             client1.set(key, JSON.stringify(response.data),{
//               EX:300
//             });
//             client2.set(key, JSON.stringify(response.data),{
//               EX:300
//             });
//             res.send(response.data);
//           });
//         }
//       }
//     }
//     else if(f1===true){
//       client1.get(key).then(function(hit){
//         if(hit!==null){
//           const output=JSON.parse(hit);
//           res.send(output);
//         }
//         else{
//           axios.get("https://jsonplaceholder.typicode.com/photos").then(function(response){
//             client1.set(key, JSON.stringify(response.data),{
//               EX:300
//             });
//             const output=response.data;
//             res.send(output);
//           });
//         }
//       });
//     }
//     else{
//       client2.get(key).then(function(hit){
//         if(hit!==null){
//           const output=JSON.parse(hit);
//           res.send(output);
//         }
//         else{
//           axios.get("https://jsonplaceholder.typicode.com/photos").then(function(response){
//             client2.set(key, JSON.stringify(response.data),{
//               EX:300
//             });
//             const output=response.data;
//             res.send(output);
//           });
//         }
//       });
//
//     }
//     // console.log("number2");
//     // const key="key";
//     // client1.get(key).then(function(hit){
//     //   // console.log("number4");
//     //   // console.log(hit);
//     //   // console.log(typeof(hit));
//     //   if(hit!==null){
//     //     // console.log("number5");
//     //     const output=JSON.parse(hit);
//     //     res.send(output);
//     //   }
//     //   else{
//     //     // console.log("number3");
//     //     axios.get("https://jsonplaceholder.typicode.com/photos").then(function(response){
//     //       client1.set(key, JSON.stringify(response.data),{
//     //         EX:300
//     //       });
//     //       const output=response.data;
//     //       res.send(output);
//     //     });
//     //
//     //   }
//     // });
//   }
//   catch(error){
//     console.log(error);
//   };
//   // console.log("end");
// });
// //   axios.get("https://jsonplaceholder.typicode.com/todos/1").then(function(response){
// //     res.send(response.data);
// //   }).catch(function(error){
// //     console.log(error);
// //     res.send("<h3>Error found</h3>");
// //   });
// // });
//
// app.listen(2000,function(){
//   console.log("Server is running on port 2000");
// });
// // axios.get('https://api.zippopotam.us/us/33162').then(function(res){
// //   try{
// //     console.log(res.data);
// //   }
// //   catch(error){
// //     console.log(error);
// //   }
// // }
