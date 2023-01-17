// alert('05_객체.js');

// window.onload = function() => {
// }

// 5. 생성자 함수

    // 동일한 메소드, 프로퍼티가 중복적으로 생성 -> Prototype에 담는다.
    // Prototype은 어떤 객체의 상위 객체의 역할을 한다.
    // Prototype을 가지는 객체들은 Prototype의 메소드를 자기 것 처럼 사용할 수 있다.
    
    function Student(name, java, oracle) {
        // 속성 정의
        this.name = name;
        this.java = java;
        this.oracle = oracle;

        // 메소드 정의
        // this.getSum = function () {
        //     return this.java + this.oracle;
        // };

        // this.getAvg = function () {
        //     return this.getSum() / 2;
        // };
    }

    // 프로토 타입 객체에 넣기
    Student.prototype.getSum = function() { // 함수를 가짐 - > 메소드
        return this.java + this.oracle;
    };

    Student.prototype.getAvg = function() { // 함수를 가짐 - > 메소드
        return this.getSum() / 2;
    }

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

    // 4. 객체 배열
    let btn4 = document.getElementById('btn4');

    btn4.addEventListener('click', () => {
        let div2 = document.getElementById('div2');

        // 배열을 사용하지 않았을 경우
        // let student1 = {name: '문인수', java: 100, oracle: 80};
        // let student2 = {name: '황수영', java: 70, oracle: 60};
        // let student3 = {name: '아롱이', java: 80, oracle: 80};
        let student4 = {name: '보리', java: 100, oracle: 80};

        // 배열을 사용하지 않으면 관리하기가 힘들다.
        // console.log(student1);
        // console.log(student2);
        // console.log(student3);
        // console.log(student4);

        // 배열 선언 및 초기화
        let students = [
            // 선언과 동시에 초기화
            {name: '문인수', java: 100, oracle: 80}, // 객체로 생성
            {name: '황수영', java: 70, oracle: 60}
        ];

        students.push({name: '아롱이', java: 80, oracle: 80}); // 새로운 요소를  뒤에 추가
        students.push(student4); // 바로 값을 넣어도 된다.

        // 배열에 담겨있는 모든 객체에 메소드를 추가
        for (let i = 0; i < students.length; i++) {
            students[i].getSum = function() {
                return this.java + this.oracle; // 속성에 접근
            };

            students[i].getAvg = function() {
                return this.getSum() / 2;
            };
        }

        console.log(students);

        // 모든 학생의 정보가 담긴 배열을 출력(이름, 총점, 평균)
        for (const obj of students) {
            div2.innerHTML += `이름 : ${obj.name}, 총점 : ${obj.getSum()}, 평균 : ${obj.getAvg()}<br>`;
        }

        // div2.innerHTML = '안녕하세요!';
    });

    // 5. 생성자 함수

    // 동일한 메소드, 프로퍼티가 중복적으로 생성 -> Prototype에 담는다.
    // Prototype은 어떤 객체의 상위 객체의 역할을 한다.
    // Prototype을 가지는 객체들은 Prototype의 메소드를 자기 것 처럼 사용할 수 있다.
    
    // function Student(name, java, oracle) {
    //     // 속성 정의
    //     this.name = name;
    //     this.java = java;
    //     this.oracle = oracle;

        // 메소드 정의
        // this.getSum = function () {
        //     return this.java + this.oracle;
        // };

        // this.getAvg = function () {
        //     return this.getSum() / 2;
        // };
    // }

    // 프로토 타입 객체에 넣기
    // Student.prototype.getSum = function() { // 함수를 가짐 - > 메소드
    //     return this.java + this.oracle;
    // };

    // Student.prototype.getAvg = function() { // 함수를 가짐 - > 메소드
    //     return this.getSum() / 2;
    // }
    
    // Prototype 확인을 위해 window.onload 위로 올림

    let btn5 = document.getElementById('btn5');

    btn5.addEventListener('click', () => {
        let div3 = document.getElementById('div3');
        let student = new Student('문인수', 100, 80);
        let students = [];

        students.push(student);
        students.push(new Student('황수영', 80, 80));
        students.push(new Student('아롱이', 100, 100));
        students.push(new Student('보리', 60, 60));

        console.log(student);
        
        // 객체가 어떤 생성자 함수로 생성되었는지 instanceof 연산자로 확인할 수 있다.
        console.log(student instanceof Student); // true
        console.log(student instanceof Array); // false
        
        console.log(students);

        // div3.innerHTML = '안녕하세요^^';

        // 모든 학생의 정보를 출력 (이름, 총점, 평균)
        for (const index in students) {
            console.log(index);
            div3.innerHTML +=
                `이름 : ${students[index].name}, 총점 : ${students[index].getSum()}, 평균 : ${students[index].getAvg()}<br>`;
        }
    });

    // 6. 캡슐화
    function IdolGroup(n, m) {
        let name = n; // 지역변수
        let members = m;

        // 함수 외부에서 함수 내부에 있는 지역변수에 접근하는 방법
        // 클로저를 이용하여 객체가 소멸될 때 까지 지역변수는 사라지지 않는다.
        this.getGroupName = function() {
            return name;
        }

        this.getMembers = function() {
            return members;
        }

        this.getMemberCount = function() {
            return members.length;
        }

        this.setGroupName = function(n) {
            name = n;
        }

        this.setMembers = function(m) {
            members = m;
        }

    }

    let btn6 = document.getElementById('btn6');

    btn6.addEventListener('click', function () {
        let div4 = document.getElementById('div4');
        let idol = new IdolGroup('NCT', ['도영', '마크', '태용']);
        
        idol.setGroupName('뉴진스');
        idol.setMembers(['민지', '혜린', '다니엘']);
        
        console.log(idol); // 지역변수가 보이지 않고 함수만 보인다.

        div4.innerHTML = 
            `그룹명 : ${idol.getGroupName()}, 멤버 : [${idol.getMembers()}], 멤버 수 : ${idol.getMemberCount()}`;

        // div4.innerHTML = '안녕하세요!';
    });

    // 7. Date 객체
    let btn7 = document.getElementById('btn7');

    btn7.addEventListener('click', () => {
        let div5 = document.getElementById('div5');

        let now = new Date();;
        let date1 = new Date(1000);
        let date2 = new Date('2023-01-17T11:47:30'); // 지정된 날짜, Date 객체 반환
        let date3 = new Date(2023, 7, 26, 11, 50, 30); // 월은 0부터 시작

        div5.innerHTML = 'Date 객체<br>';
        div5.innerHTML += `now : ${now}<br>`;
        div5.innerHTML += `now : ${date1}<br>`;
        div5.innerHTML += `now : ${date2}<br>`;
        div5.innerHTML += `now : ${date3}<br><br>`;

        // Date 객체의 메소드 호출
        div5.innerHTML += `now.getFullYear() : ${now.getFullYear()}<br>`;
        div5.innerHTML += `now.getMonth() : ${now.getMonth() + 1}<br>`; // 월은 0부터 시작
        div5.innerHTML += `now.getDate() : ${now.getDate()}<br>`;
        div5.innerHTML += `now.getDay() : ${now.getDay()}<br>`; // 일요일 : 0, ..., 토요알 : 6
        div5.innerHTML += `now.getHours() : ${now.getHours()}<br>`;
        div5.innerHTML += `now.getMinutes() : ${now.getMinutes()}<br>`;
        div5.innerHTML += `now.getSeconds() : ${now.getSeconds()}<br>`;
        div5.innerHTML += `now.getMilliseconds() : ${now.getMilliseconds()}<br>`;

        // 1970년 1월 1일 00시를 기준으로 현재 시간에 대한 밀리 세컨드 값을 반환한다.
        div5.innerHTML += `now.getTime() : ${now.getTime()}<br>`;
        // 표준시와 Date 객체에 저장된 시간과의 차이를 분 단위로 반환한다.
        div5.innerHTML += `now.getTimezoneOffset() : ${now.getTimezoneOffset() / 60}<br>`;
        div5.innerHTML += `now.toDateString() : ${now.toDateString()}<br>`;
        div5.innerHTML += `now.toTimeString() : ${now.toTimeString()}<br>`;
        div5.innerHTML += `now.toUTCString() : ${now.toUTCString()}<br>`;
        div5.innerHTML += `now.toISOString() : ${now.toISOString()}<br>`;
        // 매개값을 받을 수 있다.
        div5.innerHTML += `now.toLocaleString() : ${now.toLocaleString()}<br>`; // 지역에 맞게 반환
        div5.innerHTML += `now.toLocaleString() : ${now.toLocaleString('en-US')}<br>`;
        div5.innerHTML += `now.toLocaleString() : ${now.toLocaleString('zh-hk')}<br>`;
        div5.innerHTML += `now.toLocaleTimeString() : ${now.toLocaleTimeString()}<br>`;
    });
};