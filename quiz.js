const questions = [
    {
        'que': "Which of the following is a markup language?",
        'a': 'HTML',
        'b': 'CSS',
        'c': 'Javascript',
        'd': 'Typescript',
        'correct': 'a'
    },
    {
        'que': "Which of the following is a web language?",
        'a': 'C++',
        'b': 'Javascript',
        'c': 'C#',
        'd': 'Java',
        'correct': 'b'
    },
    {
        'que': "Which of the following is not a language?",
        'a': 'Java',
        'b': 'CSS',
        'c': 'Python',
        'd': 'Typescript',
        'correct': 'b'
    }
];

let index = 0;//index: Tracks which question is currently being shown
let total = questions.length;//total: Total number 
let right = 0, wrong = 0;//how many answers were correct or incorrect
const queBox = document.getElementById("queBox");//queBox: Where the question will be displayed
const options = document.querySelectorAll(".options");//options: All radio buttons (input options)
const submitBtn = document.querySelector(".btn");//submitBtn: The button to submit the answer

const loadQuestion = () => {
    if (index === total) {
        return endQuiz();// End quiz if no more questions
    }

    const data = questions[index];// Current question data
    queBox.innerText = `${index + 1}. ${data.que}`;// Show question
    options[0].nextElementSibling.innerText = data.a;
    options[1].nextElementSibling.innerText = data.b;
    options[2].nextElementSibling.innerText = data.c;
    options[3].nextElementSibling.innerText = data.d;
};

const getAnswer = () => {
    let answer;
    options.forEach((input) => {
        if (input.checked) {
            answer = input.value;
        }
    });
    return answer;
};

const reset = () => {
    options.forEach((input) => {
        input.checked = false;
    });
};

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
        <h2>Thank you for playing the quiz!</h2>
        <h3>Your Score: ${right}/${total}</h3>
    `;
};

submitBtn.addEventListener("click", () => {
    const data = questions[index]; // Get current question
    const ans = getAnswer();// Get selected answer

    if (ans === data.correct) {
        right++;
    } else {
        wrong++;
    }

    index++;  // Go to next question
    reset();// Reset options
    loadQuestion();// Load next question
});

loadQuestion();//called initially to load the first question when the page loads
