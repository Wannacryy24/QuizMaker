import { navigate } from "./router";

export function attemp(quizData){
    console.log(quizData);
    var QuizMakerDiv = document.querySelector('.QuizMakerDiv');
    QuizMakerDiv.innerHTML = `
        <div class="renderQuestion">
            <h3>${quizData.heading}</h3>
        </div>`;
    quizData.questionsArray.forEach(function(question, index) {
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
                    <input type='radio' value='${optionIndex + 1}' class='radioButton' name='question${index}'></input>
                    <p>${option.text}</p>
                </div>
            `;
        });
        questionHTML += `</div></div>`;
        QuizMakerDiv.innerHTML += questionHTML;
    });    
    QuizMakerDiv.innerHTML += `<button class="submit">
  <span class="lable">Submit</span>
</button>`;

    document.querySelector('.submit').addEventListener('click', function() {
        let score = 0;
        quizData.questionsArray.forEach(function(question, index) {
            let selectedOption = document.querySelector(`input[name='question${index}']:checked`);
            // If an option is selected and the selected option value is equal to the correct answer
            if (selectedOption && selectedOption.value == question.correctAnswer) {
                score++;
            }
        });
        document.querySelector('.QuizMakerDiv').remove();
        var showScore = document.createElement('div');
        document.querySelector('.renderLandingDiv').appendChild(showScore);
        showScore.classList.add('QuizMakerDiv');
        showScore.classList.add('showScore');
        showScore.innerHTML += `
            <div class='outer-score-div animate__backInDown'>
                <div class='inner-Score-Div animate__backInDown'>
                    <p>Your Score is : ${score}/${quizData.questionsArray.length}</p>
                </div>
            </div>
            <button class="morebutton moreTemplates" data-text="Awesome">
                <span class="actual-text">&nbsp;templates&nbsp;</span>
                <span aria-hidden="true" class="hover-text">&nbsp;templates&nbsp;</span>
            </button>`;
        document.querySelector('.morebutton').addEventListener('click', function() {
            navigate('/templates');
        });
    });
}
