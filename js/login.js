function login(){
    let form = document.querySelector("#form_main");
    let id = document.querySelector("#floatingInput");
    let password = document.querySelector("#floatingPassword");
	let check = document.querySelector("#idSaveCheck");
    let id_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let pw_regex = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,}$/;
	
	if(check.checked == true) { // 아이디 체크 o
            alert("쿠키를 저장합니다.");
            setCookie("id", id.value, 1); // 1일 저장
            alert("쿠키 값 :" + id.value);
        } 
    else { // 아이디 체크 x
            setCookie("id", id.value, 0); //날짜를 0 - 쿠키 삭제
    }
	
	if (id.value.length === 0 || password.value.length === 0) {
		login_fail();
        alert("아이디와 비밀번호를 모두 입력해주세요.");
    } else {
		
            session_set(); // 세션 생성 (11주차 추가)
            form.submit();
    }
	
    if(!id_regex.test(id.value)) {
		login_fail();
        alert("유효한 이메일 주소를 입력해주세요.");
        //id.focus();
        return false;
    }
    
    if(!pw_regex.test(password.value)) {
		login_fail();
        alert("비밀번호는 8자리 이상의 영문 대소문자, 숫자, 특수문자를 조합하여 입력해주세요.");
        //password.focus();
        return false;
    }
    
	login_count();
	
    form.action = "../index_login.html";
    form.method = "get";
    form.submit();

}

//10주차 응용 문제
//버튼을 클릭할 때마다 횟수(정수)를 증가
//기존 쿠키의 카운트 값을 얻는다.
//쿠키의 값을 +1 업데이트 한다.

function login_count() {
	// 쿠키에서 login_cnt 값을 가져옴
  	var loginCnt = getCookie("login_cnt");
  
  	if (loginCnt === "") {
    // 쿠키가 존재하지 않으면 초기값인 1로 설정
    	loginCnt = 1;
  	} else {
    // 쿠키가 존재하면 현재 값에 1을 더함
    	loginCnt = parseInt(loginCnt) + 1;
  }
  
  // login_cnt 쿠키에 새로운 값을 설정
  setCookie("login_cnt", loginCnt);
}

function logout_count() {
	// 쿠키에서 login_cnt 값을 가져옴
  	var logoutCnt = getCookie("logout_cnt");
  
  	if (logoutCnt === "") {
    // 쿠키가 존재하지 않으면 초기값인 1로 설정
    	logoutCnt = 1;
  	} else {
    // 쿠키가 존재하면 현재 값에 1을 더함
    	logoutCnt = parseInt(logoutCnt) + 1;
  }
  
  // login_cnt 쿠키에 새로운 값을 설정
  setCookie("logout_cnt", logoutCnt);
}

function login_fail() {
	// 쿠키에서 login_cnt 값을 가져옴
  	var loginFailCnt = getCookie("login_fail");
  
  	if (loginFailCnt === "") {
    // 쿠키가 존재하지 않으면 초기값인 1로 설정
    	loginFailCnt = 1;
  	} else {
    // 쿠키가 존재하면 현재 값에 1을 더함
    	loginFailCnt = parseInt(loginFailCnt) + 1;
		if (loginFailCnt >= 3) {
			alert("로그인 제한 횟수가 3번 이상입니다.");
		}
  }
	
  
  // login_cnt 쿠키에 새로운 값을 설정
  setCookie("login_fail", loginFailCnt);
}

function closePopup() {
        if (document.getElementById('check_popup').value) {
            setCookie("id", "N", 1);
            console.log("쿠키를 설정합니다.");
            self.close();
        }
}

function logout(){
	session_del();	//세션 삭제 (11주차)
    location.href='../index.html';
	logout_count();
}

function get_id(){
	if (true) {
		decrypt_text();
	}
	else {
		var getParameters = function(paramName){ // 변수 = 함수(이름)
   	 	var returnValue; // 리턴값을 위한 변수 선언
    	var url = location.href; // 현재 접속 중인 주소 정보 저장
    	var parameters = (url.slice(url.indexOf('?') + 1, url.length)).split('&'); // ?기준 slice 한 후 split 으로 나눔
        for(var i = 0; i < parameters.length; i++) { 
		    var varName = parameters[i].split('=')[0];
            
            if (varName.toUpperCase() == paramName.toUpperCase()) {
                returnValue = parameters[i].split('=')[1];
                return decodeURIComponent(returnValue);
            // 나누어진 값의 비교를 통해 paramName 으로 요청된 데이터의 값만 return
		    }
	    } // 2중 for문 끝
	}; // 함수 끝
	
	alert(getParameters('id') + '님 방갑습니다!'); // 메시지 창 출력
	}
}

function init(){ // 로그인 폼에 쿠키에서 가져온 아이디 입력
    let id = document.querySelector("#floatingInput");
    let check = document.querySelector("#idSaveCheck");
    let get_id = getCookie("id");
    
    if(get_id) { 
    id.value = get_id; 
    check.checked = true; 
    }
	session_check();	//세션 유무 검사 (11주차)
}

function addJavascript(jsname) {	//자바스크립트 외부 연동
	var th = document.getElementsByTagName('head')[0];
	var s = document.createElement('script');
	s.setAttribute('type','text/javascript');
	s.setAttribute('src',jsname);
	th.appendChild(s);

}
addJavascript('/js/security.js'); // 암복호화 함수
addJavascript('/js/session.js'); // 세션 함수
addJavascript('/js/cookie.js'); // 쿠키 함수
