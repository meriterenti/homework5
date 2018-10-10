const triangleStars = function(num) {
	let star = '*';
	if(num === 0){
		return '';
	};
	let index = (num-1)*2;	
	while(index){
		index--;
		star += '*';
	};
	return star + '\n' + triangleStars(num-1);
}
console.log('1. Triangle for input: 4')
console.log(triangleStars(4))

const multiToSingle = function(arr) {
	let singleArray = [];
	let index = 0;
	while(index < arr.length){
		let secIndex = 0;
		while(secIndex < arr[index].length){
			singleArray[singleArray.length] = arr[index][secIndex];
			secIndex++;
		};
		index++;
	};
	return singleArray;
}
console.log('2. Single Array output');
console.log(multiToSingle([[1, 2, 3], [4, 5, 6]]));

const findMinMax = function(arr, bool) {
	let tempResult;
	let result = 0;
		let index = 0;
		while(index < arr.length){
			let secIndex = 1;
			while(secIndex < arr.length){
				if(bool){
					if(arr[index] > arr[secIndex]){
						tempResult = arr[index];
						if(result < tempResult){
							result = tempResult;
						}
					}
				}else{
					if(arr[index] < arr[secIndex]){
						tempResult = arr[index];
						if(result > tempResult){
							result = tempResult;
						}
					}
				}
				secIndex++;
			}
			index++;
		}
	return result;
}
console.log('3. The largest number is: ', findMinMax([4, 2, 66, -44, 8], true));
console.log('3. The smallest number is: ', findMinMax([4, 2, 66, -44, 8], false));

console.log('4. The output of "forEach" function:');
const forEach = function(arr, f) {
	let index = 0;
	while(index < arr.length){
		f(arr[index]);
		index++;
	}
}
forEach([4, 3, 2], function(val) {
	console.log(val);
});

const sum = function(arr){
	let sum = 0;
	let length = arr.length;
	while(length){
		sum += arr[length-1];
		length--;
	}
	return sum;
}
console.log('5. The sum of array numbers: ', sum([4, 3, 2]));

const reverse = function(str){
	let length = str.length;
	let reverseStr = ''
	while(length){
		reverseStr += str[length -1];
		length--;
	}
	return reverseStr;
}
console.log('6. The reverse of "abcd" is: ', reverse('abcd'));

const checkerboard = function(size){
	const row = function(rowSize){
		let star = '';
		while(rowSize){
			star += '*'
			rowSize--;
		}
		return star;
	}
	let index = size;
	let board = '';
	while(index){
		board += row(size) + '\n';
		index--;
	}
	return board;
}
console.log('7. The board of 5 stars:');
console.log(checkerboard(5));
