const $ = document.querySelector.bind(document);
const slideBackground = [
    {
        p: "residential",
        h1: "Small <br> House Near <br> Wroclaw",
        url: "./images/slide1.jpg",

    },
    {
        p: "residential",
        h1: "The luxury <br> residence in <br> forest",
        url: "./images/slide2.jpg",
    },
    {
        p: "residential",
        h1: "Redesign <br> Interior For <br> Villa",
        url: "./images/slide3.jpg",
    }
]

const projectDetails = [
    {
        h1: "Triangle Concrete House On Lake",
        p1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur cupiditate repellat sequi sit magni explicabo atque ea expedita tempore reiciendis, consectetur sed placeat enim, minima itaque et, modi ut blanditiis.",
        p2: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut. magna aliquam erat volutpat enim ad minim veniam. Duis autem vel eum iriure dolor in hendrerit in.",
        clients: "Ethan Hunt, John Doe",
        Completion: "February 5th, 2019",
        projectType: "Villa, Residence",
        Architects: "Logan Cee, Paul",
        Budget: "$999999",
    }
]


let background = document.getElementById("background");
let numberImage = Math.floor(Math.random() * 3);
let randomSlide = slideBackground[Math.floor(Math.random() * 3)].url;
let backgroundTitle = document.querySelector('.background_title');
let backgroundSubtitle = document.querySelector('.background_subtitle');
let currentIndex = 0;
function renderSlides(number) {
    background.style.backgroundImage = `url(${slideBackground[number].url})`;
    backgroundTitle.innerHTML = slideBackground[number].p;
    backgroundSubtitle.innerHTML = slideBackground[number].h1;
}
function currentSlide(number) {
    renderSlides(number);
}

setInterval(function () {                           //background auto change
    if(currentIndex > slideBackground.length-1) {
        currentIndex = 0;
    }
    renderSlides(currentIndex);
    currentIndex++;
}, 15000);

let isDown = false;
let startX;
let scrollLeft;
const slider = document.querySelector('.projects_items');

const end = () => {
	isDown = false;
//   slider.classList.remove('active');
}

const start = (e) => {
  isDown = true;
//   slider.classList.add('active');
  startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;	
}

const move = (e) => {
	if(!isDown) return;

    e.preventDefault();
    const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
    const dist = (x - startX);
    slider.scrollLeft = scrollLeft - dist;
}

(() => {
	slider.addEventListener('mousedown', start);
	slider.addEventListener('touchstart', start);

	slider.addEventListener('mousemove', move);
	slider.addEventListener('touchmove', move);

	slider.addEventListener('mouseleave', end);
	slider.addEventListener('mouseup', end);
	slider.addEventListener('touchend', end);
})();

// setInterval(() => {
//     slider.addEventListener('mousedown', start);
// 	slider.addEventListener('touchstart', start);

// 	slider.addEventListener('mousemove', move);
// 	slider.addEventListener('touchmove', move);

// 	slider.addEventListener('mouseleave', end);
// 	slider.addEventListener('mouseup', end);
// 	slider.addEventListener('touchend', end);
// }, 3000);


let projectItems = document.querySelector(".project_items");
let projectModal = document.querySelector(".projects_modal");
function renderProjectItems() {
    projectModal.classList.add('.showModal');
}



//Feedback form


let nameForm = document.getElementById("name_js").value;
let emailForm = document.getElementById("email_js").value;
let messageForm = document.getElementById("message_js").value;
let checkForm = (e) => {
    let valid = true;
    if(!nameForm) {
        let formError = document.getElementById("formError");
        // formError.classList.add("visible");
        // formError.setAttribute("aria-hidden", false);
        // formError.setAttribute("aria-invalid", true);
    }
    return valid;
}

function sendEmail(){
    alert("Thanks for your respond <3")
    
}


