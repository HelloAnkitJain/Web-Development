// word reverse : give space it will split the word
function stringReverse(userString){
    return userString.split(' ').reverse().join(' ');
}

//split(' ') : JavaScript String split() Method is used to split the given string into an array of strings
//reverse(): The reverse() method reverses the order of the elements in an array.
//join(' '): The join() method returns an array as a string.

console.log(stringReverse("Ankit Kumar Jain")) //Jain Kumar Ankit

//alphabet reverse: give no space it will reverse every alphabet in string

function stringReverse(userString){
    return userString.split('').reverse().join('');
}

console.log(stringReverse("Ankit Kumar Jain")) //niaJ ramuK tiknA
