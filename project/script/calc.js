/* 
계산식) 적정체중 = (본인신장-100)*0.9
- 현재 키와 몸무게를 자유롭게 입력하고
- 버튼을 눌렀을 때 최종 목표 칸에 메세지 출력하기
결과예시) 적정체중은 ?kg이며 ?kg 초과되셨습니다.
*/
const num1 = document.querySelector('#height')
const num2 = document.querySelector('#weight')
const btn = document.querySelector('#result')
const result = document.querySelector('#goals')
console.log(num1.value)
btn.addEventListener('click',function() {
    console.log(num1.value)
    console.log(num2.value)
    let total = Number(num1.value-100) * 0.9;
    let total2 = Number(num2.value-total)
    console.log(total)
    result.value = `적정체중은 ${total}이며, ${total2}초과되셨습니다. .`
})