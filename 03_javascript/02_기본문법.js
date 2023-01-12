// alert('기본문법.js 파일');

// 1. 변수
// 1) 변수 선언
// 전역 변수 선언
str1 = '전역변수';
var str2 = 'var 전역변수';
let str3 = 'let 전역변수';
// let 으로 선언 할 경우 window의 하위로 들어가지 않는다.
// -> window.str3 으로 조회되지 않는다. (str3 으로만 조회해야 함)

console.log(str1);
console.log(str2);
console.log(str3);

// 전역으로 선언된 함수는 window 객체로 접근 가능
// window.add(), add() 로 호출이 가능하다. (window.add(10, 20)) 결과값 30 출력
function add(a, b) {
    return a + b;
}

// title 태그 밑에 js 파일을 바로 불러왔기 때문에 에러 발생 (heading1 정의 전)
// document.getElementById('heading1').style.color = 'green';

// on 으로 시작 -> 이벤트 핸들
// 페이지 로드가 끝난 후 실행시켜야 할 내용이 있을 경우에 넣어준다.
// 자바스크립트에서 페이지가 모두 로드되면 자동으로 실행되는 이벤트 속성이다.
// function 이 바로 실행되는 게 아니라 정의만 해줌
// onload 를 사용하면 title 태그 밑에 js 파일을 바로 불러와도 오류가 나지 않는다.
window.onload = function() {
    // document.getElementById('heading1').style.color = 'green';

    var str4 = '지역변수'; // 함수 안에서 만들어짐
    let str5 = '지역변수'; // 함수가 종료되면 소멸되기 때문에 개발자 도구에서 조회 시 에러 발생
    str6 = '전역변수'; // 키워드를 사용하지 않으면 함수 내부에서도 전역변수가 된다.

    console.log(str4);
    console.log(str5);
    console.log(str6);
}