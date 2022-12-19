var currentTime = new Date().getTime();

var fastestSubmittedAnswer = function(strs) {
    if(strs.length === 0) return '';
    let prefix = strs[0];
    for (let index = 1; index < strs.length; index++) {
        const element = strs[index];
       
        while (element.indexOf(prefix) !== 0) {
            console.log(element.indexOf(prefix) );
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix.length === 0) {
                return "s";
            }
        }
    }
    return prefix;
}  


const str = ["dog","racecar","car"]
console.log(fastestSubmittedAnswer (str));



