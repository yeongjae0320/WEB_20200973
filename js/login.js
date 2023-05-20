

function login(){
    let form = document.querySelector("#form_main");
    let id = document.querySelector("#floatingInput");
    let password = document.querySelector("#floatingPassword");
	let check = document.querySelector("#idSaveCheck");
    let id_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let pw_regex = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,}$/;

	
	let login_cnt = parseInt(getCookie("login_cnt")); // 기존 쿠키의 값을 가져옴
    if (isNaN(login_cnt)) { // 기존 쿠키의 값이 없으면 초기값 0으로 설정
        login_cnt = 0;
    }
    login_cnt += 1; // 로그인 횟수 증가
	setCookie("login_cnt", login_cnt, 1); // 새로운 쿠키 값을 설정
	
	
	if(check.checked == true) { // 아이디 체크 o
            alert("쿠키를 저장합니다.");
            setCookie("id", id.value, 1); // 1일 저장
            alert("쿠키 값 :" + id.value);
        } 
    else { // 아이디 체크 x
            setCookie("id", id.value, 0); //날짜를 0 - 쿠키 삭제
    }
	
    //if(id.value.length === 0 || password.value.length === 0){
    //    alert("아이디와 비밀번호를 모두 입력해주세요.");
    //}else{
	//	session_set(); // 세션 생성 (11주차 추가)
    //    form.submit();
    //}
	
	if (id.value.length === 0 || password.value.length === 0) {
        alert("아이디와 비밀번호를 모두 입력해주세요.");
    } else {
        if (login_cnt > 3) { // 로그인 실패 횟수가 3회 이상인 경우
            alert("로그인이 제한되었습니다. 관리자에게 문의하세요.");
        } else {
            session_set(); // 세션 생성 (11주차 추가)
            form.submit();
        }
    }

	
    if(!id_regex.test(id.value)) {
        alert("유효한 이메일 주소를 입력해주세요.");
        //id.focus();
        return false;
    }
    
    if(!pw_regex.test(password.value)) {
        alert("비밀번호는 8자리 이상의 영문 대소문자, 숫자, 특수문자를 조합하여 입력해주세요.");
        //password.focus();
        return false;
    }
    
    form.action = "../index_login.html";
    form.method = "get";
    form.submit();
	
	
}

// 실패 횟수 쿠키를 초기화하는 함수 (임시로 추가)
function resetLoginCount() {
    setCookie("login_cnt", 0, 1);
}


function closePopup() {
        if (document.getElementById('check_popup').value) {
            setCookie("id", "N", 1);
            console.log("쿠키를 설정합니다.");
            self.close();
        }
}


function setCookie(name, value, expiredays) {
        var date = new Date();
        date.setDate(date.getDate() + expiredays);
        document.cookie = escape(name) + "=" + escape(value) + "; expires=" + date.toUTCString();        
    }


function getCookie(name) {
        var cookie = document.cookie;
        console.log("쿠키를 요청합니다.");
        if (cookie != "") {
            var cookie_array = cookie.split("; ");
            for (var index in cookie_array) {
                var cookie_name = cookie_array[index].split("=");
                
                if (cookie_name[0] == "id") {
                    return cookie_name[1];
                }
            }
        }
        return ;
}


function logout(){
	
	let logout_cnt = parseInt(getCookie("logout_cnt")); // 기존 쿠키의 값을 가져옴
    if (isNaN(logout_cnt)) { // 기존 쿠키의 값이 없으면 초기값 0으로 설정
        logout_cnt = 0;
    }
    logout_cnt += 1; // 로그아웃 횟수 증가
    setCookie("logout_cnt", logout_cnt, 1); // 새로운 쿠키 값을 설정
	
	
	session_del();	//세션 삭제 (11주차)
    location.href='../index.html';
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

function deleteCookie(cookieName){
    var expireDate = new Date();
    expireDate.setDate(expireDate.getDate() - 1);
    document.cookie = cookieName + "= " + "; expires=" + expireDate.toGMTString();
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

//11주차 세션 내용 시작
function session_set() {	//세션 저장
	let id = document.querySelector("#floatingInput");
	let password = document.querySelector("#floatingPassword");	//추가
	if (sessionStorage) {
		//sessionStorage.setItem("Session_Storage_test", id.value);
		let en_text = encrypt_text(password.value);	//추가
		sessionStorage.setItem("Session_Storage_test", en_text);	//추가
	}
	else {
		alert("로컬 스토리지 지원X");
	}
}

function session_get() {	//세션 읽기
	if (sessionStorage) {
		return sessionStorage.getItem("Session_Storage_test");
	} else {
		alert("세션 스토리지 지원X");
	}
}

//왜 그러는거지???????????????????????????????????????????
function session_check() {	//세션 검사
	if (sessionStorage.getItem("Session_Storage_test")) {
		alert("이미 로그인 되었습니다.");
		location.href = 'index_login.html';	//로그인 페이지로 이동
	}
}

function session_del() {	//세션 삭제
	//Check if the sessionStorage object exists
	if (sessionStorage) {
		//Retrieve data
		sessionStorage.removeItem("Session_Storage_test");
		alert("로그아웃 버튼 클릭 확인 : 세션 스토리지를 삭제합니다.");
	} else {
		alert("세션 스토리지 지원X");
	}
}

//암,복호화 함수 원본을 추가한다. 암호 알고리즘: AES, 키, 평문이 입력됨
//참고: 키는 클라이언트, 서버 양방향 동일한 키를 사용한다.
function encodeByAES256(key, data){
    const cipher = CryptoJS.AES.encrypt(data, CryptoJS.enc.Utf8.parse(key), {
        iv: CryptoJS.enc.Utf8.parse(""),
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC
    });
    return cipher.toString();
}

function decodeByAES256(key, data){
    const cipher = CryptoJS.AES.decrypt(data, CryptoJS.enc.Utf8.parse(key), {
        iv: CryptoJS.enc.Utf8.parse(""),
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC
    });
    return cipher.toString(CryptoJS.enc.Utf8);
};

//패스워드 보안 처리 부분을 추가한다. 암호 알고리즘: 임시 키를 사용, 패딩 및 인코딩 처리
//참고: 블록 암호이다. (블록 크기의 배수로 분리)
function encrypt_text(password){
    const k = "key"; // 클라이언트 키
    const rk = k.padEnd(32, " "); // AES256은 key 길이가 32
    const b = password;
    const eb = this.encodeByAES256(rk, b);
    return eb;
    console.log(eb);
}

function decrypt_text(){
    const k = "key"; // 서버의 키
    const rk = k.padEnd(32, " "); // AES256은 key 길이가 32
    const eb = session_get();
    const b = this.decodeByAES256(rk, eb);
    console.log(b); 
}
