import './style.css'
import { landingFrontPage, renderFirstPageDetail } from './landingPage.js';


function initializeApp() {
    // Rendering the landing page content header
    landingFrontPage();
    // Rendering the landing page content details 
    renderFirstPageDetail();
}
document.addEventListener('DOMContentLoaded', initializeApp);
