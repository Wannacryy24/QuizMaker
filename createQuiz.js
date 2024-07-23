import { previewQuiz } from "./previewQuiz.js";

export function createQuizClicked() {
    var renderLandingDiv = document.querySelector('.renderLandingDiv');
    renderLandingDiv.classList.add('renderLandingDiv2');
    
    var wrapperDiv = document.querySelector(".wrapperDetail");
    wrapperDiv.innerHTML = "";
    wrapperDiv.innerHTML += `
      <div class='QuizMakerDiv'>
          <h2>Enter Quiz Heading</h2>
          <input type='text' placeholder='Write Your Heading Here' id='inputTypeQuiz'>
          <div id="questionsContainer"></div>
          <button id="addQuestionBtn">Add Question</button>
          <div class="buttons">
              <button id="previewBtn" class='previewBtnHide'>Preview Quiz</button>
              <button id="saveBtn">Save Quiz</button>
              <button id="newQuizBtn">New Quiz</button>
          </div>    
      </div>`;
    
    var addQuestionBtn = document.getElementById("addQuestionBtn");
    addQuestionBtn.addEventListener("click", function() {
        renderQuestions();
        attachRemoveEventListeners(); 
    });

    var saveBtn = document.getElementById('saveBtn');
    saveBtn.addEventListener('click', function() {
        check();
    });
}


function renderQuestions() {
    var questionsContainer = document.getElementById("questionsContainer");
    var newQuestionDiv = document.createElement('div');
    newQuestionDiv.classList.add('QuestionInputDiv');
    
    newQuestionDiv.innerHTML = `
      <div class='questionDiv'>
        <input type="text" class='questionInput' placeholder='Type Your Question here'>
        <button class='cross'><span class="material-symbols-outlined">close_small</span></button>
    </div>
    <div class='optionsDiv'>
        <div>
            <input type='radio' value="1" name='question${Date.now()}' class='optionRadio input'>
            <input type="text" class='optionInput'>
        </div>
        <div>
            <input type='radio' value="2" name='question${Date.now()}' class='optionRadio input'>
            <input type="text" class='optionInput'>
        </div>
        <div>
            <input type='radio' value="3" name='question${Date.now()}' class='optionRadio input'>
            <input type="text" class='optionInput'>
        </div>
        <div>
            <input type='radio' value="4" name='question${Date.now()}' class='optionRadio input'>
            <input type="text" class='optionInput'>
        </div>
    </div>`;
    
    questionsContainer.appendChild(newQuestionDiv);
    attachRemoveEventListeners();
}

function attachRemoveEventListeners() {
    var crossButtons = document.querySelectorAll('.cross');
    crossButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.closest('.QuestionInputDiv').remove();
        });
    });
}

export function check() {
    var quizHeading = document.getElementById('inputTypeQuiz').value.trim();
    var questions = document.querySelectorAll('.QuestionInputDiv');

    if (!quizHeading) {
        swal("Quiz heading cannot be empty.");
        return;
    }

    var isValid = true;
    questions.forEach(question => {
        var questionText = question.querySelector('.questionInput').value.trim();
        var options = question.querySelectorAll('.optionInput');

        if (!questionText) {
            isValid = false;
            question.querySelector('.questionInput').style.border = '1px solid red';
        } else {
            question.querySelector('.questionInput').style.border = '';
        }

        var optionsFilled = true;
        options.forEach(option => {
            if (!option.value.trim()) {
                optionsFilled = false;
                option.style.border = '1px solid red';
            } else {
                option.style.border = '';
            }
        });

        if (!optionsFilled) {
            isValid = false;
        }
    });

    if (!isValid) {
        swal('All fields must be filled');
    } else {
        saveToJsonObject();
    }
}

function saveToJsonObject() {
    var inputTypeQuiz = document.getElementById('inputTypeQuiz').value.toUpperCase();
    var jsonObject = {
        heading: inputTypeQuiz,
        questionsArray: []
    };
    var questionsDiv = document.querySelectorAll('.QuestionInputDiv');
    questionsDiv.forEach(function(div) {
        var questionObject = {};
        var questionText = div.querySelector('.questionInput').value;

        var optionInputs = div.querySelectorAll('.optionInput');
        var optionsArray = [];
        var optionRadios = div.querySelectorAll('.optionRadio');
        var correctAnswer = Array.from(optionRadios).find(radio => radio.checked)?.value || null;

        optionInputs.forEach((answer, index) => {
            optionsArray.push({
                text: answer.value,
                value: optionRadios[index].value
            });
        });
        questionObject.options = optionsArray;
        questionObject.question = questionText;
        questionObject.correctAnswer = correctAnswer;
        jsonObject.questionsArray.push(questionObject);
    });

    var savedQuizzes = JSON.parse(localStorage.getItem('savedQuizzes'));
    if (!Array.isArray(savedQuizzes)) {
        savedQuizzes = [];
    }
    savedQuizzes.push(jsonObject);
    localStorage.setItem('savedQuizzes', JSON.stringify(savedQuizzes));

    console.log(jsonObject);

    var previewQuizBtn = document.getElementById("previewBtn");
    var previewBtnHide = document.querySelector('.previewBtnHide');
    if (previewBtnHide !== null) {
        previewBtnHide.classList.remove('previewBtnHide');
    }
    previewQuizBtn.addEventListener("click", function() {
        previewQuiz();
    });
}
