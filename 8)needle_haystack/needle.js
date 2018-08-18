var haystack = ['cat','dog','bird','turtle','lizard'];
var needle = ['dog','lizard','flower','monkey','unicorn'];

function search_array(needle,haystack){
    let outputArr = [];
    for(let i=0; i<haystack.length;i++){
        for(let j=0;j<needle.length;j++){
            if(needle[j]===haystack[i]){
                outputArr.push(needle[j])
            }
        }
    }
    return outputArr;
}