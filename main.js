import './style.css'
import { interviewQuiz } from './previouslyLoadedQuizes.js';
import { router } from './router.js';
import { navigate } from './router.js';
import { shareViaAPI } from './share.js';
function initializeApp() {
    interviewQuiz();//to load items of default savedQuizes 
    router();
    document.querySelector(".share").addEventListener("click", () => shareViaAPI);
}
document.addEventListener('DOMContentLoaded', initializeApp);