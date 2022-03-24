// Code your solutions in this file
/*for (let age = 30; age < 40; age++) {
console.log(`I'm ${age} years old. Happy birthday to me!`)
debugger 

};*/





function writeCards(names, eventname) {
    const finalmessages = [
    ]
    for (let i = 0; i < names.length; i++) {
     let messages = `Thank you, ${names[i]}, for the wondeful ${eventname} gift!`
    
     finalmessages.push (messages)
    
  }
  return finalmessages 
}


function countdown (integer) {
let positiveint = integer
console.log(positiveint)
    while (positiveint>0) 
        console.log(positiveint -=1)

}

countdown(20)
