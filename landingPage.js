import { createQuizClicked, check } from "./createQuiz.js";
import { showAllTemplates } from "./previewQuiz.js";
export function landingFrontPage() {
  var headerContent = `
  <header>
    <div class="leftImageLogoDiv">
        <img src="https://cdn.prod.website-files.com/60aca2b71ab9a5e4ececf1cf/62fa6419161d3a641f681ceb_Logo.svg"  alt="Quizizz Logo" class="logo-image">
    </div>
    <div class="centerHeaderDiv">
      <ul>
        <li class='home'>Home</class=></li>
        <li class='template'>Templates</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
    </div>
    <div class="rightHeaderDiv">
        <button class='login'>Login</button>
        <button class='signUpButton'>Sign Up</button>
    </div>
  </header>`;
  document.querySelector("#App").innerHTML += headerContent;
}

export function renderFirstPageDetail() {
  const firstPageDetails = `
  <div class='renderLandingDiv'>
      <div class="wrapperDetail">
          <h1>Free online <span class='QuizMaker'>Quiz maker</span></h1>
          <p class='makeText'>Make a quiz with different question types to engage students in a classroom, train employees at work, or play trivia with friends.</p>
          <button class="createBtn">Create a quiz<i class="fa-solid fa-angle-right"></i></button>
          <p class='usedBy'><i class="fa-solid fa-check"></i>Can be used by people around the world.</p>
      </div>
  </div>`;

  document.querySelector("#App").innerHTML += firstPageDetails;

  document.querySelector(".createBtn").addEventListener("click",createQuizClicked);

  document.querySelector(".template").addEventListener("click",showAllTemplates);

  document.querySelector(".home").addEventListener("click",function(){location.reload()});
}
