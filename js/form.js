const quizData = [{
        question: "How many drinks do you need to pass out?",
        a: "Up to 5",
        b: "5 – 10",
        c: "Still to be discovered",

    },
    {
        question: "Are you into bizarre foods?",
        a: "Yes, I am ready to eat anything",
        b: "I need to smell it first",
        c: "I only eat what my mommy cooks ",

    },
    {
        question: "How many pounds did you gain during Covid-19 quarantine?",
        a: "Up to 5",
        b: "5 – 10",
        c: "None of my clothes fits me",
    },
    {
        question: "What is your favorite section on PornHub?",
        a: "Hot old chicks",
        b: "Farm animals",
        c: "Dwarfs",

    },
    {
        question: "How many curse words are you able to say during one video game session?",
        a: "Up to 10",
        b: "Up to 20",
        c: "I don’t know any other words",

    },
    {
        question: "What was the wildest thing you have done while being on drugs?",
        a: "Once I french kissed a homeless person",
        b: "Running naked down the street",
        c: "Signing up for  <Academia de Codigo_>",

    },
    {
        question: "How much time do you need to convince your parents that you are sober while being totally wasted?",
        a: "My father’s belt convinces me faster",
        b: "My mommy thinks I am still an alcohol virgin (maybe not only alcohol)  ",
        c: "Pretty quickly if my 'PRIMA' doesn’t let me down first",

    },
    {
        question: "What is your level of desperation?",
        a: "Impossible to be lower ",
        b: "Enough to be on this shitty website",
        c: "I don’t know, my mom says I am a GOD",

    },
];


const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;

}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();
    console.log(answer)
    if (answer) {
        if (answer == 'a') {
            score += 5
        }

        if (answer == 'b') {
            score += 3
        }

        if (answer == 'c') {
            score += 1
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {

            var companies = [{

                    name: "Black Tape Company",
                    min: 8,
                    max: 11,
                    image: "/img/BlackTape.png",
                    url: "/html/two-company.html"

                },
                {
                    name: "Quinta dos Cunhados",
                    min: 12,
                    max: 15,
                    image: "/img/Quinta.png",
                    url: "/html/three-company.html"

                },
                {
                    name: "King of Pombinhas",
                    min: 16,
                    max: 19,
                    image: "/img/KPombinhas.png",
                    url: "/html/four-company.html"

                },
                {
                    name: "Papi Connections",
                    min: 20,
                    max: 23,
                    image: "/img/Papi.png",
                    url: "/html/five-company.html"
                },
                {
                    name: "Captain Hammer",
                    min: 24,
                    max: 27,
                    image: "/img/Hammer.png",
                    url: "/html/one-company.html"
                },
                {
                    name: "Bichano’s Bite",
                    min: 28,
                    max: 31,
                    image: "/img/Bite.png",
                    url: "/html/six-company.html"
                },
                {
                    name: "Shake It",
                    min: 32,
                    max: 35,
                    image: "/img/Shake.png",
                    url: "/html/seven-company.html"
                },
                {
                    name: "Not Found... You're hopeless",
                    min: 36,
                    max: 40,
                    image: "/img/BlackTape.png",
                },

            ];

            var winner = companies.filter(function(company) {
                console.log(score)
                console.log(company.min)
                console.log(company.max)
                if (score >= company.min && score <= company.min) {
                    return company
                }
            });

            console.log(winner)
            localStorage.setItem("companyNameMatch", winner[0].name)
            localStorage.setItem("companyImageMatch", winner[0].image)
            localStorage.setItem("companyUrlMatch", winner[0].url)
            localStorage.setItem("score", score)

            location.replace("/html/match.html")

        }
    }
});