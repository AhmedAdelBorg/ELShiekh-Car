/**
* Animate Width On Scrolling 
*/
let backtotop = document.querySelector(".back-to-top");
let progressSpans = document.querySelectorAll(".the-progress span");
let section = document.querySelector(".our-skills");
let nums = document.querySelectorAll(".stats .number");
let statsSection = document.querySelector(".stats");
let started = false; 

window.onscroll = function () {
    // Back to top button
    this.scrollY >= 800 ? backtotop.classList.add("active") : backtotop.classList.remove("active");
    
    if (this.scrollY >= section.offsetTop) {
        progressSpans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }
    // Stats Increase Number
    if (this.scrollY >= statsSection.offsetTop) {
        if (!started) {
            nums.forEach((num) => startCount(num));
        }
        started = true; 

    }
};

backtotop.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
}




let popup = document.getElementById("popup");

function openPopup() {
    popup.classList.add("open-popup");
}
function closePopup() {
    popup.classList.remove("open-popup");
}