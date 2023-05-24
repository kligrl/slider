const sliderContent = [
    {
        city: 'Rostov-on-Don<br>LCD admiral',
        area: '81 m2',
        time: '3.5 months',
        cost: 'Upon request',
    },
    {
        city: 'Sochi<br>Thieves',
        area: '105 m2',
        time: '4 months',
        cost: 'Upon request',
    },
    {
        city: 'Rostov-on-Don<br>Patriotic',
        area: '93 m2',
        time: '3 months',
        cost: 'Upon request',
    }
];

const imgAttributes = [
    {
        "src": "images/png/img1.png",
        "alt": "Rostov-on-Don, Admiral completed project photo"
    },
    {
        "src": "images/png/img2.png",
        "alt": "Sochi Thieves completed project photo"
    },
    {
        "src": "images/png/img3.png",
        "alt": "Rostov-on-Don Patriotic completed project photo"
    }
];

const cityText = document.querySelector('.j-city');
const areaText = document.querySelector('.j-area');
const timeText = document.querySelector('.j-time');
const costText = document.querySelector('.j-cost');
const img = document.querySelector('.j-img');
const arrowLeft = document.querySelector('.j-arrow-left');
const arrowRight = document.querySelector('.j-arrow-right');

const dot0 = document.querySelector('.j-dot0');
const dot1 = document.querySelector('.j-dot1');
const dot2 = document.querySelector('.j-dot2');
const dotsArr = [dot0, dot1, dot2];

const link0 = document.querySelector('.j-link0');
const link1 = document.querySelector('.j-link1');
const link2 = document.querySelector('.j-link2');
const linksArr = [link0, link1, link2];

let currentSliderIndex = 0;

function setSliderEntity(index) {
    cityText.classList.add('fade');
    areaText.classList.add('fade');
    timeText.classList.add('fade');
    costText.classList.add('fade');

    setTimeout(() => {
        cityText.innerHTML = sliderContent[index].city;
        areaText.innerHTML = sliderContent[index].area;
        timeText.innerHTML = sliderContent[index].time;
        costText.innerHTML = sliderContent[index].cost;
        cityText.classList.remove('fade');
        areaText.classList.remove('fade');
        timeText.classList.remove('fade');
        costText.classList.remove('fade');
    }, 300);

    setImgAttributes(index);
}

function setImgAttributes(index) {
    const imgAttrs = imgAttributes[index];
    img.classList.add('fade');

setTimeout(() => {
    Object.keys(imgAttrs).forEach((key) => {
        img.setAttribute(key, imgAttrs[key]);
    });
    img.classList.remove('fade');
}, 300);
}

function setDotsClass(index) {
    const activeDot = document.querySelector('.slider-dot-active');
    activeDot.classList.toggle('slider-dot-active');
    dotsArr[index].classList.toggle('slider-dot-active');
}

function setLinksClass(index) {
    const activeLink = document.querySelector('.slider-link-active');
    activeLink.classList.toggle('slider-link-active');
    linksArr[index].classList.toggle('slider-link-active');
}

dot0.addEventListener('click', () => {
    currentSliderIndex = 0;
    setSliderEntity(currentSliderIndex);
    setDotsClass(currentSliderIndex);
    setLinksClass(currentSliderIndex);
});

dot1.addEventListener('click', () => {
    currentSliderIndex = 1;
    setSliderEntity(currentSliderIndex);
    setDotsClass(currentSliderIndex);
    setLinksClass(currentSliderIndex);
});

dot2.addEventListener('click', () => {
    currentSliderIndex = 2;
    setSliderEntity(currentSliderIndex);
    setDotsClass(currentSliderIndex);
    setLinksClass(currentSliderIndex);
});

link0.addEventListener('click', () => {
    currentSliderIndex = 0;
    setSliderEntity(currentSliderIndex);
    setDotsClass(currentSliderIndex);
    setLinksClass(currentSliderIndex);
});

link1.addEventListener('click', () => {
    currentSliderIndex = 1;
    setSliderEntity(currentSliderIndex);
    setDotsClass(currentSliderIndex);
    setLinksClass(currentSliderIndex);
});

link2.addEventListener('click', () => {
    currentSliderIndex = 2;
    setSliderEntity(currentSliderIndex);
    setDotsClass(currentSliderIndex);
    setLinksClass(currentSliderIndex);
});

arrowLeft.addEventListener('click', () => {
    currentSliderIndex -= 1;
    if (currentSliderIndex < 0)
        currentSliderIndex = 2;
    setSliderEntity(currentSliderIndex);
    setDotsClass(currentSliderIndex);
    setLinksClass(currentSliderIndex);
});

arrowRight.addEventListener('click', () => {
    currentSliderIndex += 1;
    if (currentSliderIndex > 2)
        currentSliderIndex = 0;
    setSliderEntity(currentSliderIndex);
    setDotsClass(currentSliderIndex);
    setLinksClass(currentSliderIndex);
});