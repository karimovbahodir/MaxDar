document.addEventListener("DOMContentLoaded", function(){

   const tabItem = document.querySelectorAll(".tab__item");
   const tabContent = document.querySelectorAll(".tab__block");

   const stageItem = document.querySelectorAll(".stages__circle");
   const stageContent = document.querySelectorAll(".stages__elem");

   const workItem = document.querySelectorAll(".work__tab");
   const workContent = document.querySelectorAll(".work__content");

   const startupItem = document.querySelectorAll('.startup__tab-item');
   const startupContent = document.querySelectorAll('.startup__content');

   const supportItem = document.querySelectorAll('.support__tab-item');
   const supportContent = document.querySelectorAll('.support__content');

   const sliderItem = document.querySelectorAll('.work__slider-item');


   function tabChanger(item, content, slider) {
      item.forEach((tab, index) => {
         tab.addEventListener('click', function(){
            content.forEach(content => {
               content.classList.remove('active');
            })
            item.forEach(tab => {
               tab.classList.remove('active');
            })
            if (slider) {
               slider.forEach(slide => {
                  slide.classList.remove('active')
               })
               slider[index].classList.add('active'); 
            }
            
            content[index].classList.add('active');
            item[index].classList.add('active'); 
            
         })
      })
   }
   tabChanger(tabItem, tabContent);
   tabChanger(stageItem, stageContent);
   tabChanger(workItem, workContent, sliderItem);
   tabChanger(startupItem, startupContent);
   tabChanger(supportItem, supportContent);

})