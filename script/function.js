//지역변수와 전역변수
//스코프(함수 접근가능 위치)
//지역스코프, 전역스코프
let b = 20;
let c = 30;
function test(){
    //함수의 블랙스코프(지역변수) 위치
    let a = 10;
    console.log(a+b) //10+20 = 30
}
test()
//console.log(a)//error
//console.log(a+b)//error(지역변수를 전역위치에서 사용하기때문)
console.log(b+c)// ok 50
//---------------
//Q. 함수 스코프와 호출 위치를 활용해서 6, 16 결과 문제풀기
let x = 1;
let y 
let z 
function func1() {
    y = 5;
    console.log(x+y)
}
function func2() {
    z = 10;
    console.log(x+y+z)
}
function func3() {
    let a = 100;
    console.log(x+y+a+z)
}
//전역스코프 위치
func1()
func2()
func3()
//NAN == Not a Number(1+undifined+10)
console.log('----------------------')
//자판기 함수 (매개변수==파라미터 연습)
//매개변수가 없는 japangi1 함수
//콜라, 사이다 판매 자판기
/* function japangi1(){//콜라 버튼 클릭 함수
    console.log('콜라1개출력')
} */
const japangi1 = ()=>{
    console.log('콜라1개출력')
}
/* function japangi2(){//사이다 버튼 클릭 함수
    console.log('사이다1개출력')
} */
const japangi2 = ()=>{
    console.log('사이다1개출력')
}
japangi1()
japangi1()
japangi2()  
//매개변수가 있는 함수 만들기
//1. function japangi3(drink) -> drink매개변수생성
//2. japangi3('콜라') -> 함수호출 시 매개변수에 대입값작성('콜라'가 drink 매개변수에 대입됨)
//3. console.log(drink) -> 매개변수에 대입된 값이 함수내에 실행코드에 전달됨.
/* function japangi3(drink){
    console.log(drink+ '1개 출력')
} */
const japangi3 = (drink)=>{
    console.log(drink+ '1개 출력')
}
//함수 호출 시 매개변수에 대입하는 값을 괄호안에 작성함.
japangi3('콜라')
japangi3('사이다')
japangi3('탄산수')
//매개변수 2개 이상 필요한 경우
//함수 내에 수정 데이터 == 매개변수(파라미터)
/* function japangi4(drink, num){
    console.log(`${drink} ${num}개 주문완료`)
} */
const japangi4 = (drink, num)=>{
    console.log(`${drink} ${num}개 주문완료`)
}
japangi4('콜라',3)//argument
japangi4('사이다',1)
console.log('------------')
/* function kiosk(coffee_type='물', num=1){
    console.log(`${coffee_type} ${num}잔 주문하기`)
} */
const kiosk = (coffee_type='물',num=1)=> {
    console.log(`${coffee_type} ${num}잔 주문하기`)
}
kiosk('아메리카노',2)
kiosk('카페라떼',1)
kiosk('모카라떼',3)
kiosk('모카라떼')
kiosk()