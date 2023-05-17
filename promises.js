
//  const promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve('succed'),1000)
//     reject("error")
//  })

//  const response = promise.then(res=>console.log(res)).catch(err=>console.log(err))
//  console.log(response)


 function doSomeWork(){
    return new Promise(
        (resolve,reject)=>{
            setTimeout(()=>resolve("ok done"))
        }
    )
 }


 const work = doSomeWork().then(res=>res).then(res=>console.log("second res"+res))
