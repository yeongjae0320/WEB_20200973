//11주차 도전과제 및 응용문제

var logoutUser = false;	//로그아웃 상태 나타내기
var timeoutHand = null;	//함수로 생성된 타이머의 핸들을 저장하는 변수, 초기값은 null로 설정
var logoutTimeInterval = 0.5 * 60 * 1000;	//일단 실험용으로 30초로 결정

function timeReset() { // 시간 리셋
	if (logoutUser) {
		;	//아무 동작도 수행하지 않을 것이다.
	}
	else {
		ResetLogOutTimer();
	}
}

function SetTime() { // 설정시간
	logoutUser = true;
	//alert(" 세션의 지속 시간은 30초이고 만료되면 자동으로 로그아웃 됩니다.");
	session_del();
	window.location.href = "index.html";
}

function ResetLogOutTimer() { // 시간 타이머 리셋
	clearTimeout(timeoutHand);	//새로운 타이머 설정
	timeoutHand = setTimeout('SetTime();', logoutTimeInterval);	//이 시간 이후에 호출
}

//1. 클릭을 할 시 시간이 초기화된다.
// document.body.onclick = timeReset();
// timeoutHand = setTimeout('SetTime();', logoutTimeInterval);	//이 시간 이후에 호출되는 타이머 설정

// function session_del() {	//세션 삭제
// 	//Check if the sessionStorage object exists
// 	if (sessionStorage) {
// 		//Retrieve data
// 		sessionStorage.removeItem("Session_Storage_test");
// 		//alert("세션 만료 확인! : 세션 스토리지를 삭제합니다.");
// 	} else {
// 		alert("세션 스토리지 지원X");
// 	}
// }

//2. 마우스를 움직일 시 시간이 초기화된다.
document.body.onmousemove = timeReset; // 마우스 이동 감지
ResetLogOutTimer(); // 초기화

function session_del() {
  // 세션 삭제
  if (sessionStorage) {
    sessionStorage.removeItem("Session_Storage_test");
    // alert("세션 만료 확인! : 세션 스토리지를 삭제합니다.");
  } else {
    alert("세션 스토리지 지원X");
  }
}
