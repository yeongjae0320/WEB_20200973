//11주차 세션 내용 시작 + 12주차 수정 시작
//function session_set() {	//세션 저장
//	let id = document.querySelector("#floatingInput");
//	let password = document.querySelector("#floatingPassword");	//추가
//	if (sessionStorage) {
//		//sessionStorage.setItem("Session_Storage_test", id.value);
//		let en_text = encrypt_text(password.value);	//추가
//		sessionStorage.setItem("Session_Storage_test", en_text);	//추가
//	}
//	else {
//		alert("로컬 스토리지 지원X");
//	}
//}

function session_set(){ //세션 저장(객체)    
    let id = document.querySelector("#floatingInput");
    let password = document.querySelector("#floatingPassword");
    let random = new Date(); // 현재 시간을 사용하여 랜덤 타임스탬프
    
    const obj = { // 객체 선언
    	id : id.value,
    	otp : random
    }
    
    if (sessionStorage) {	//세션스토리지가 지원되는 경우
        const objString = JSON.stringify(obj); // 객체 -> JSON 문자열 변환
        let en_text = encrypt_text(objString); // 암호화
        sessionStorage.setItem("Session_Storage_object", objString);
        sessionStorage.setItem("Session_Storage_encrypted", en_text);
    } else {
        alert("세션 스토리지 지원 x");
    }   
}

function session_get() {	//세션 읽기
	if (sessionStorage) {
		return sessionStorage.getItem("Session_Storage_encrypted");
	} else {
		alert("세션 스토리지 지원X");
	}
}

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
		//alert("로그아웃 버튼 클릭 확인 : 세션 스토리지를 삭제합니다.");
	} else {
		alert("세션 스토리지 지원X");
	}
}

//12주차 회원가입용 세션 함수 추가 구현
function session_join_set() { //세션 저장(객체)    
    let f_name = document.querySelector("#firstName").value;
    let l_name = document.querySelector("#lastName").value;
    let b_day = document.querySelector("#birthdayDate").value;
    let gender = document.querySelector("#inlineRadioOptions");
    let email = document.querySelector("#emailAddress").value;
    let p_number = document.querySelector("#phoneNumber").value;
    let class_check = document.querySelector(".select form-control-lg");
    let random = new Date(); // 랜덤 타임스탬프
    
    const newSignUp = new SignUp(f_name, l_name, b_day, gender, email, p_number, class_check, random);
    console.log(newSignUp.fullName); // John Doe
    console.log(newSignUp.contactInfo); // johndoe@email.com 123-456-7890
    
    if (sessionStorage) {
        const objString = JSON.stringify(newSignUp); // 객체 -> JSON 문자열 변환
        let en_text = encrypt_text(objString); // 암호화
        sessionStorage.setItem("Session_Storage_object", objString);
        sessionStorage.setItem("Session_Storage_encryted", en_text);
    } else {
        alert("세션 스토리지 지원 x");
    }   
}

//12주차 응용 문제 풀기
// !!!!! 복호화 구현하기 !!!!! security 가져와서
function session_join_get() {
	let storedValue = sessionStorage.getItem("Session_Storage_object");
	sessionStorage.getItem("Session_Storage_encryted");
	
	console.log(storedValue);
}