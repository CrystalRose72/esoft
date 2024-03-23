function check(str){
    var mass = []
    var a = 0;
    var b = 0;
    var c = 0;
    for(var i = 0; i < str.length; i++) {
        if(str[i] === '(' || str[i] === '{' || str[i] === '['){
            mass.push(str[i])
        }
        else if(str[i] === ')'){
            if(mass.length !== 0 && mass[mass.length - 1] === '('){
                mass.pop()
            }
            else{
                return false
            }
            
        }
        else if(str[i] === '}'){
            if(mass.length !== 0 && mass[mass.length - 1] === '{'){
                mass.pop()
            }
            else{
                return false
            }
        }
        else if(str[i] === ']'){
            if(mass.length !== 0 && mass[mass.length - 1] === '['){
                mass.pop()
            }
            else{
                return false
            }
        }; 
    };
    return true
}
console.log(check("()"));
console.log(check("()[]{}"));
console.log(check("(]"));
console.log(check("([)]"));
console.log(check("{[]}"));