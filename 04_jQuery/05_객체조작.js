$(document).ready(function() {
    // 1. Content 실행
    // 1) html() 메소드
    $('#content2').html($('#content1').html()); // 태그 형태 인식
    $('#content1>a').attr('href', 'https://www.naver.com');
    $('#content2').find('a').prop('href', 'https://www.naver.com');

    $('.content').html(function(index, content) { // index에 담아서 콜백 함수 실행 (개수만큼)
        console.log(index, content);

        return `<h1>인덱스 : ${index}, 내용 : ${content}</h1>`
    });

    // $('.content').html('ㅋㅋㅋㅋㅋㅋㅋㅋ');

    // 2) text() 메소드
    $('#content4').text($('#content3').text());
    // $('#content4').text('<h3>테스트</h3>'); // 태그도 텍스트로 인식

    $('.content2').text(function(index, content) {
        console.log(index, content);

        return `<h1>인덱스 : ${index}, 내용 : ${content}</h1>`
    });

    // $('.content2').text('zzzzzzzz');

    // 2. 요소 추가
    // 1) 요소 생성
    // * 문자열로 요소를 생성하는 방법

    // $('#div1').html('<h4>안녕하세요~!</h4>');

    let h4 = '<h4>문자열로 요소를 생성</h4>';

    // $('#div1').html(h4);
    document.getElementById('div1').innerHTML = h4; // innerHTML 에 요소를 직접 넣는 방법

    // * 자바스크립트에서 요소를 생성하는 방법
    let p = document.createElement('p');
    let textNode = document.createTextNode('자바스크립트에서 요소를 생성');

    p.appendChild(textNode);

    // $('#div1').append(p);
    document.getElementById('div1').appendChild(p);

    // * 제이쿼리에서 요소를 생성하는 방법
    let p2 = $('<p>').text('제이쿼리로 요소를 생성 1');

    console.log(p2);

    // 제이쿼리 객체를 넣으려고 하면 타입이 맞지 않기 때문에 에러 발생
    // document.getElementById('div1').appendChild(p2); // 요소 객체

    $('#div1').append(p2);

    // 2) 요소 추가 1
    // $(A).append(B) : A 요소의 자식 요소로 B 요소를 뒷부분에 추가한다.
    $('#add1').append('<span>B</span>');
    
    // $(A).prepend(B)
    $('#add2').prepend('<span>B</span>');
    
    // $(A).after(B)
    $('#add3').after('<span>B</span>');
    
    // $(A).after(B)
    $('#add4').before('<span>B</span>');

    // 3) 요소 추가 2
    // $(A).appendTo(B)
    $('<span>B</span>').appendTo('#add5');
    
    // $(A).prependTo(B)
    // $('<span>B</span>').prependTo('#add6'); // 선택자
    $('<span>B</span>').prependTo($('#add6')); // 제이쿼리 객체를 넘겨줘도 된다.
    
    // $(A).insertAfter(B)
    $('<span>B</span>').insertAfter('#add7');
    
    // $(A).insertBefore(B)
    $('<span>B</span>').insertBefore('#add8');

    // 3. 요소 복제
    $('#item1').hover(
        // function(event) { // 첫번째 콜백함수
        //     console.log(event.type);
        //     console.log(event.target);
        //     console.log($(event.target)); // 제이쿼리에서 제공하는 메소드를 사용하기 위해 감싸준다.
        //     $(event.target).addClass('bg-pink');
        // },
        // function(event) { // 두번째 콜백함수
        //     console.log(event.type);
        //     console.log(event.target);
        //     console.log($(event.target));
        //     $(event.target).removeClass('bg-pink');
        // }
        (event) => {
            $(event.target).toggleClass('bg-pink');
            // $('#item1').toggleClass('bg-pink'); // 아이디로 검색할 경우 원본에만 적용된다.
        }
    );

    // 버튼 클릭 시 요소를 복제
    $('#btn1').click(function() {
        let item = $('#item1').clone(true);

        console.log(item); // 선택자로 선택한 요소를 복제해서 제이쿼리 객체로 리턴해준다.

        $('#clone-result').append(item);
    });

    // 4. 요소 제거
    $('#item2').hover(
        (event) => $(event.target).toggleClass('bg-pink') // 한 줄 작성 시 괄호 생략
    );

    // 1) remove 테스트
    $('#btn_remove').click(() => {
        let item = $('#item2').remove();

        console.log(item);

        $('#remove-result').append(item); // 제거된 요소를 하위 요소로 추가 (이벤트는 remove로 제거됨)
    });

    // 2) detach() 테스트
    $('#btn_detach').click(() => {
        let item = $('#item2').detach();

        console.log(item);

        $('#remove-result').append(item); // 이벤트가 살아있다.
    });

    // 3) empty() 테스트
    $('#btn_empty').click(() => {
        $('#remove-test').empty();
    });

    // 5. 배열 관리
    let array = [
        {name: '네이버', link: 'https://www.naver.com'},
        {name: '구글', link: 'https://www.google.com'},
        {name: '다음', link: 'https://www.daum.net'}
    ];

    console.log(array);
    
    // $.each(array, function(index, element){
    //     console.log(index, element);

    //     $('#each-test').append(`<h4>index : ${index}, name : ${element.name}, link : ${element.link}</h4>`);
    // });

    array.forEach((element, index, origin) => {
        console.log(index, element,origin);

        $('#each-test').append(`<h4>index : ${index}, name : ${element.name}, link : ${element.link}</h4>`);
    });

    $('#each-test>h4').each((index, element) => {
        console.log(index, element);

        $(element).addClass('bg-pink'); // 위 element가 요소객체이기 때문에 제이쿼리 객체로 감싸준다.
    });
});