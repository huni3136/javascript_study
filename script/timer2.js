//slider 모든 대상 opacity:0
//slider 모든 대상 transition:opacity 0.3s
//slider 첫번째 opacity:1
const change_container = document.querySelectorAll('.change')
let num = 0
//slider 공통 적용 재사용 함수
let slider_style = (properti, val='0') => {
    for(let i of change_container){i.style[properti] = val}
} 
/* let slider_style = () => {
    for(let i of change_container){i.style.opacity = 0}
} */
let slider_style2 = () => {
    for(let i of change_container){i.style.transition = 'opacity 0.3s'}
}
//slider_style() 
//slider_style2() 
slider_style('opacity', 0) //모두 숨기기
slider_style2('transition', 'opacity 0.3s')  //모든 동적기능 숨기기 
change_container[0].style.opacity = 1 //(초기) 첫번째 슬라이드 보이기
//슬라이드 진행 타이머 함수
let slide_timer = setInterval(change_container_func,1000)
function change_container_func(){
    num++
    if(num>=change_container.length){
        num = 0
        slider_style('opacity',0)
    }   
    console.log(num)
    change_container[num].style.opacity = 1
} 