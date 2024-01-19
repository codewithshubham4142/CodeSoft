// const quizdata = [
//   {
//     question: " What does HTML Stand For ?",
//     options: [
//       "hypertext merkup language",
//       "Hyper Transfer markup Language",
//       "Hypertext Machine Language",
//       "Hyperlink and Text Markup Language",
//     ],
//     correct : 0 ,
//   },
//   {
//     question: "  What is the full form of E-Mail?",
//     options: [
//       "Electric Mail",
//       "Exchange ",
//       "Electronic Mail",
//       "Engagement Mai",
//     ],
//     correct : 2,
//   },
//   {
//     question: " Who is the Father of the Computer? ",
//     options: [
//       " Charles Babbage",
//       "Thomas Edison",
//       "Albert Einstein",
//       "Isaac Newton",
//     ],
//     correct : 0,
//   },
//   {
//     question: " How much is a byte equal to? ",
//     options: [" 8 bits", "16 bits", "32 bits", "64 bits"],
//     correct : 0,
//   },
// ];
// // Step 2
// const answerelem = document.querySelectorAll('.answer');
// const [questionElem,option_1,option_2,option_3,option_4] = document.querySelectorAll('#questions,#option_1,#option_2,#option_3,#option_4');

// const submitbtn = document.querySelectorAll("#submit");

// const currentQuiz = 0;
// const score = 0;

// // Step 3
// const loadQuiz = ()=>{
//     const {question,options}=quizdata[currentQuiz];

//     questionElem.innerText = question;


//     options.forEach((curoptions,index)=> window[`Option_${index + 1}`].innerText = curoptions)
        
    



// }
// loadQuiz ();



const quizdata = [
    {
      question: "What does HTML Stand For?",
      options: [
        "hypertext markup language",
        "Hyper Transfer markup Language",
        "Hypertext Machine Language",
        "Hyperlink and Text Markup Language",
      ],
      correct: 0,
    },
    {
      question: "What is the full form of E-Mail?",
      options: [
        "Electric Mail",
        "Exchange ",
        "Electronic Mail",
        "Engagement Mail",
      ],
      correct: 2,
    },
    {
      question: "Who is the Father of the Computer?",
      options: [
        "Charles Babbage",
        "Thomas Edison",
        "Albert Einstein",
        "Isaac Newton",
      ],
      correct: 0,
    },
    {
      question: "How much is a byte equal to?",
      options: ["8 bits", "16 bits", "32 bits", "64 bits"],
      correct: 0,
    },
  ];
  
  // Step 2
  const quiz = document.querySelector('#quiz');
  const answerElems = document.querySelectorAll('.answer');
  const [questionElem, option1, option2, option3, option4] = document.querySelectorAll('#questions, #option1, #option2, #option3, #option4');
  
  const submitBtn = document.querySelector("#submit");
  
  let currentQuiz = 0;
  let score = 0;
  
  // Step 3
  const loadQuiz = () => {
    const { question, options } = quizdata[currentQuiz];
  
    questionElem.innerText = `${currentQuiz + 1}: ${question}`
  
    options.forEach((curOption, index) => window[`option${index + 1}`].innerText = curOption);
  };
  
  loadQuiz();


//    selected answer function on button click
const getSelectedOption = ()=>{
    // Trick 1 :
    // let ans_indexs ;
    // answerElems.forEach((curOption,index)=>{
    //     if(curOption.checked){
    //         ans_indexs = index;
    //     }

    // });
    // return ans_indexs;


    // Trick 2 :
    let answerElement = Array.from(answerElems);
    return answerElement.findIndex((curElem,index)=> curElem.checked );
}


 const deselectedAnswer = ()=>{
    answerElems.forEach((curElem)=> curElem.checked = false)
    
 }

submitBtn.addEventListener('click',()=>{
    const selectedoption = getSelectedOption();
    console.log(selectedoption);

    if(selectedoption === quizdata[currentQuiz].correct){
        score = score + 1 ;
    }

    currentQuiz ++;
    if (currentQuiz < quizdata.length){
        deselectedAnswer();
        loadQuiz();
    }else{
        quiz.innerHTML = `
        <div class = "result">
        <h2> Your Score : ${score}/${quizdata.length} correct Answer </h2>
        <p> congratulations on completing the Quiz </p>
        <buttton class = "reload-button" onclick = "Location.reload()">Play Again </button>
        </div>`;

    }

});


  