const s = document.querySelector("#s").innerText;


let highestNum = null;
let highestCount = 0;
for (let i = 0; i < s.length; i++){
   let char = s[i];
    
   
    let charRestrict = /[0-9]/;
if (!char == charRestrict.test(char)) continue;
let occurences = 0;
for (let j = i; j < s.length; j++){
    
    if(s[j] === char) occurences++;
    
}
    if (occurences > highestCount){
        highestCount = occurences;
        highestNum = char;
       
    }


}

document.querySelector(".answer").innerText = highestNum;
