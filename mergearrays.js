function mergeArrays(arrayone, arraytwo){
    let myfinalArray = arrayone
    for(let index=0;index<arraytwo.length; index++){
        myfinalArray.push(arraytwo[index])
    }
    return myfinalArray.sort()
}

const gospel = ["promises","shusha nyavu","miracles"]
const secular = ["middle child","memories","trumpets"]

let myfinalList = mergeArrays(gospel,secular)

console.log(myfinalList);