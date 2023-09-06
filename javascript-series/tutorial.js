console.log("Hritik pandey")
// const accountId=12345;
// var accountEmailid="pandeyhritik897@gmail.com";
// //  var is not prefered to use 
// let accountDetails="registration id";
// accountState="haryana"; //can be done but not preffered
// console.log(accountId);
// console.log(accountEmailid);
// console.log(accountDetails);
// console.log(accountState);
// console.table([accountId, accountEmailid, accountDetails,accountState])

// //  operators
// const value=3;
// const negativeValue= -value;
// console.log(value)
// console.log(negativeValue);

// console.log(2>1);
// console.log("2"===2);
 
// datatypes in javascript
// primitive:- Number,string,boolean,symbol,null,undefined,BigInt
// Non primitive:- Array, object, function

// Symbol
// const id= Symbol("1234")
// const idNumber=Symbol("1234")
// console.log(id === idNumber)
// console.log(typeof id)


// // bigInt
// const bigNum= 74387430970833n
// console.log(typeof bigNum)

// memory:
// stack memory : primitive data type -get only copy
// heap memory  : Non primitive type - changes done in original value

// let onevar="hritikpamdey"
// let anothervar= onevar;
// anothervar="sahilpandey";
//  console.log(onevar);
//  console.log(anothervar);

//  heap memory 
// let objOne ={
//     email: "userone@gmail.com",
//     password: "hritiik"
// }
// // console.log(objOne)
// let objTwo= objOne 
// objTwo.email =  "sahil@gmail.com"
// console.log(objOne)
//  console.log(objTwo)
 
// string 
// const hello= "hello world"
// const heii= 'hello oerld'
// console.log( hello+" "+ heii)
// const gameName = new String("hritik")
// console.log(gameName)
// console.log(gameName[0])
// console.log(gameName.length)
// console.log(gameName. __proto__)

// let userInput= "  hritik  "
// console.log(userInput.length)
// console.log(userInput.trim().length)

  // const score =400;
  // const balance =new Number (1000)
  // console.log(score)
  // console.log(balance);

//   console.log(Math)
//   console.log(Math.abs(-4))
//   console.log(Math.round(4.6))
//   console.log(Math.ceil(4.3))
//   console.log(Math.floor(4.56))
// console.log(Math.max(12,33,2,333))
// console.log(Math.min(33,33,21,34,221,3333))

// // console.log (Math.floor(Math.random()*100)+1);

// // const max=20;
// //  const min=10;
// // const value= Math.floor(Math.random() * (max-min + 1 ))  + min ;
// // console.log(value)


// // -------------------------------Dates-----------------------------------
// let myDate = new Date();
// // console.log( typeof myDate);
// // console.log(myDate.toLocaleString())

//  let date= myDate.toLocaleString('default',{
//   weekday:"short"
// })
// // console.log(date)
 

// -------------------------array------------------------

// const myArr=[1,2,3,4,5]
// console.log(myArr)
// console.log(myArr.push(6))
// console.log(myArr)
// console.log(myArr.pop())
// console.log(myArr)
// console.log(myArr.unshift(6))//[ 6, 1, 2, 3, 4, 5 ]
// console.log(myArr)
// console.log(myArr.shift())
// console.log(myArr)


// const male = ["ram", "shyam","shree","hritik"]
// const female= ["sita","gita","pooja","riya"]
// // const person =[...male,...female]
// // console.log(person)
// // const personConcat = male.concat(female)
// // console.log(personConcat)
// male.push(female)
// // console.log(male)
// // console.log(Array.isArray("hritik"))
// // console.log(Array.from("hritik"))
// console.log(Array.of(male))


// let value1= 500;
// let value2=400;
// let value3=200;
// console.log(Array.of(value1,value2,value3))



// --------------------------------OBJECT-----------------------------------------------------
// object decelaration :
// object literal -- { }
// object constructor :-- object.create
let mySym = Symbol('key1')
const jsObject={
  name:"hritik",
  "fullname": "Hritik Pandey",
  age : 21 ,
  [mySym] : "mykey1",
  location: "haryana",
  email: "pandeyhritik897w@gmail.com",
  loggedInDays :["monday","tuesday", "friday", "saturday"]
}
// console.log(jsObject.name)
// console.log(jsObject["email"])
// console.log(jsObject.fullname)
// console.log(jsObject["fullname"])
// console.log(jsObject.mySym)--------------> //cant acess symbol using dot  to to acess this we need to use 
// console.log( jsObject[mySym])


//  const freeze= Object.freeze(jsObject)
//  console.log(freeze)

//  jsObject.name ="sahil pandey"
//  console.log(jsObject)
  
// jsObject.greeting= function(){
//   console.log(`hello jsuser,${this.name}`)


// }

// console.log(jsObject.greeting())

// --------------------------------object2--------------------------------------------------------

// const singletonObj = new Object()
// console.log(singletonObj)

// const nonSingletonObj = {}
// console.log(nonSingletonObj)

// const nonSingletonObj = {};
// nonSingletonObj.id="123abc"
// nonSingletonObj.name="Hritik"
// nonSingletonObj.isLoggedIn = false;

// console.log(nonSingletonObj)


// ------------------------------destructure--------------------------------------------------------


const course = {
  courseName : "fullstack Web development",
  teachBy :  "hitesh choudary",
  price : 50000
}

// console.log(course.courseName )
// console.log(course.teachBy)
// console.log(course.price)
//  instead of this we can use destructe like this:- 

 
// course.courseName = "JAVA FULLSTACK DEVELOPMENT"
// const {courseName} = course
// console.log(course)
// console.log(courseName)
// -----------------------------------------function--------------------------------------------------------------   

// function addTwonum(number1, number2){
//    console.log(number1+number2)
// }
// addTwonum(5,6)


// function addTwonum(num1, num2){
//   let result = num1 + num2 ;
//   return result;
//   console.log(`the answer is 12`) // after return no code will execute.
// }
//  const result1= addTwonum(5,7)
// console.log(result1)

// function addTwonum(num1,num2){
//   return num1+num2;
// }
// const result1= addTwonum(9,7)
// console.log(result1)
// console.log(`the result is ${result1}`)



function loginUsername (username){
  // if(username=== undefined) OR
  if (!username) {
    console.log("please enter the username")
    return
  }
  return (`the user ${username} has just loginIN`)
}
//  const user= loginUsername()
// console.log(user)
// --------OR--------
console.log(loginUsername());