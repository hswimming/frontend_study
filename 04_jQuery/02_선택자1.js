$(document).ready(() => {
    // console.log('02_선택자1');

    // 1. 태그 선택자
    $('h5').css('color', 'skyblue');
    $('h5,p').css('background-color', 'gray');

    // 2. 아이디 선택자
    // 1) 자바스크립트
    document.getElementById('id1').style.color = 'skyblue';

    // 2) 제이쿼리
    $('#id2').css('color', 'gray');

    // 3. 클래스 선택자
    // 1) 자바스크립트
    // let items = document.getElementsByClassName('item');

    // for(let i = 0; i < items.length; i++) {
    //     items[i].style.color = 'orange';
    //     items[i].style.backgroundColor = 'gray';
    // }

    // 2) 제이쿼리
    $('.item').css({color: 'skyblue', 'background-color': 'gray'}); // 여러 값을 가져오고 싶으면 객체를 매개값으로 준다.
});