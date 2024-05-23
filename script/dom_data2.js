const data = [
    {//
        name: '나를 소모하지 않는 현명한 태도에 관하여',
        author: ['마티아스 뇔케','이미옥'],
        publishing: '퍼스트펭귄',
        date:'2024년 03월',
        price:17800,
        sale:10,
        tag:['#얼리리더', '#이달의굿즈', '#나를바라보다', '#인간관계에대하여']
    },{
        name: '낙관론자들이 빠지는 무모한 실수 12가지',
        author: '마티아스 뇔케',
        publishing: '나무생각',
        date:'2011년 04월',
        price:12000,
        sale:10,    
    },{
        name: '결정적 순간, 나를 살리는 한마디 말',
        author: ['마티아스 뇔케','장혜경'],
        publishing: '갈매나무',
        date:'2011년 04월',
        price:6000,
    }
]
console.log(data)
let book = '';
const section = document.querySelector('section')
console.log(book, section)
book += `<div class="book">`
//내용 시작
book += `<h1>${data[1].name}</h1>`
book += `<p class="info">`
book += `${data[1].author[0]}/${data[1].author[1]}역`
book += `<a href="#">${data[1].publishing}</a>`
book += `<span>${data[1].date}</span>`
book += `</p>`
book += `<p class="price">`
book += `<em>${data[1].price}원</em>`
book += `<span>(${data[1].sale}% 할인)</span>`
book += `</p>`
book += `<p class="tag">`
book += `${data[0].tag[0]}
        ${data[0].tag[1]}
        ${data[0].tag[2]}
        ${data[0].tag[3]}`
book += `</p>`
console.log(book)
section.innerHTML = book;
/* book += `<h1>${data[0].name}</h1>`
book += `<p class="translator">${data[0].author}</p>`
book += `<p class="Publishing">${data[0].publisher}</p>`
book += `<p class="year_month">${data[0].date}</p>`
book += `<div class=price>`
let regular_price = 100 - data[0].sale
let total = regular_price / 100;
let result = data[0].price * total
book += `<span class="price">${result}원</span>`
book += `<span class="discount">${data[0].sale}% 할인</span>`
book += `</div>`
book += `<div class="btn_tag">`
book += `<span>#얼리리더</span>` 
book += `<span>#이달의굿즈</span>`
book += `<span>#나를바라보다</span>`
book += `<span>#인간관계에대하여</span>`
console.log(book)
section.innerHTML = book;  */