const name = " Masood"
const repoCount =50

//console.log(name + repoCount + " Value");
 
console.log(`Hello my name is ${name} and my rapo count is ${repoCount} `);

const gameName = new String ('Arbaz-hc-com')
console.log(gameName[0])
console.log(gameName.__proto__)


console.log(gameName. length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(4))
console.log(gameName.indexOf('b'))



const newString = gameName .substring (0 , 4)
console.log(newString)

const anotherstring = gameName.slice(-8,4)
console.log(anotherstring)

const newstringOne = "    Noreen    "
console.log(newstringOne)
console.log(newstringOne.trim())


const url = "http://hitesh.com/masood%20sarki"
console.log(url.replace('%20' ,'-'))

console.log(url.includes('masood'))

console.log(gameName.split('-'))