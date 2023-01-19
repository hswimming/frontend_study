$(document).ready(() => {
    // alert('선택자2');

    // 4. 자손, 후손 선택자
    // 1) 자손 선택자(부모>자손)
    $('div>h3').css('color', 'skyblue');
    $('div>ul>li').css('color', 'cornflowerblue');
    $('div>ul>li>h3').css('color', 'darkslateblue'); // 불릿 기호는 li 태그이기 때문에 색상이 변경되지 않는다.

    // 2) 후손 선택자(부모 후손)
    $('div h3').css('background-color', 'lavender');
    $('div .ch').css('background-color', 'thistle');

    // 5. 속성 선택자
    // $('#div1 input[class]').css('background-color', 'lavender');
    // $('#div1 input[type=text]').val('Change Value');
    // $('#div1 input[class~=test1]').val('테스트'); // ~= : 띄어쓰기로 구분되어 있는 값을 찾을 때
    // $('#div1 input[type^=ra]').prop('checked', true); // ^=ra : ra로 시작하는 속성 찾기
    // $('#div1 input[type$=box]').prop('checked', true); // prop() : 프로퍼티 값 변경 메소드
    // $('#div1 input[class*=st]').css('width', '100px').css('height', '100px').val('10000'); // *= : 앞이든 뒤든 속성의 값이 포함되면 선택

    // 제이쿼리에서도 메소드를 수행하고 나면 자기 자신을 리턴하기 때문에 여러개의 메소드를 호출할 수 있다.
    // 메소드 체이닝이 가능하다.

    // 6. 입력 양식 선택자
    // $(':text').css('background-color', 	'lavender');
    // $(':button').val('왕버튼').css({width: '150px', height: '150px'});
    // $(':checkbox').prop('checked', true).css({width: '50px', height: '50px'}); // 객체로 생성해서 넣어준다
    // $(':file').css('background-color', '#d8bfd8')
    // $(':image').hover(
    //     // 콜백 함수 2개
    //     function() {
    //         // 마우스가 요소 내부로 들어왔을 때 이벤트 처리
    //         console.log(this);
    //         console.log(this.src);
    //         console.log($(this));
    //         console.log($(this).attr('src', '../resources/image/flower2.PNG'));
    //         $(this).attr('src', );

    //         // 제이쿼리가 제공하는 메소드를 사용
    //     },
    //     function() {
    //         // 마우스가 요소 외부로 나갔을 때 이벤트 처리
    //         console.log(this);
    //         console.log(this.src);
    //         console.log($(this));
    //         console.log($(this).attr('src', '../resources/image/flower1.PNG'));
    //     }
    // )

    // 7. 입력 양식 상태 선택자
    // input 태그 중에 활성화된 요소를 선택
    $('#div3 input:enabled').css('background-color', 'lavender');

    // input 태그 중에 비활성화된 요소를 선택
    $('#div3 input:disabled').css('background-color', 'thistle');

    // input 태그 중에 체크된 요소를 선택
    $('#div3 input:checked').css({width: '20px', height: '20px'});

    // checkbox에 change 이벤트 핸들러 등록
    // $('#div3 input:checkbox') 또는 아래처럼 둘 다 작성 가능
    $('#div3 input[type=checkbox]').change(function () {
        console.log(this); // this -> 이벤트가 발생한 요소
        console.log($(this));

        let checkbox = $(this);

        // 속성 여부 (태그의 속성)
        console.log(checkbox.attr('checked'));
        // 자바스크립트 객체로 만들어졌을때 속성 값을 물어본다.
        console.log(checkbox.prop('checked'));

        if(checkbox.prop('checked')) {
            checkbox.css({width: '30px', height: '30px'});
        } else {
            checkbox.css({width: '20px', height: '20px'});
        }
    });

    // select에 change 이벤트 핸들러 등록
    $('#national').change(function() {
        // console.log(this);
        
        // select의 option 태그 중 선택된 요소를 선택
        let value = $('#national>option:selected').val();

        console.log(value);

        // id가 result인 요소의 값을 value로 변경
        $('#result1').val(value);
    });

    $('#hobby').change(function() {
        let value = $('#hobby>option:selected').val();

        console.log(value);

        $('#result2').val(value);

        // 값이 바뀌어야 동작한다. (change 이벤트 속성)
    });

    // 8. attr()와 prop()
    let ch1 = $('#ch1');
    let ch2 = $('#ch2');

    // attr()로 checked 값 읽어오기
    // 태그에 있는 속성만 가져온다.
    console.log(`ch1.attr('checked') : ${ch1.attr('checked')}`);
    console.log(`ch2.attr('checked') : ${ch2.attr('checked')}`);
    // $('#ch2').attr('checked', 'checked'); 개발자 도구에서 checked로 속성 바꾸기

    // prop() checked 값 읽어오기
    // 태그에는 없어도 자바스크립트 객체로 만들었을때 있는 속성 값을 설정하거나 읽어오는 것을 말한다.
    console.log(`ch1.prop('checked) : ${ch1.prop('checked')}`);
    console.log(`ch2.prop('checked) : ${ch2.prop('checked')}`);
});