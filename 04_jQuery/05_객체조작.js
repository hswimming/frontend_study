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
});