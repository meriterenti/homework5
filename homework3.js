const volume = function(base, height, width){
	return base*height*width;
}
console.log('1. The volume of the cube is: ' + volume(3, 4, 2));

const stateOfMyMind = function(){
	return 'Give me a cop of coffee, please';
}
console.log('2. The state of my mind is: ' + stateOfMyMind());

const greeting = function(dayOfWeek){
	if(dayOfWeek <= 5){
		alert('Eat, sleep, code, repeat..');
	} else{
		alert('Go have fun');	
	}
}
greeting(4);

const longestString = function(string1, string2, string3){
	if(string1.length < string2.length){
		string1 = string2;
	} 
	if(string1.length < string3.length){
		string1 = string3;
	} 
	return string1;
}
console.log('4. The longest string is: ' + longestString('Azat', 'Hpart', 'Hayastan'));

const compareNumbers = function(num1, num2){
	if(num1 === num2){
		return 0;
	} else if(num1 > num2){
		return 1;
	} else{
		return -1;
	}
}
console.log('5. The result of comparing numbers is: ' + compareNumbers(3, -8));

const multiplyNumbers = function(num1, num2){
	return num1 * num2;
}
console.log('6. The result of multiplying numbers is: ' + multiplyNumbers(3, 19));

const divideNumbers = function(num1, num2){
	if(num2 === 0){
		return "Sorry, I can't divide by 0, please change the second number";
	} 
	return num1 / num2;
}
console.log('7. The result of dividing numbers is: ' + divideNumbers(81, 9));

const triangleArea = function(base, height){
	return divideNumbers(multiplyNumbers(base, height), 2)
}
console.log('8. The area of the triangle is: ' + triangleArea(16, 8));

const numLength = function(num){
	num = '' + num;
	return num.length;
}
console.log('9. The length of the given number is: ' + numLength(89965));

const compareStringsAndNumber = function(str1, str2, num){
	concatString = str1 + str2;
	if(concatString.length > num){
		return 1;
	} else{
		return -1;
	}
}
console.log('10. The result of comparison is: ' + compareStringsAndNumber('hello', 'world', 4));

const runStuff = function(num1, num2, str){
	if(str === 'rectangle'){
		return multiplyNumbers(num1, num2);
	}else if(str === 'triangle'){
		return triangleArea(num1, num2);
	}else{
		return -1;
	}
}
console.log('11. The result is: ' + runStuff(4, 7, 'triangle'));
