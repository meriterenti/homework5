const studentName = 'Meri'

const homeWork = {
	videoPoints: [
		{video: 35},
		{video: 30}
	],
	programming: [
		{
			createHtml: 5,
			constants: 5,
			arithmetics: 5,
			numAndString: 5,
			ifElseBlock: 10,
			thingToTheConsole: 5
		}
	]
}

const passingResult = homeWork.videoPoints[0].video + homeWork.programming[0].createHtml;
const bestResult = homeWork.videoPoints[0].video + homeWork.videoPoints[1].video + homeWork.programming[0].createHtml*6+5;
const studentResult = 45;

if(studentResult === bestResult){
	console.log('Yaay '+studentName+', You are the best');
} else if(studentResult < bestResult && studentResult >=passingResult){
	console.log('Congratulatins '+studentName+'! You passed');
} else{
	console.log("I just don't know what to say");
}

console.log('Thank you for your time !'); 
