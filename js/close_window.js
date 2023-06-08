var close_time;	//시간 정보
var close_time2 = 10;	//10초 설정

clearTimeout(close_time);	//재호출 정지
close_time = setTimeout("close_window()", 10000);	//1/1000초 지정, 바로 시작
show_time();	//실시간 시간 보여주기

function show_time() {
	let divClock = document.getElementById("Time");
	divClock.innerText = "남은 시간은 " + close_time2 + "초 입니다."; // 수정된 코드, 10초 삽입 시작
	close_time2--;	//1초씩 감소
	if (close_time2 == 5 - 1) {
		//사실상 html에서는 10초 부터 카운트다운이 시작되지만,
		//켜지고 1초 후 10초 카운트가 진행되는듯하다.
		//그래서 5초일때 글씨를 빨갛게 바꾸기 위해 5 - 1을 해주었다.
		divClock.style.color = "red";
		divClock.style.fontSize = "50px"; // 폰트 크기 조절
	}
	setTimeout(show_time, 1000);	//1초마다 갱신
}

function close_window() {	//함수 정의
	window.close();	//윈도우 닫기
}

//window.onload = showWindow;