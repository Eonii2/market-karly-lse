// hover effect
// let categoryBtn = document.querySelector('.category');
// let categoryList = document.querySelector('.category-list');

// categoryBtn.addEventListener('mouseover', function() {
//   categoryList.style.display = 'block';
// })

// categoryBtn.addEventListener('mouseout', function() {
//   categoryList.style.display = 'none';
// })

// categoryList.addEventListener('mouseover', function() {
//   categoryList.style.display = 'block';
// })

// categoryList.addEventListener('mouseout', function() {
//   categoryList.style.display = 'none';
// })


let categoryBtn = document.querySelector('.category');
let categoryList = document.querySelector('.category-list');

function hoverCategoryList() {
  categoryList.style.display = (categoryList.style.display === 'block') ? 'none' : 'block';
}

categoryBtn.addEventListener('mouseover', hoverCategoryList);
categoryBtn.addEventListener('mouseout', hoverCategoryList);
categoryList.addEventListener('mouseover', hoverCategoryList);
categoryList.addEventListener('mouseout', hoverCategoryList);


// let mainNav = document.querySelectorAll('.nav-center');
// let smallNav = document.querySelectorAll('.nav-small');


// document.scrollingElement.scrollTop; >= 0 ? smallNav.style.display = "flex" : mainNav.style.display = "flex";


// 스크롤
const navigation = document.querySelector('.nav-center');
const mini = document.querySelector('.nav-small');



function scrollHandeler(e){
  if(window.scrollY >= 175){
    
    mini.style.display = 'flex';
    navigation.style.display = 'none';
  }else{
    mini.style.display = 'none';
    navigation.style.display = 'flex'
  }
}

window.addEventListener('scroll',scrollHandeler)