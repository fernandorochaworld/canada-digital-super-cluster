var winter = false;

const body = document.getElementsByTagName('body')[0];
const articles = document.getElementsByTagName('article');
const button = document.getElementById('winter-btn');
const articleSection = document.getElementById('article-section');
const form = document.getElementsByTagName("form")[0];

button.onclick = (e) => {
    winter = !winter;
    winter ? body.classList.add("winter") : body.classList.remove("winter");
}

const articleClick = (e, description) => {
    const elem = e.target;
    const spans = elem.getElementsByTagName('span');
    if (spans.length) {
        spans[0].remove();
    } else {
        const newDiv = document.createElement("div");
        description = description || 'A short (1-2 sentences) description of the dish :)';

        newDiv.innerHTML = `<span>${description}</span>`; 
        elem.appendChild(newDiv);
        // elem.innerHtml("<span> A short (1-2 sentences) description of the dish :) </span>");
        // elem.innerHtml("<span> A short (1-2 sentences) description of the dish :) </span>");
    }
};

for (const elem of articles) {
    elem.onclick = articleClick;
}


form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
	const dataObject = Object.fromEntries(data.entries());
    
    const newArticle = document.createElement("article");
    newArticle.innerHTML = `<img src="img/veggies.jpg"><p>${dataObject.recipeName}</p>`;
    articleSection.appendChild(newArticle);
    newArticle.onclick = (e) => articleClick(e, dataObject.recipeDescription);
    
});