function words(str){
	array =[];
	var str = str;
	str = str.split(' ');
	result = { };
for(var i = 0; i < str.length; ++i) {
    if(!result[str[i]])
        result[str[i]] = 0;
    ++result[str[i]];
}
return result
	}

var check = "the boy is foo the foo";
console.log(words(check))