const quizDB=[
	{
	question:" Q:Who is the fathe of economice",
	a:"Adam smith",
	b:"Mandela bai",
	c:"Arkimidh",
	d:"Socretish",
	ans:"ans1",
},
{
	question:"Q1:Who maid first computer",
	a:"jonash paint",
	b:"charles babbage",
	c:"habbart",
	d:"jonaton sai",
	ans:"ans2",
},
{
	question:"Who make firt electic bulb",
	a:"Habarg",
	b:"Tomas edison",
	c:"Sri nivas",
	d:"I dont no",
	ans:"ans2",
},
{
	question:"Q1:Select a cricketer name",
	a:"Birath kholi",
	b:"Salman khan",
	c:"Kumar shanu",
	d:"Abdul kalam",
	ans:"ans1",
}
];
const question=document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector('#submit');

const answers=document.querySelectorAll('.answer');
const showScore=document.querySelector('#showScore');

let questionCount=0;
let score=0;

const loadQuestion=()=>{
	const questionList=quizDB[questionCount]
question.innerText=questionList.question;

option1.innerText=questionList.a;
option2.innerText=questionList.b;
option3.innerText=questionList.c;
option4.innerText=questionList.d;
}

loadQuestion();
const getCheckAnswer=()=>{
  let answer;
  answers.forEach((curAnsElem)=>{
  	if(curAnsElem.checked){
  		answer=curAnsElem.id;
  	}
  });
  return answer;
}
const deselectAll=()=>{
	answers.forEach((curAnsElem)=>curAnsElem.checked=false);
}
submit.addEventListener('click',()=>{
const checkedAnswer=getCheckAnswer();
console.log(checkedAnswer);
if(checkedAnswer==quizDB[questionCount].ans){
	score++;
};

questionCount++;
deselectAll();

if(questionCount<quizDB.length){
   loadQuestion();
}else{
	showScore.innerHTML=`
     <h3> you scored ${score}/${quizDB.length}👌👌</h3>
     <button class="btn"onclick="location.reload()">play again</button>
	`;
	showScore.classList.remove('scoreArea');
}
});

