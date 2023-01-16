// alert('04_함수.js');

// 1. 함수 선언
// 1) 함수
function test1() {
    alert('test1() 함수 호출');
}

// 2) 익명 함수
let btn1 = document.getElementById('btn1');

// 함수에 이름 없음, (함수를 만들어서 변수에 담아주었기 때문) 변수를 통해 함수에 접근 가능
// 변수, 속성(프로퍼티), 매개변수에 대입 할 때는 이름 생략이 가능하다.
// 아래의 예시는 프로퍼티에 전달하는 예시
// btn1.onclick = function() {
//     alert('익명 함수 실행');
// };

// 함수에 매개변수를 통해 다른 함수를 전달 (콜백함수)
btn1.addEventListener('click', function() {
    alert('익명 함수 실행!!');
});

// 스스로 실행하는 함수
// 함수 정의와 동시에 즉시 실행되는 함수로 한 번만 호출되며, 다시 호출할 수 없다. (이름이 없기 때문)
(
    function (a, b) {
        // alert(a + b);
        document.getElementById('p1').innerHTML =
            `a: ${a}, b: ${b}, a + b : ${a + b} (자동으로 혼자 실행)`;
    }
)(10, 20);

// 3) 화살표 함수
//  [표현법]
//      1) 매개 변수 처리
//          - 매개 변수가 없을 때 : () => {...}
//          - 매개 변수가 하나일 때 : x => {...} 한개일 때 X에 () 생략 가능
//          - 매개 변수가 두 개 이상일 때 : (x, y, ...) => {...}

//      2) 리턴 처리
//          - 처리할 라인이 여러개라면 {}로 감싸서 처리해야 한다.
//              (x, y) => {
//                  ...실행 구문...
//                  return x + y;
//              }
//          - 처리할 라인이 하나라면 {}와 return 문을 생략할 수 있다.
//              (x, y) => x + y;

let btn2 = document.getElementById('btn2');

// btn2.addEventListener('click', function() {
//     alert('익명 함수 실행');
// })

// btn2.addEventListener('click', () => {
//     alert('화살표 함수 실행');
// });

// 실행하는 구문이 한개일 경우 중괄호 생략 가능
btn2.addEventListener('click', () => alert('화살표 함수 실행'));

// 화살표 함수도 익명 함수처럼 단독으로 선언 불가
// 콜백함수로 사용하거나 이벤트 속성으로 사용
(x, y) => {
    return x + y;
}

// 2. 함수 호출
// 1) 매개 변수
let btn3 = document.getElementById('btn3');

btn3.addEventListener('click', () => {
    // alert('버튼 클릭!');

    argTest('안녕하세요~^^', '반갑습니다!!'); // 매개값을 개수에 맞추지 않아도 에러가 발생하지 않는다.
    // argTest(); // 아무 값도 넘겨주지 않으면 undefined가 찍힌다.
});

// function argTest(value) {
// 매개 변수에 기본값을 지정하면 전달되는 매개값이 없을 경우 기본 값으로 사용한다.
function argTest(value = '매개값 없음') {
    alert(value);
};

// 2) arguments 객체
let btn4 = document.getElementById('btn4');

// btn4.addEventListener('click', () => { // arguments 객체 생성 안됨
btn4.addEventListener('click', function() {
    // alert('버튼 클릭~!');
    let result = 0;

    // 화살표 함수에서는 arguments 객체를 생성하지 않는다.

    // result = sum(125, 600, 400);
    result = sum(125, 600);
    // 입력을 안할 경우 0 리턴

    alert(`sum : ${result}`);
});

function sum() {
    let result = 0;

    console.log(arguments); // 자바스크립트에서 알아서 만들어주는 객체
    console.log(arguments.length);
    console.log(typeof(arguments));

    // for(let i = 0; i < arguments.length; i++) {
    //     result += arguments[i];
    // }

    // for of : 결과값 위와 동일
    // 개발자 도구에서 Symbol(Symbol.iterator) 가 들어가야 for of 사용 가능
    for(const value of arguments) {
        result += value;
    }

    return result;
}

// 3. 함수 리턴
// 1) 일반적인 값 리턴
let btn5 = document.getElementById('btn5');

btn5.addEventListener('click', () => {
    // alert('버튼 클릭~!');
    let random = 0;

    random = ran();

    alert(`random : ${random}`);
});

// 1 ~ 100까지의 랜덤값을 리턴하는 함수
function ran() {
    let result = 0;

    result = parseInt(Math.random() * 100) + 1;// 범위 : 0.0 ~ 0.999...

    return result;
}

// 2) 익명 함수 리턴
let btn6 = document.getElementById('btn6')

btn6.addEventListener('click', () => {
    // alert('버튼 클릭~~!!');
    // let func = funcTest();

    // func(); // 이름으로 함수 호출

    funcTest()(); // 리턴 된 함수를 이어서 호출
});

function funcTest() {
    // 클로저
    // - 내부 함수가 사용하는 외부 함수의 지역 변수는 내부 함수가 소멸할 때까지 소멸되지 않는 특성을 클로저라고 한다.
    let name = '홍길동'; // return함수에서 사용
    // let func = function() {
    //     alert('안녕하세요~!!!!');
    // };

    //func(); // 함수 생성 후 func라는 변수 안에 담아준 후 호출 (리턴 가능)

    // return func; // 함수 자체를 반환하기 위해 변수명만

    return function() {
        // alert('안녕하세요?!?!'); // 함수 값이라 익명 함수가 리턴될 수 있게 넣어줌
        alert(`${name}님 안녕하세요!`);
    };
}

// 4. 내장 함수
// 1) eval()
let btn7 = document.getElementById('btn7');

btn7.addEventListener('click', () => {
    // alert('버튼 클릭~~!!');

    let p2 = document.getElementById('p2');
    let calc = document.getElementById('calc');

    p2.innerHTML = `실제 입력된 값 : ${calc.value}<br>`;
    p2.innerHTML += `eval() : ${eval(calc.value)}<br>`;
});

// 2) isFinite(), isNaN()
let btn8 = document.getElementById('btn8');

btn8.addEventListener('click', () => {
    let p3 = document.getElementById('p3');

    p3.innerHTML = '<h4>안녕하세요~!~</h4>'
    p3.innerHTML += `10 / 0 : ${10 / 0}<br>`;
    p3.innerHTML += `-10 / 0 : ${-10 / 0}<br>`;
    p3.innerHTML += `isFinite(10 / 0) : ${isFinite(10 / 0)}<br>`;
    p3.innerHTML += `isFinite(-10 / 0) : ${isFinite(-10 / 0)}<br>`;
    p3.innerHTML += `isFinite(10 / 2) : ${isFinite(10 / 2)}<br>`; // 유한한 값인지, 숫자 데이터가 맞는지 확인
    p3.innerHTML += `10 / 'a' : ${10 / 'a'}<br>`;

    p3.innerHTML += `isNaN(10 / 'a') : ${isNaN(10 / 'a')}<br>`;
    p3.innerHTML += `isNaN(10 / 2) : ${isNaN(10 / 2)}<br>`;
});