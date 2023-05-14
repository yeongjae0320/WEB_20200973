function login(){
    let form = document.querySelector("#form_main");
    let id = document.querySelector("#floatingInput");
    let password = document.querySelector("#floatingPassword");
	let check = document.querySelector("#idSaveCheck");
    let id_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let pw_regex = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,}$/;

	
	//let login_cnt = parseInt(getCookie("login_cnt")); // 기존 쿠키의 값을 가져옴
    //if (isNaN(login_cnt)) { // 기존 쿠키의 값이 없으면 초기값 0으로 설정
    //    login_cnt = 0;
    //}
    //login_cnt += 1; // 로그인 횟수 증가
    //setCookie("login_cnt", login_cnt, 1); // 새로운 쿠키 값을 설정
	
	
	
	
	if(check.checked == true) { // 아이디 체크 o
            alert("쿠키를 저장합니다.");
            setCookie("id", id.value, 1); // 1일 저장
            alert("쿠키 값 :" + id.value);
        } 
    else { // 아이디 체크 x
            setCookie("id", id.value, 0); //날짜를 0 - 쿠키 삭제
    }
	
    if(id.value.length === 0 || password.value.length === 0){
        alert("아이디와 비밀번호를 모두 입력해주세요.");
    }else{
        form.submit();
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
            for ( var index in cookie_array) {
                var cookie_name = cookie_array[index].split("=");
                
                if (cookie_name[0] == "id") {
                    return cookie_name[1];
                }
            }
        }
        return ;
}


function logout(){
	
	//let logout_cnt = parseInt(getCookie("logout_cnt")); // 기존 쿠키의 값을 가져옴
   // if (isNaN(logout_cnt)) { // 기존 쿠키의 값이 없으면 초기값 0으로 설정
   //     logout_cnt = 0;
   // }
    //logout_cnt += 1; // 로그아웃 횟수 증가
    //setCookie("logout_cnt", logout_cnt, 1); // 새로운 쿠키 값을 설정
	
	
	
	
    location.href='../index.html';
}

function get_id(){
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
}