//dates
let mydate=new Date()
// console.log(mydate)
// console.log(mydate.toString())
// console.log(mydate.toDateString())
// console.log(mydate.toLocaleString())

// let mycreateddate=new Date(2024,0,29)
// console.log(mycreateddate.toDateString())

// let mycdate=new Date(2004,9,26,10,0)
let mycreateddate=new Date("01-29-2004")
// console.log(mycreateddate.toLocaleString())

let mytimestamp=Date.now()
// console.log(mytimestamp)
// console.log(mycreateddate.getTime())

//to convert in seconds- divide the milliseconds by 1000
 console.log(Math.floor(mytimestamp/1000))

 let mdate=new Date()
 console.log(mdate.toLocaleString('default',{

    weekday:"long"

 }))