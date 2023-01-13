// alert('03_배열.js');

window.onload = function() {
    // 1. 배열 선언 및 초기화
    let btn1 = document.getElementById('btn1');

    // 이벤트 등록 방법 (이름 없는 함수)
    btn1.onclick = function() {
        let div1 = document.getElementById('div1');
        let array1 = []; // 빈 배열 생성
        let array2 = new Array();
        let array3 = new Array(3);
        let array4 = new Array('빨강', '주황', '노랑', '초록');
        let array5 = Array.of('파랑', '남', '보');
        let array6 = ['파랑', '남', '보'];
        let array7 = [
            '황수영',
            28,
            true,
            [1, 2, 3, 4],
            {},
            function(){}
        ]

        console.log(array1, array2, array3);
        console.log(array4, array5, array6);
        console.log(array7);

        array1[0] = '딸기';
        array1[1] = '멜론';
        array1[2] = '자몽';

        array2[0] = '계란빵';
        array2[1] = '붕어빵';
        array2[2] = '호빵';
        array2[3] = '호떡';

        div1.innerHTML = '<h4>안녕하세요~!^^</h4>';
        // div1.innerHTML += `array1 : [${array1}]<br>`;
        div1.innerHTML += `array1 : [${array1}], length : ${array1.length}<br>`;
        div1.innerHTML += `array2 : [${array2}], length : ${array2.length}<br>`;
        div1.innerHTML += `array3 : [${array3}], length : ${array3.length}<br>`;
        div1.innerHTML += `array4 : [${array4}], length : ${array4.length}<br>`;
        div1.innerHTML += `array5 : [${array5}], length : ${array5.length}<br>`;
        div1.innerHTML += `array6 : [${array6}], length : ${array6.length}<br>`;
        div1.innerHTML += `array7 : [${array7}], length : ${array7.length}<br>`;
    }

    // 2. 배열의 메소드
    let btn2 = document.getElementById('btn2');

    // 매개값으로 함수를 전달, 이벤트 핸들러
    // callback 함수
    btn2.addEventListener('click', function() {
        let div2 = document.getElementById('div2');

        // 1) indexOf()
        // let array = ['딸기', '망고', '키위', '바나나', '복숭아'];

        // div2.innerHTML = '<h4>안녕하세요~!~!</h4>';

        // div2.innerHTML = `array : [${array}]<br>`;
        // div2.innerHTML += `indexOf('딸기') : ${array.indexOf('딸기')}<br>`;
        // div2.innerHTML += `indexOf('복숭아') : ${array.indexOf('복숭아')}<br>`;
        // div2.innerHTML += `indexOf('수박') : ${array.indexOf('수박')}<br>`;
        // 값이 존재하지 않을 경우 -1 반환

        // 2) concat()
        // let array1 = ['딸기', '망고', '키위', '바나나', '복숭아'];
        // let array2 = ['샤인머스캣', '딸기', '레드향', '레몬', '수박'];

        // div2.innerHTML = `array1 : [${array1}]<br>`;
        // div2.innerHTML += `array2 : [${array2}]<br>`;
        // div2.innerHTML += `array1을 기준으로 배열을 결합 : [${array1.concat(array2)}]<br>`;
        // // concat : 새로운 배열을 생성 (원본 배열에 영향을 미치지 않는다.)
        // div2.innerHTML += `array1 : [${array1}]<br><br>`;
        // div2.innerHTML += `array2를 기준으로 배열을 결합 : [${array2.concat(array1)}]<br>`;
        // div2.innerHTML += `array2 : [${array2}]<br><br>`;

        // 3) sort()
        let array1 = ['Apple', 'Cherry', 'apple', 'Banana'];
        let array2 = [10, 543, 30, 450, 123, 4885];

        div2.innerHTML = `array1 : [${array1}]<br>`;
        div2.innerHTML += `array2 : [${array2}]<br>`;
        div2.innerHTML += `array1.sort() : [${array1.sort()}]<br>`;
        div2.innerHTML += `array2.sort() : [${array2.sort()}]<br>`;
        // 원본 배열에 영향을 미치는 메소드이다.
        div2.innerHTML += `array1 : [${array1}]<br>`;
        div2.innerHTML += `array2 : [${array2}]<br><br>`;

        // array2 오름차순 정렬
        array2.sort(function(left, right){
            return left - right;
        });
        div2.innerHTML += `array2 : [${array2}]<br>`;

        // array2 내림차순 정렬
        array2.sort(function(left, right){
            return right - left;
        });
        div2.innerHTML += `array2 : [${array2}]<br>`;
    });
};