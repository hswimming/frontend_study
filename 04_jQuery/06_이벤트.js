$(document).ready(() => {
    // alert('이벤트');

    // 1. 이벤트 연결
    // 1) on(), off()
    // $('#div1').on('mouseenter', (event) => {
    //     // console.log(event);
    //     console.log(event.type);

    //     $(event.target).css('background-color', 'lavender');
    // });

    // $('#div1').on('mouseleave', (event) => {
    //     console.log(event.type);

    //     $(event.target).css('background-color', 'mediumpurple');
    // });

    // $('#div1').on('mouseenter mouseleave', (event) => {
    //     console.log(event.type);

    //     if(event.type == 'mouseenter') {
    //         $(event.target).css('background-color', 'lavender');
    //     }else if(event.type == 'mouseleave') {
    //         $(event.target).css('background-color', 'mediumpurple');
    //     }
    // });

    // $('#div1').on('click', (event) => {
    //     console.log(event.type);

    //     $(event.target)
    //     .css('background-color', 'white')
    //     .off('mouseenter mouseleave click');
    // });

    $('#div1').on({
        mouseenter: (event) => $(event.target).css('background-color', 'lavender'),
        mouseleave: (event) => $(event.target).css('background-color', 'mediumpurple'),
        click: (event) => $(event.target)
                            .css('background-color', 'white')
                            .off('mouseenter mouseleave click')
    });

    // 2) one() 이벤트 핸들러 한번만 실행
    $('#div2').one('click', () => {
        alert('버튼 클릭!');
    });

    $('#div2').one('mouseenter mouseleave', (event) => {
            console.log(event.type);

            if(event.type == 'mouseenter') {
                $(event.target).css('background-color', 'lavender');
            }else if(event.type == 'mouseleave') {
                $(event.target).css('background-color', 'mediumpurple');
            }
    });

    // 2. 키보드 이벤트
    // 1) keydown, keypress, keyup

    // 키보드가 눌려질 때 발생
    $('#textarea1').keydown((event) => {
        console.log(`keydown > event.key : ${event.key}, event.keyCode : ${event.keyCode}`);
    });

    // 글자가 입력될 때 (한글, 펑션키, 기능키 사용 X)
    $('#textarea1').keypress((event) => {
        console.log(`keypress > event.key : ${event.key}, event.keyCode : ${event.keyCode}`);

    });

    // 키보드가 떼어질 때 발생
    $('#textarea1').keyup((event) => {
        console.log(`keyup > event.key : ${event.key}, event.keyCode : ${event.keyCode}`);
    });

    // 2) 동적으로 글자 수 세기
    $('#textarea2').on('keyup', (event) => {
        // console.log(event.key);

        let target = $(event.target);
        let currentLength = target.val().length;
        let maxlength = parseInt($('#maxLength').text());

        // console.log(target.val()); // 사용자로부터 입력 받음
        console.log(currentLength);
        console.log(maxlength);

        if(currentLength > maxlength) {
            target.val(target.val().substr(0, maxlength));
        } else {
            $('#counter').text(currentLength);
        }
    });

    // 3) 동적으로 아이디 조건 확인
    $('#userId').keyup((event) => {
        // let id = event.target.value; // 자바스크립트로 가져오기
        let id = $(event.target).val();
        let regExp = /^[a-z][a-z0-9]{3,11}$/

        // console.log(event.key);

        console.log(id);
        console.log(regExp.test(id));

        if(id === null || id === '') {
            $('#idCheck').text('');

        } else if(regExp.test(id)) {
            $('#idCheck')
            .text('사용 가능한 아이디')
            .css({color: 'royalblue', fontWeight: 'bold'});

        } else {
            $('#idCheck').text('사용 불가능한 아이디')
            .css({color: 'red', fontWeight: 'bold'});
        }
    });

    // 3. trigger() 메소드
    $('#div3').on('click', () => {
        let counter = $('#counter2');
        let currentCount = parseInt(counter.text());
        
        console.log(currentCount);
        
        counter.text(++currentCount);
    });

    $('#btn1').click(() => {
        $('#div3').trigger('click');
    });
});