const phrase1 = 'fa  ce'
const phrase2 = 'ecaf?????'

function isAnagram(one, two){
    let word1 = one.replace(/\W/g, "").toLowerCase();
    let word2 = two.replace(/\W/g, "").toLowerCase();

   if(word1.length !== word2.length) return false;
    
    
    let obj1 = {}
    let obj2 = {}

    for(let el of word1){
        obj1[el] = (obj1[el] || 0) + 1;
    }

    for(let el of word2){
        obj2[el] = (obj2[el] || 0) + 1
    }

    for(let key in word1){
        if(!word2[key]){
            return false
        }
        if(!(word2[key] === word1[key])){
            return false
        }
        return true
    }

    
}

function isAnagram2(one, two) {
    function helpFunction(str){
        return str.replace(/\W/g, "").toLowerCase().split("").sort().join("")
    }
    if(helpFunction(one) === helpFunction(two)){
        return true;
    } else {
        return false
    }
}

console.log(isAnagram2(phrase1, phrase2))


//console.log(isAnagram(phrase1, phrase2))

// for (let i of word1) {
//     ob1[i] = (ob1[i] || 0) + 1;
//  }