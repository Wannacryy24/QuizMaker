import { attemp } from "./attemp.js";
import { navigate } from "./router.js";


export function showAllTemplates() {
    var savedQuizzes = JSON.parse(localStorage.getItem('savedQuizzes')) || [];

    var app = document.querySelector("#App");
    app.innerHTML = `
        <header>
            <div class="leftImageLogoDiv">
                <img src="https://cdn.prod.website-files.com/60aca2b71ab9a5e4ececf1cf/62fa6419161d3a641f681ceb_Logo.svg" alt="Quizizz Logo" class="logo-image">
            </div>
            <div class="centerHeaderDiv">
                <ul>
                    <li class='home'>Home</li>
                    <li class='template'>Templates</li>
                    <li class='defaultQuizes'>About</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div class="rightHeaderDiv">
                <button class='login'>Login</button>
                <button class='signUpButton'>Sign Up</button>
            </div>
        </header>
        <div class='renderLandingDiv'>
            <div class="wrapperDetail"></div>
        </div>
    `;

    var div2 = savedQuizzes.map(function(item, index) {
        return `
            <div class='containerHeading' data-index='${index}'>
                <button class='deleteBtn' data-index='${index}'><span class="material-symbols-outlined">delete</span></button>
                ${item.heading}
            </div>
        `;
    }).join('');
    document.querySelector('.wrapperDetail').innerHTML = `<div class='wrapperTitle'>${div2}</div>`;

    document.querySelector('.wrapperTitle').addEventListener('click', handleWrapperTitleClick);

    document.querySelector(".template").addEventListener("click", () => navigate('/templates'));
    document.querySelector(".home").addEventListener("click", () => navigate('/'));
}

function handleWrapperTitleClick(e) {
    if (e.target.closest('.deleteBtn')) {
        var index = e.target.closest('.deleteBtn').getAttribute('data-index');
        deleteQuiz(index);
    } else if (e.target.closest('.containerHeading')) {
        var index = e.target.closest('.containerHeading').getAttribute('data-index');
        previewQuiz(index);
    }
}

function deleteQuiz(index) {
    var savedQuizzes = JSON.parse(localStorage.getItem('savedQuizzes')) || [];
    savedQuizzes.splice(index, 1);
    localStorage.setItem('savedQuizzes', JSON.stringify(savedQuizzes));
    showAllTemplates();
}


export function previewQuiz(ind) {
    var savedQuizzes = JSON.parse(localStorage.getItem('savedQuizzes')) || [];
    var lastQuiz = ind !== undefined ? savedQuizzes[ind] : savedQuizzes[savedQuizzes.length - 1];

    var app = document.querySelector("#App");
    app.innerHTML = `
        <header>
            <div class="leftImageLogoDiv">
                <img src="https://cdn.prod.website-files.com/60aca2b71ab9a5e4ececf1cf/62fa6419161d3a641f681ceb_Logo.svg" alt="Quizizz Logo" class="logo-image">
            </div>
            <div class="centerHeaderDiv">
                <ul>
                    <li class='home'>Home</li>
                    <li class='template'>Templates</li>
                    <li class='defaultQuizes'>About</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div class="rightHeaderDiv">
                <button class='login'>Login</button>
                <button class='signUpButton'>Sign Up</button>
            </div>
        </header>
           <div class='renderLandingDiv'>
        <div class='QuizMakerDiv'>
            <button class='playNowButton'>Attempt Test</button>
            <div class='renderQuestion'>
                <h3>Title: ${lastQuiz.heading}</h3>
            </div>
        </div></div>
        
    `;

    lastQuiz.questionsArray.forEach(function(question, index) {
        var questionHTML = `
            <div class='QuestionInputDiv'>
                <div class='questionDiv'>
                    <h2><span class='questionNo'>Q${index + 1})</span> ${question.question}</h2>
                </div>
                <div class='optionsDiv'>
        `;
        question.options.forEach(function(option, optionIndex) {
            questionHTML += `
                <div>
                    <p>${optionIndex + 1}: ${option.text}</p>
                </div>
            `;
        });
        questionHTML += `</div></div>`;
        document.querySelector('.QuizMakerDiv').innerHTML += questionHTML;
    });

    document.querySelector('.playNowButton').addEventListener('click', function() {
        attemp(lastQuiz);
    });

    document.querySelector(".template").addEventListener("click", () => navigate('/templates'));
    document.querySelector(".home").addEventListener("click", () => navigate('/'));
}
