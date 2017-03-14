function reverseString(str) {
    var oldstring=str
    if ((oldstring=="")||(oldstring==" ")){
    	return null
    }
   var newstring= str.split("").reverse().join("");
   if (newstring===oldstring){
   	return "true";
   }else{
   	return newstring;
   }
}
module.exports=reverseString;