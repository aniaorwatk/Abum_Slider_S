
const slideList = [{
        img: "images/cat.jpg",
        text: 'Koty są słodkie',
    },
    {
        img: "images/cows.jpg",
        text: 'Krowy są puszyste',
    },
    {
        img: "images/fox.jpg",
        text: 'Lis jest rudy'
    },
    {
        img: "images/green-lizard.jpg",
        text: 'Jaszczurka jest gadem'
    },
    {
        img: "images/sheep.jpg",
        text: 'Owca je trawe'
    },
];

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')]

const time = 4000;
let active = 0;

const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
}

const changeSlide = () => {
    active++;
    if (active === slideList.length) {
        active = 0;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot()
}
let indexInterval = setInterval(changeSlide, time);

const keyChangeSlide = (e) => {
    if (e.keyCode == 37 || e.keyCode == 39) {
        clearInterval(indexInterval);
        e.keyCode == 37 ? active-- : active++;

        if (active === slideList.length) {
            active = 0;
        } else if (active < 0) {
            active = slideList.length - 1;
        }
        image.src = slideList[active].img;
        h1.textContent = slideList[active].text;
        changeDot()
        indexInterval = setInterval(changeSlide, time);
    }
}

window.addEventListener('keydown', keyChangeSlide);
