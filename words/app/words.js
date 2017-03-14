function words(str){
	var strSplit = str.split(/\s+/m),
	result = {};
for(var i = 0; i < strSplit.length; i++) {
    if(result.hasOwnProperty(strSplit[i])){
        result[strSplit[i]] += 1;
    }else{
        result[strSplit[i]]=1;
    }
}

return result
	}

module.exports= words;