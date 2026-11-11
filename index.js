//GET

// const URL="http://localhost:8000/data";

// fetch(URL)
// .then(res=>res.json())
// .then(data=>{
//     for(i=0;i<data.length;i++){
//         console.log(data[i]);
//     }
// })
// .catch(res=>console.log(res));


//DELETE

// const URL="http://localhost:8000/data/lmDvt-aaMIw";

// let options={
//     "method":"DELETE"
// }

// fetch(URL,options)
// .then(res=>{
//     console.log(res.status,res.statusText)
// })
// .catch(res=>console.log(res))


//POST

// const URL="http://localhost:8000/data";

// let options={
//     "method":"POST",
//     "headers":{
//         "Content-Type":"application/json"
//     },
//     "body":JSON.stringify({
//         "sid":4,
//         "name":"Sai",
//         "age":27

//     })
// }

// fetch(URL,options)
// .then(res=>{
//     if(res.ok){
//         console.log(res.status,res.statusText);
//     }
// })
// .catch(res=>console.log(res));

//PUT

// const URL="http://localhost:8000/data/ktGgpvnO2OM";

// let options={
//     "method":"PUT",
//     "headers":{
//         "Content-Type":"application/json"
//     },
//     "body":JSON.stringify({
//         "sid":1,
//         "name":"Dinesh",
//         "age":24
//     })

// }

// fetch(URL,options)
// .then(res=>{
//     if(res.ok){
//         console.log(res.status,res.statusText);
//     }
// })
// .catch(res=>console.log(res));

//PATCH


// const URL="http://localhost:8000/data/SiY-WRM23sc";

// let options={
//     "method":"PATCH",
//     "headers":{
//         "Content-Type":"application/json"
//     },
//     "body":JSON.stringify({
//         "name":"Arjun"
//     })

// }

// fetch(URL,options)
// .then(res=>{
//     if(res.ok){
//         console.log(res.status,res.statusText);
//     }
// })
// .catch(res=>console.log(res));