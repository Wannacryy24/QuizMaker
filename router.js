import { landingFrontPage } from "./landingPage";
import { createQuizClicked } from "./createQuiz";
import { showAllTemplates } from "./previewQuiz";

const routes = {
    '/': landingFrontPage,
    '/create': createQuizClicked,
    '/templates': showAllTemplates
};

function getRoutes() {
    const path = window.location.pathname;
    return routes[path] || routes['/'];
}

export function router() {
    const view = getRoutes();
    if (typeof view === 'function') {
        view();
    } else {
        document.getElementById('app').innerHTML = view();
    }
}

export function navigate(url) {
    history.pushState({}, "", url);
    router();
}

window.addEventListener('popstate', router);
