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

let index = 0;
let total = questions.length;
let right = 0, wrong = 0;
const queBox = document.getElementById("queBox");
const options = document.querySelectorAll(".options");
const submitBtn = document.querySelector(".btn");

const loadQuestion = () => {
    if (index === total) {
        return endQuiz();
    }

    const data = questions[index];
    queBox.innerText = `${index + 1}. ${data.que}`;
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
    const data = questions[index];
    const ans = getAnswer();

    if (ans === data.correct) {
        right++;
    } else {
        wrong++;
    }

    index++;
    reset();
    loadQuestion();
});

loadQuestion();
