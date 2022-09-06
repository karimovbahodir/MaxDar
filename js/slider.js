document.addEventListener("DOMContentLoaded", function () {
  
  function handlePosition() {
    let position = 0;
    const slidesToShow = 1;
    const slidesToScroll = 1;
    const container = document.querySelector(".slider__container");
    const track = document.querySelector(".slider__track");
    const items = document.querySelectorAll(".readiness__slider-content");
    const btnNext = document.querySelector(".top__btn");
    const btnPrev = document.querySelector(".bottom__btn");
    const itemCount = items.length; 
    let itemWidth = container.clientWidth / slidesToShow;
    let movePosition = slidesToScroll * itemWidth;
    items.forEach((item) => {
      item.style.minWidth = `${itemWidth}px`;
    });
    btnPrev.addEventListener("click", function () {
      if (position == 0) {
        position = -(movePosition * 2)
       
      }else{
        position += movePosition;
      }
      setPosition();
    });
    btnNext.addEventListener("click", function () {
      position -=movePosition;
      if (position <= -(movePosition * itemCount)) {
        position = 0
      }
      setPosition();
    });
    const setPosition = () => {
      track.style.transform = `translateX(${position}px)`;
    };

  }
  window.addEventListener("resize", handlePosition);
  handlePosition();
  
  function handleSales(){
    let position = 0;
    const slidesToShow = 1;
    const slidesToScroll = 1;
    const container = document.querySelector(".sales__container");
    const track = document.querySelector(".sales__track");
    const items = document.querySelectorAll(".sales__content");
    const btnNext = document.querySelector(".next__btn");
    const btnPrev = document.querySelector(".prev__btn");
    const itemCount = items.length; 
    let itemWidth = container.clientWidth / slidesToShow;
    let movePosition = slidesToScroll * itemWidth;
    items.forEach((item) => {
      item.style.minWidth = `${itemWidth}px`;
    });
    btnPrev.addEventListener("click", function () {
      if (position == 0) {
        position = -(movePosition * 7)
       
      }else{
        position += movePosition;
      }
      setPosition();
    });
    btnNext.addEventListener("click", function () {
      position -=movePosition;
      if (position <= -(movePosition * itemCount)) {
        position = 0
      }
      setPosition();
    });
    const setPosition = () => {
      track.style.transform = `translateX(${position}px)`;
    };
  }
  window.addEventListener("resize", handleSales);
  handleSales();



  const sliderTrack= document.querySelector('.slider-track');
  sliderTrack.addEventListener('touchstart', handleTouchStart, false);
sliderTrack.addEventListener('touchmove', handleTouchMove, false);
  const slides =document.querySelectorAll('.slide-list'),
		dots=document.querySelectorAll('.slide-dot');

let index=0;

const activeSlide= n =>{
	for( let slide of slides){
	  slide.classList.remove('slide-active')
	}
	slides[n].classList.add('slide-active');
	slides[n].style.opacity = 0;
	setTimeout(() => slides[n].style.opacity = 1, 100)
	}

const activeDot= n =>{
	for(let dot of dots){
		dot.classList.remove('slide-active')
	}
	dots[n].classList.add('slide-active')
	}

	const nextSlide=()=>{
		if(index==slides.length-1){
			index=0;
			activeDot(index)
			activeSlide(index)
		}else{
			index++;
			activeDot(index);
			activeSlide(index)
		}
	}

	const prevSlide=()=>{
		if(index==0){
			index=slides.length-1;
			activeDot(index)
			activeSlide(index)
		}else{
			index--;
			activeDot(index);
			activeSlide(index)
		}
	}

	dots.forEach((item, indexDot)=>{
		item.addEventListener('click', ()=>{
			index=indexDot;
			activeDot(index);
			activeSlide(index)
		})
	})
  
let x1=null;
let y1=null;

function handleTouchStart(event){
  const firstTouch=event.touches[0];

  x1=firstTouch.clientX;
  y1=firstTouch.clientY;
  
}

function handleTouchMove(event){
  if(!x1 || !y1){
    return false
  }
  let x2 =event.touches[0].clientX;
  let y2 =event.touches[0].clientY;
  

  let xDiff=x2-x1;
  let yDiff=y2-y1;

  if(Math.abs(xDiff)>Math.abs(yDiff)){
    // r-l
    if(xDiff>0) {
     	prevSlide();
    }else{
      nextSlide();
    }
  }
  x1=null;
   y1=null;
}

});

