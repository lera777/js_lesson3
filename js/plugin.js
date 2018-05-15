// Задача №1
let str = 'I am in the easycode';
newStr = '';
for (let i = 0; i < str.length; i++){
    newStr += str[i - 1] == ' ' ? str[i].toUpperCase() : str[i];
}
console.log(newStr);

newStr = '';
let i = 0; 
while(i < str.length){
    if(str [i-1] == ' '){
        newStr += str[i].toUpperCase();
    }else{
        newStr += str[i];
    }  
    i++;
}
console.log(newStr);

// Задача №2
str = 'tseb eht ma i';
newStr = '';
for(i = str.length - 1; i >= 0; i--) {
        newStr = newStr + str[i];   
}
console.log(newStr);

// Задача №3
let num = 10;
let factorial = 1;
while (num != 1) {
    factorial *= num;
    num--;
} 
console.log(factorial);

num = 10;
factorial = 1;
for(i = num; i > 1; i--){
    factorial *= i;
}
console.log(`Factorial of number ${num} is ${factorial}`);

// Задача №4
str = 'Считаем до 10и: ';
for(i = 1; i <= 10; i++){
    str += i;
    if(i != 10){
        str += ', ';
    }
}
console.log(str);

num = 10;
str = `Считаем до ${num}: `;
i = 0;
while(++i < num) {
    str += i + ', ';
}
str += num;
console.log(str);

// Задача №5
str = 'JavaScript is a pretty good language';
newStr = '';
for(i = 0; i < str.length; i++){
    if(str[i] == ' '){
        continue;
    }else if(str [i-1] == ' '){
        newStr += str[i].toUpperCase();
    }else{
        newStr += str[i];
    }  
}
console.log(newStr);

// Задача №6
i = 1;
let value = 15;
for(; i <= value; i++){
    if(i % 2 != 0){
        console.log(i);
    }
}