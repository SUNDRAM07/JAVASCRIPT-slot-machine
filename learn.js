const hell={
    name:"Perfect Human",
    age:"20",
    superpower:"Everything"
}

const{name,age,superpower}=hell
console.log(name)


//use  map and filter properly


let freak=[12,42,2354,35,235,235,45,6456,457,5424,15346,57,4525,567]
// freak.forEach((element) => {
//     console.log(element)
// });
// const maper=freak.map((element)=>{
//     return "new" + element
// })
// console.log(maper)


const mapped_array=freak.filter(element=>{
    return element > 234
})
console.log(mapped_array)