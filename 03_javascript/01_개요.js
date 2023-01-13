// alert('외부 자바스크립트 실행');

// 요소를 자바스크립트 객체로 얻어오기
var btn2 = document.getElementById('btn2');

// 이벤트 핸들러
/*
btn2.onclick = function () {
    console.log('console 출력 버튼 클릭~~!!');
} */

// 함수를 이벤트 핸들러로 등록하기 위해서는 이름을 줘야 한다.
// 함수 자체를 onclick 속성에 대입하기 위해 이름만 준다.(이름 = 함수의 주소값) -> 반환값 대입
// consoleTest(); -> 함수 호출
btn2.onclick = consoleTest;

// 함수 선언
function consoleTest() {
    console.log('console 출력 버튼 클릭~~!!');
}

// 함수 자체를 변수에 대입하기 때문에 에러가 발생하지 않는다.
/* var func = function() {
} */