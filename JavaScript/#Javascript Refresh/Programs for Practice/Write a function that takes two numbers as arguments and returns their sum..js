function adding(para1, para2){
    if (typeof(para1) != 'number' || typeof(para2) != 'number' ){
        console.log('please enter numric values')
    }
    else{
        return para1+para2
    }
}

console.log(adding(1,1))