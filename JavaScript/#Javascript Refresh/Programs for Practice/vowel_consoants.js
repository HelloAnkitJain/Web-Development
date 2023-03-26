const calcTypeOfLetters = (str) => {
  const res = { Vowels: 0, Consonants : 0 }
  const VOWELS = ["a","e","i","o","u"]
  
  for(let char of str){
    if(VOWELS.includes(char.toLowerCase())){
      res["Vowels"] = res["Vowels"] + 1
    }else {
      res["Consonants"] = res["Consonants"] + 1
    }
  }
  
  return res
}

console.log(calcTypeOfLetters("ankit"))