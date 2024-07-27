import { navigate } from './router.js';
import { shareViaAPI } from './share.js';

export function landingFrontPage() {
    const app = document.querySelector("#App");
    app.innerHTML = `
        <header>
            <div class="leftImageLogoDiv">
                <img src="https://cdn.prod.website-files.com/60aca2b71ab9a5e4ececf1cf/62fa6419161d3a641f681ceb_Logo.svg" alt="Quizizz Logo" class="logo-image">
            </div>
            <div class="centerHeaderDiv">
                <ul>
                    <li class='home'>Home</li>
                    <li class='template'>Templates</li>
                    <li class='share'>Share</li>
                    <li class='defaultQuizes'>About</li>
                </ul>
            </div>
            <div class="rightHeaderDiv">
                <button class='login'>Login</button>
                <button class='signUpButton'>Sign Up</button>
            </div>
        </header>
        <div class='renderLandingDiv'>
            <div class="wrapperDetail">
                <h1>Free online <span class='QuizMaker'>Quiz maker</span></h1>
                <p class='makeText'>Make a quiz with different question types to engage students in a classroom, train employees at work, or play trivia with friends.</p>
                <div class='buttonQuizes'>
                    <button class="createBtn">Create a quiz<i class="fa-solid fa-angle-right"></i></button>
                    <button class="createBtn" id='previewQuiz'>Preview Quizes<i class="fa-solid fa-angle-right"></i></button>
                </div>
                <p class='usedBy'><i class="fa-solid fa-check"></i>Can be used by people around the world.</p>
            </div>
        </div>
    `;

    document.querySelector(".createBtn").addEventListener("click", () => navigate('/create'));
    document.querySelector(".template").addEventListener("click", () => navigate('/templates'));
    document.querySelector("#previewQuiz").addEventListener("click", () => navigate('/templates'));
    document.querySelector(".home").addEventListener("click", () => navigate('/'));
    document.querySelector(".share").addEventListener("click", () => shareViaAPI());
    
    document.querySelector('.leftImageLogoDiv').addEventListener('click',function(){
        navigate('/');
        console.log('hello');
    });
    
}