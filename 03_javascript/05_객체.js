// alert('05_객체.js');

// window.onload = function() => {
// }

window.onload = () => {
    // 1. 객체 생성
    let btn1 = document.getElementById('btn1');

    // 이벤트 핸들러 등록
    btn1.addEventListener('click', () => {
        let div1 = document.getElementById('div1');
        let obj1 = {};
        let obj2 = new Object();
        let product = {
            // 프로퍼티명에 공백이나 특수문자가 들어가는 경우네는 따옴표로 감싸줘야 한다.

            // 'pName' : '아이폰 13 프로', // 키 값은 무조건 문자열
            // '0' : '배열 흉내' // 배열은 속성이 숫자 형태로 되어있는 오브젝트

            // 따옴표 생략 가능
            pName : '아이폰 13 프로',
            0 : '배열 흉내',
            price : 990000,
            brand : '삼성',
            brand : '애플', // 중복으로 선언하게 되면 마지막에 선언된 프로퍼티로 덮어쓴다.
            spec : ['OLED', 'IOS16', '8Inch', '화이트']
        };

        let user = {
            'user name': '황수영',
            // user-age: 28
            'user-age': 28
        }

        console.log(obj1, obj2);
        console.log(product);
        console.log(product[0]);

        // div1.innerHTML = '객체 생성 테스트';
        // div1.innerHTML = `product : ${product}<br><br>`;

        // 객체의 속성에 접근하는 방법
        div1.innerHTML = `product['속성명']으로 접근하는 방법<br>`;
        
        // div1.innerHTML += `product['0'] : ${product['0']}<br>`;
        // 프로퍼티명이 숫자인 경우에만 따옴표 생략 가능 (배열처럼 쓰는것도 가능)
        div1.innerHTML += `product['0'] : ${product[0]}<br>`;
        
        // div1.innerHTML += `product[pName] : ${product[pName]}<br>`; 에러 발생 (변수명으로 인식)
        div1.innerHTML += `product['pName'] : ${product['pName']}<br>`;
        div1.innerHTML += `product['price'] : ${product['price']}<br>`;
        div1.innerHTML += `product['brand'] : ${product['brand']}<br>`;
        
        // 대괄호를 통해 객체의 속성에 접근 (배열에서 재공하는 메소드는 사용 불가)
        div1.innerHTML += `product['spec'][1] : ${product['spec'][1]}<br>`; // 1번 인덱스에 접근
        div1.innerHTML += `product['spec'][3] : ${product['spec'][3]}<br><br>`;
        
        div1.innerHTML += `product.속성명으로 접근하는 방법<br>`;
        // div1.innerHTML = `product.0 : ${product.0}<br>`;
        // 숫자 형태로 되어있는 프로퍼티는 대괄호로만 접근해야 한다.
        div1.innerHTML += `product.pName : ${product.pName}<br>`;
        div1.innerHTML += `product.price : ${product.price}<br>`;
        div1.innerHTML += `product.brand : ${product.brand}<br>`;
        div1.innerHTML += `product.spec : ${product.spec}<br>`;
        div1.innerHTML += `product.spec[0] : ${product.spec[0]}<br>`;
        div1.innerHTML += `product.spec[2] : ${product.spec[2]}<br><br>`;


        div1.innerHTML += `속성명에 공백이나 특수문자가 있는 경우 대괄호를 이용해서 값에 접근해야 한다.<br>`;
        div1.innerHTML += `user['user name']: ${user['user name']}<br>`;
        div1.innerHTML += `user['user-age']: ${user['user-age']}<br>`;
    });

    // 2. 메소드
    let btn2 = document.getElementById('btn2');

    btn2.addEventListener('click', () => {
        let name = '아롱이';

        let dog = {
            name: '보리',
            kind: '미니핀',

            // eat: (food) => { // 제대로 접근 되지 않는다.

            eat: function(food) { // 프로퍼티의 값이 함수 -> 메소드

                // 객체 내부의 속성에 접근하기 위해서는 'this.속성명'으로 작성해야 한다.
                console.log(`${this.kind} 종류인 ${this.name}가 ${food}를 먹고 있네요!`);

                // console.log(food);
                // console.log(name); // 아롱이
                // console.log(this.name); // 보리 (객체의 속성에 접근)
            }
        };

        dog.eat('닭가슴살');

    });

    // 3. 객체의 속성 추가 및 삭제
    let btn3 = document.getElementById('btn3');

    btn3.addEventListener('click', () => {
        // 빈 객체 생성
        let student = {};

        // 객체에 속성 추가
        student.name = '황수영';
        // student.age = 28;
        student['age'] = 28;

        // 객체에 메소드 추가
        student.whoAreYou = function() { // 매개값 없음

            let str = '';

            str = this.name + ", " + this.age; // this 키워드로 객체의 속성에 접근

            return str;
        };

        console.log(student);
        console.log(student.whoAreYou());
        
        // 속성을 지우는 연산자, 지워지면 undefined 출력
        delete(student.age);
        delete(student['name']);
        
        console.log(student);
        console.log(student.whoAreYou());

    });
};