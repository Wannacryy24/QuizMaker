import './style.css'
import { interviewQuiz } from './previouslyLoadedQuizes.js';
import { router } from './router.js';

function initializeApp() {
    interviewQuiz();//to load items of default savedQuizes 
    router();
}
document.addEventListener('DOMContentLoaded', initializeApp);
