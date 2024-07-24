import { attemp } from "./attemp.js";

export function previewQuiz(ind) {
    var savedQuizzes = JSON.parse(localStorage.getItem('savedQuizzes')) || [];
    var div = document.querySelector('.QuizMakerDiv');
    
    if (div) {
        div.remove();
    }

    var lastQuiz = ind !== undefined ? savedQuizzes[ind] : savedQuizzes[savedQuizzes.length - 1];
    div = document.createElement('div');
    div.classList.add('QuizMakerDiv');
    var renderLandingDiv = document.querySelector('.renderLandingDiv');
    renderLandingDiv.appendChild(div);

    var wrapperDetail = document.querySelector('.wrapperDetail');
    if (wrapperDetail) {
        wrapperDetail.remove();
    }
    div.innerHTML = `<div>
                        <button class='playNowButton'>Attempt Test</button>
                        <div class='renderQuestion'>
                            <h3>Title: ${lastQuiz.heading}</h3>
                        </div>
                    </div>`;    

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
        div.innerHTML += questionHTML;
    });

    var playNowButton = div.querySelector('.playNowButton');
    playNowButton.addEventListener('click', function() {
        attemp(lastQuiz);
    });
}

export function showAllTemplates() {
    var savedQuizzes = JSON.parse(localStorage.getItem('savedQuizzes')) || [];
    var div = document.querySelector('.wrapperDetail');
    div.innerHTML = '';
    
    var div2 = savedQuizzes.map(function(item, index) {
        return `
            <div class='containerHeading' data-index='${index}'>
                <button class='deleteBtn' data-index='${index}'><span class="material-symbols-outlined">delete</span></button>
                ${item.heading}
            </div>
        `;
    }).join('');
    div.innerHTML += `<div class='wrapperTitle'>${div2}</div>`;

    var wrapperTitle = document.querySelector('.wrapperTitle');
    if (wrapperTitle) {
        wrapperTitle.removeEventListener('click', handleWrapperTitleClick);
    }
    document.querySelector('.wrapperTitle').addEventListener('click', handleWrapperTitleClick);
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




export function showSavedTemplates(){
       
}