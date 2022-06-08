const axios=require("axios");
const express=require("express");
const redis=require("redis");

const app=express();
// Make request
// const client = redis.createClient(6379);
//
// client.on("error", (error) => {
//  console.error(error);
// });
// console.log(app);
app.get("/",function(req,res){
  // try{
    const key="identity";

    // client.get(key,async function(err,hit){
    //   if(hit){
    //       const output=JSON.parse(hit);
    //       res.send(output);
    //   }
    //   else{
        axios.get("https://jsonplaceholder.typicode.com/todos/1").then(function(response){
          // client.setex(key, 1440, JSON.stringify(response.data));
          console.log(client);
          const output=response.data;
          res.send(output);
        });
      // }
    // });
  // }
  // catch(error){
  //   console.log(error);
  // };
});
//   axios.get("https://jsonplaceholder.typicode.com/todos/1").then(function(response){
//     res.send(response.data);
//   }).catch(function(error){
//     console.log(error);
//     res.send("<h3>Error found</h3>");
//   });
// });

app.listen(3000,function(){
  console.log("Server is running on port 3000");
});
// axios.get('https://api.zippopotam.us/us/33162').then(function(res){
//   try{
//     console.log(res.data);
//   }
//   catch(error){
//     console.log(error);
//   }
// }
