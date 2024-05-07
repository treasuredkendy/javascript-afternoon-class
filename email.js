function validateEmail(email){
    // allowed characters_ @ - . A_Z
    // only one @ symbol
    //  at least one . after @ symbol
    //  trim any spaces at beginning or end

    const cleanedstr = email.trim().toLowerCase()
    console.log(cleanedstr);
    const allowedChar = ["_","@",".","-","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","X","Y","z","0","1","2","3","4","5","6","7","8","9"]
    for( let index=0; index<cleanedstr.length; index++){
        if( allowedChar.includes(cleanedstr.charAt(index))){
            console.log("valid char");
        } else{
            console.log("invalid email");
            return false
        }
        if(cleanedstr.charAt(index)==="@"){
            countAtSymbol++
        }
    } 
    if(countAtSymbol==1){
        console.log("correct number of @ symbol(only one)");

    }else{
        console.log("absent or more than one @ symbols");
        return false
    }
    console.log("valid email");
    return true
}
 let result = validateEmail("  123alBert@GMail.com.com")
 console.log(result);

//  RegExp