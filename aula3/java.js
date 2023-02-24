//1.1
/*const hacker1="cherry"
console.log(`The driver's name is ${hacker1}`)
//1.2
const hacker2="david"
console.log(`The navigator's name is ${hacker2}`)

// 2.1

/*if ( hacker1.length<hacker2.length){
    console.log(`The driver has the longest name, it has XX characters.`)
 }
 else if(hacker1.length>hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker1.length} characters`)
 }
 else{
    console.log (`Wow, you both have equally long names, XX characters!`)
 }
 */

//3.1

/*let hacker1 ="cherry"

const driver1= hacker1.toUpperCase()
let newDriver = ""

for (let i = 0; i < driver1.length; i++){
  newDriver += driver1[i] + " "
     }
console.log(newDriver)*/

//3.2

/*const hacker2="david"
let nameReverse= ""
for(let i=hacker2.length-1; i>=0; i-- ){
  const result = hacker2[i];
  nameReverse += result;
}
console.log(nameReverse);*/


const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae pellentesque mauris, a efficitur lorem. Sed tempus pretium enim, ut condimentum lorem. Aenean nec lectus et turpis efficitur aliquam. Donec urna est, bibendum sit amet dui eu, viverra tincidunt metus. Etiam in sem et dolor vehicula cursus vel non neque. Vestibulum non libero justo. Phasellus faucibus eros eu diam convallis hendrerit. Donec nec blandit libero, pharetra gravida mauris. Etiam id neque accumsan, consectetur urna eu, faucibus nisi. Praesent mattis risus quis metus luctus condimentum. Aenean massa mauris, tempor non sapien ut, mattis pellentesque mi. Sed luctus felis nec justo euismod pretium. Curabitur aliquam lorem vel quam tristique tempor. Nullam ut mattis sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam finibus mauris ac turpis malesuada ullamcorper.Vivamus finibus in pu
rus vel efficitur. Vivamus dolor ante, gravida quis nisl at, blandit gravida tortor. Nulla non sem tristique, efficitur lectus rutrum, congue orci. Cras maximus bibendum nulla ut vulputate. In ipsum lorem, consequat in semper id, ultricies sit amet erat
. Proin placerat justo a magna vehicula commodo in vitae purus. Maecenas cursus dictum volutpat. Praesent ac laoreet felis, ornare cursus nisi. Nunc tempor auctor enim, vitae laoreet nunc dictum vel.Aliquam sed mi sem. Morbi consequat diam eu gravi
da rhoncus. Nulla rhoncus eros lorem, vel volutpat lacus aliquet nec. Cras sit amet congue ante, a eleifend leo. Donec congue dapibus tortor sit amet posuere. Donec dignissim aliquet mi. Duis nisl nunc, commodo et rutrum maximus, venenatis ut lorem. V
estibulum quis justo ut lectus cursus gravida id quis purus. Vestibulum orci lacus, tincidunt nec ipsum vel, posuere fermentum nisi. Mauris et orci orci.`

let textArray = Array.from(longText);
let totalWords=0 

let word= "et"
let totalEt=0

for (let i = 0; i < textArray.length; i++){
    if (textArray[i] === " ") { 
        totalWords ++
         }
      
}

for(let i=0; i<longText.length;i++){
    if (longText.slice(i,i+word.length)===word){
        totalEt++
    }
}

console.log(totalWords)
console.log(totalEt)
