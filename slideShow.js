
// 根据图片数量添加小圆点
const box = document.querySelector('.box')
const points = document.querySelector('.points')
const left = box.offsetLeft;
const width = box.offsetWidth;
// 点击箭头，图片滑动

const leftArrow = document.querySelector('.arrow-left')
const rightArrow = document.querySelector('.arrow-right')

// 根据图片数量添加按钮数
for(let j = 0; j < box.children.length; j++){
 const li = document.createElement('span')
 points.appendChild(li)
 li.setAttribute('index',j)
 points.children[0].className='current'
 
}

//当点击小圆点时，改变小圆点的背景颜色
for (let i = 0; i < points.children.length; i++) {

 points.children[i].addEventListener('click', function () {
  // 给所有小圆点去掉颜色
  for (let i = 0; i < points.children.length; i++) {
   points.children[i].className = ''
  }
  // 给点击的小圆点加颜色
  this.className = 'current';
 // 点击按钮滚动画面
  let target = (-this.getAttribute('index')) * width
  num = parseInt(this.getAttribute('index'))
  animate(box, target);
  circle = num

 })

}
// 右侧箭头
let num = 0; 
let circle = 0;
function rightSlide (){
 // 克隆第一张图
 const firstImg = box.children[0].cloneNode(true);
 box.appendChild(firstImg)

 rightArrow.addEventListener('click', function () { 
 if(num === points.children.length){
  box.style.left = 0; 
  num = 0 
 }
 num++;
 circle++;
 for(let i = 0; i < points.children.length;i++){
  points.children[i].className=''

 }
 if(circle===4){
  circle =0;
 }
 points.children[circle].className='current'
 
 let target = -num * width
 animate(box, target)
 })
}

rightSlide()
leftSlide()
// 左侧箭头
function leftSlide() {
 
 leftArrow.addEventListener('click', function () {
  console.log(num);
  if (num ===0 ) {
   num = box.children.length - 1; 
   box.style.left = -(num * width) + 'px';
   
  }
  num--;
  circle--;
  if(circle < 0){
   circle = 3;
  }
  for (let i = 0; i < points.children.length; i++) {
   points.children[i].className = ''

  }
  points.children[circle].className='current'
  
  let target = -num * width
  animate(box, target)
 })
}

function animate (obj,target){
 clearInterval(obj.timer)
obj.timer=setInterval(function(){
 

 // 缓步动画效果
 let step = (target - obj.offsetLeft) / 10;
 // 除法存在浮点数，所以要进位
 step = step > 0 ? Math.ceil(step) : Math.floor(step);
 
// console.log(step);
 if(obj.offsetLeft!==target){

  obj.style.left= obj.offsetLeft + step + 'px';

 }else{
  clearInterval(obj.timer)
 }

}, 10)

}




