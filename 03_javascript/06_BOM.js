// alert('BOM');

window.onload = function () {
    // 1. window 객체
    // 1) window.open()

    let btn1 = document.getElementById('btn1');

    btn1.addEventListener('click', () => {
        // window.open('URL', '창 이름', '특성');
        // window.open(); // 새 탭 오픈 (빈 페이지)
        // window.open('https://www.naver.com', 'naver');
        // 특성의 경우 브라우저마다 다르게 동작하기 때문에 정상적으로 동작하는지 꼭 확인해야 한다.
        window.open('https://www.naver.com', 'naver', 'width=500', 'height=500');
    });

    // 2. 타이머
    // 1) window.setTimeout()
    let btn2 = document.getElementById('btn2');

    btn2.addEventListener('click', () => {
        // alert('버튼 클릭!');
        let timerId = 0;
        let newwindow = window.open();

        newwindow.alert('3초 후에 이 페이지는 종료됩니다.'); // 새 창에서 alert 실행
        // newwindow.close(); // 사용자가 확인을 누를때까지 alert의 흐름은 멈춰있음, 확인 누르면 종료

        // 일정 시간 후에 콜백 함수를 한 번 실행
    //     window.setTimeout(() => {
    //         newwindow.close();
    //     }, 3000); // 3초 후

            timerId = window.setTimeout(() => newwindow.close(), 3000);

            // 타이머 ID를 clearTimeout()에 전달하면 해당 ID의 타이머를 취소할 수 있다.
            // window.clearTimeout(timerId);

            console.log(timerId);
    });

    // 2) window.setInterval()
    let timerId = 0; // 전역 변수
    let btnStart = document.getElementById('btnStart');
    let btnStop = document.getElementById('btnStop');

    btnStart.addEventListener('click', () => {
        let div1 = document.getElementById('div1');

        // 일정 시간마다 콜백 함수를 반복 실행
        timerId = window.setInterval(() => {
            let now = new Date();
            
            // div1.innerHTML = `${now.getHours()} : ${now.getMinutes()} : ${now.getSeconds()}`;
            // 특정 영역만 span 태그로 처리하여 스타일 다르게 적용
            div1.innerHTML = `${now.getHours()} : ${now.getMinutes()} : <span id='second'>${now.getSeconds()}</span>`;
        }, 1000);
    });

    btnStop.addEventListener('click', () => {
        window.clearInterval(timerId); // 타이머 취소
        div1.innerHTML = '타이머 종료!';
    });
};