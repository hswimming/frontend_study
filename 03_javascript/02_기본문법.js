// alert('기본문법.js 파일');

// 1. 변수
// 1) 변수 선언
// 전역 변수 선언
str1 = '전역변수';
var str2 = 'var 전역변수';
let str3 = 'let 전역변수';
// let 으로 선언 할 경우 window의 하위로 들어가지 않는다.
// -> window.str3 으로 조회되지 않는다. (str3 으로만 조회해야 함)

// console.log(str1);
// console.log(str2);
// console.log(str3);

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
    var str7; // 생성하고 초기화해주지 않았다. -> undefined

    // 함수 호출 후 리턴되는 값이 없을 경우 undefined

    var str2 = 'var 지역변수';

    console.log(str1); // 전역변수
    console.log(window.str1); // 전역변수
    console.log(this.str1);

    console.log(str2); // var 지역변수 (지역변수가 우선이 된다.)
    console.log(window.str2); // var 전역변수 조회 방법
    console.log(this.str2);  // var 전역변수 조회 방법
    
    console.log(str3); // lget 전역변수
    console.log(window.str3); // undefined (window로 조회 X)
    console.log(this.str3); // this가 window이므로 조회 X


    console.log(str4);
    console.log(str5);
    console.log(str6);
    console.log(str7);

    // var, let, const의 차이점
    // 1) 중복 선언
    var num = 0;
    console.log(num);

    var num = 10;
    console.log(num);

    var num = 20;
    console.log(num);

    let num2 = 10;
    console.log(num2);
    
    // 이름이 같은 변수를 중복 선언 시 에러 발생
    // let num2 = 20;
    // console.log(num2);
    
    // const num3; 에러 발생, 상수는 선언과 동시에 초기화 해야 한다.
    const num3 = 10;
    console.log(num3);
    
    // 이름이 같은 변수를 중복 선언 시 에러 발생
    // const num3 = 20;
    // console.log(num3);

    // num3 = 20; 상수는 값의 재할당이 불가능하다.

    console.log('----------------------------------------');

    // 2) 유효 범위(스코프)
    // 함수 안에서 var 키워드로 선언된 변수는 함수 유효 범위를 갖는다.
    // (선언되면 어디에서 선언이 되던지 살아있다.)
    if(true) {
        var num4 = 10;

        console.log(num4);
    }

    console.log(num4)

    // 함수 안에서 let, const 키워드로 선언된 변수는 블록 유효 범위를 갖는다.
    // (함수 실행이 종료되면 소멸되기 때문)
    if(true) {
        let num5 = 50;
        const num6 = 60;

        console.log(num5);
        console.log(num6);
    }

    // console.log(num5);
    // console.log(num6);

    // 3) 호이스팅 동작 방식
    // 변수를 먼저 생성 -> undefined로 값을 넣어둔다 -> 변수가 이미 생성되어 있어서 에러 X
    // (자바스크립트는 선언과 초기화 단계가 구분되어서 진행되기 때문)
    // var 키워드로 선언한 변수는 변수 호이스팅으로 인해 undefined 출력

    console.log(num7);
    var num7 = 80;

    // let, const 키워드로 선언한 변수는 변수 호이스팅이 발생하지 않는 것처럼 동작한다.
    // (초기화 하기 전까지 접근을 막아두기 때문)

    // console.log(num8);
    // let num8 = 80;

    // console.log(num9);
    // const num9 = 90;
}

// 2. 자료형
function typeTest() {
    // alert('버튼 클릭!!');

    let name = '황수영'; // 문자열 리터럴
    let age = 28; // 숫자 리터럴
    let height = 161.0; // 숫자 리터럴
    let check = false; // 논리값 리터럴
    let hobbies = ['게임', '낮잠', '피아노']; // 문자 데이터 배열 리터럴
    // let user = {}; 아무것도 없는 객체 생성
    let user = {
        id: 'swimming',
        name: '황수영', // 프로퍼티 -> 자바에서는 필드
        age: 28,
        height: 161.0,
        // hobbies: ['게임', '낮잠', '피아노'],
        // hobbies(프로퍼티명): 값으로 쓸 변수명
        // hobbies = hobbies
        hobbies // 두개의 이름이 동일할 경우 하나만 작성이 가능하다.
    };

    // 변수에 함수가 담긴다.
    let addFunc = function(x, y) {
        return x + y;
    };

    let div1 = document.getElementById('div1');

    console.log(hobbies);
    console.log(user);
    console.log(addFunc); // 함수 호출
    console.log(addFunc(10, 20));

    // typeof() 연산자는 값의 자료형을 확인하는 연산자이다.
    // (자료형 -> 변수가 가지고 있는 값의 자료형, 값의 문자열을 데이터 타입으로 반환)
    div1.innerHTML = '<h4>안녕하세요^^</h4>';
    div1.innerHTML += `name : ${name}, type ${typeof(name)} <br>`
    div1.innerHTML += `age : ${age}, type ${typeof(age)} <br>`
    div1.innerHTML += `height : ${height}, type ${typeof(height)} <br>`
    div1.innerHTML += `check : ${check}, type ${typeof(check)} <br>`
    div1.innerHTML += `hobbies : ${hobbies}, type ${typeof(hobbies)} <br>`
    div1.innerHTML += `user : ${user}, type ${typeof(user)} <br>`
    div1.innerHTML += `addFunc : ${addFunc}, type ${typeof(addFunc)} <br>`
}

// 3. 데이터 형 변환
// 1) 문자열과 숫자의 '+' 연산
function plusTest() {
    let div2 = document.getElementById('div2');
    let result1 = 7 + 7; // 14
    let result2 = 7 + '7'; // '77'
    let result3 = '7' + 7; // '77'
    let result4 = 7 + 7 + '7'; // 147
    let result5 = 7 * '7'; // 49 (숫자로 변환할 수 있으면 변환 해준다.)
    let result6 = '7' - 3; // 4
    let result7 = 'a' * 3 // NaN (숫자가 아니라는 뜻)

    div2.innerHTML = '<h4>안녕하세요~^^</h4>';
    div2.innerHTML += `result1 : ${result1}<br>`;
    div2.innerHTML += `result2 : ${result2}<br>`;
    div2.innerHTML += `result3 : ${result3}<br>`;
    div2.innerHTML += `result4 : ${result4}<br>`;
    div2.innerHTML += `result5 : ${result5}<br>`;
    div2.innerHTML += `result6 : ${result6}<br>`;
    div2.innerHTML += `result7 : ${result7}<br>`;
}

// 2) 형 변환 함수
function castingTest() {
    let div3 = document.getElementById('div3');

    div3.innerHTML = '<h4>안녕하세요!</h4>';

    // 문자열 -> 숫자
    div3.innerHTML += `${Number('3')}, type : ${typeof(Number('3'))}<br>`;
    div3.innerHTML += `${parseInt('3')}, type : ${typeof(parseInt('3'))}<br>`; // 정수
    div3.innerHTML += `${Number('3.45')}, type : ${typeof(Number('3.45'))}<br>`;
    div3.innerHTML += `${parseFloat('3.45')}, type : ${typeof(parseFloat('3.45'))}<br>`; // 실수

    // 숫자 -> 문자열
    div3.innerHTML += `${String('3')}, type : ${typeof(String('3'))}<br>`;
}

// 4. 연산자
// '==' 연산자와 '===' 연산자의 차이점
function opTest() {
    let div4 = document.getElementById('div4');

    div4.innerHTML = '<h4>안녕하세요~^^</h4>';
    div4.innerHTML += `'7' == 7 : ${'7' == 7}<br>`; // 값만 같으면 true
    div4.innerHTML += `'7' == '7' : ${'7' == '7'}<br>`; // true
    div4.innerHTML += `'7' == '8' : ${'7' == '8'}<br>`; // false

    div4.innerHTML += '<br><br>'
    
    div4.innerHTML += `'7' === 7 : ${'7' === 7}<br>`; // 데이터 타입도 본다. false
    div4.innerHTML += `'7' === '7' : ${'7' === '7'}<br>`; // true
}