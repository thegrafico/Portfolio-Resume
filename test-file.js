// // --------------Addind new user----------------------
// let id_ = "5c608b86eb050e163f5e7a40";
// var author = {
//     id: id_,
//     username:'thegrafico'
// }
// // var newUser = new User({
// //     username: 'thegrafico',
// //     password: '123456'
// // });
// // newUser.save((err, user)=>{
// //     if(err) return console.log(err)

// //     console.log(`Added User: ${user}`  )
// // });

// // //REMOVE ELEMENT
// // User.findById(id_, (err, ele)=>{
   
// //     if(err) return console.log("WHERE THE FUCK IS THE FUCKING ERROR");
   
// //     console.log(ele)
   
// //     ele.remove({"_id": id_});
// // });

// // Expe.create({
// //     experience: 'Test1',
// //     geoLocation: 'Where i working',
// //     positionJob: 'Mannager',
// //     contact: '787-377-6957',
// //     description:'Tes2',
// //     author
// // }, (error,  expe)=>{

// //     if(error) return console.log(error);
    
// //     var newData = new Data({
// //         author,
// //         introduction: 'HOLA SOY RAUL',
// //         experience: expe
// //     })
// //     newData.save((err, dataUser) =>{
// //         if (err) return console.log(err);
    
// //         console.log('Added Data: ' + dataUser)
// //     }); 
// // });




// // dExpe.save((err, dataUser) =>{
// //         if (err) return console.log(err);
// //         console.log('Added Data: ' + dataUser)
// //     });
// // var newData = new Data({
// //     author,
// //     introduction: 'HOLA SOY RAUL',
// //     experience: dExpe
// // })

// // newData.experience.push(dExpe);

// // newData.save((err, dataUser) =>{
// //     if (err) return console.log(err);

// //     console.log('Added Data: ' + dataUser)
// // });

// // --------------Addind new user----------------------
// let id_ = "5c61a515611b3f53666861aa";
// let x = 4;
// var author = {
//     id: id_,
//     username:'thegrafico'
// }
// if(x == 1){
//     var newUser = new User({
//         username: 'thegrafico',
//         password: '123456'
//     });
//     newUser.save((err, user)=>{
//         if(err) return console.log(err)
    
//         console.log(`Added User: ${user}`  )
//     });
// }else if(x == 2){

//     Expe.create({
//         experience: 'Test1',
//         geoLocation: 'Where i working',
//         positionJob: 'Mannager',
//         contact: '787-377-6957',
//         description:'Tes2',
//         author
//     }, (error,  expe)=>{

//         if(error) return console.log(error);
        
//         var newData = new Data({
//             author,
//             introduction: 'HOLA SOY RAUL',
//             experience: expe
//         })
//         newData.save((err, dataUser) =>{
//             if (err) return console.log(err);
//             // console.log(expe);
//             console.log('Added Data: ' + dataUser);
//         }); 
//     });

// }else if(x == 3){
//     // REMOVE ELEMENT
//     User.findById(id_, (err, ele)=>{
    
//         if(err) return console.log("WHERE THE FUCK IS THE FUCKING ERROR");
    
//         ele.remove({"_id": id_});
//     });    
// }