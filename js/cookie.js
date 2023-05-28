function setCookie(name, value, expiredays) {
    var date = new Date();
    date.setDate(date.getDate() + expiredays);
    document.cookie = escape(name) + "=" + escape(value) + "; expires=" + date.toUTCString();        
	//document.cookie = "login_cnt" + "=" + 3;
	
}

//이 함수는 쿠키를 가져오는 역할을 합니다. 인자로는 쿠키의 이름(name)이 필요합니다.
//함수 내부에서는 document.cookie를 통해 현재 페이지에 저장된 모든 쿠키를 가져옵니다.
//가져온 쿠키들은 ; 를 기준으로 나누어 배열(cookie_array)로 저장됩니다.
//그런 다음 각 쿠키의 이름과 값을 비교하여 요청한 이름(name)과 일치하는 쿠키의 값을 반환합니다.
//쿠키가 없으면 빈 값을 반환합니다.

// function getCookie(name) {	
//         var cookie = document.cookie;
//         console.log("쿠키를 요청합니다.");
//         if (cookie != "") {
//             var cookie_array = cookie.split("; ");
//             for (var index in cookie_array) {
//                 var cookie_name = cookie_array[index].split("=");
                
//                 if (cookie_name[0] == "id") {
//                     return cookie_name[1];
//                 }
//             }
//         }
//         return ;
// }

//10주차 도전과제 로그인, 로그아웃
function getCookie(name) {	
    var cookie = document.cookie;
    console.log("쿠키를 요청합니다.");
    if (cookie != "") {
        var cookie_array = cookie.split("; ");
        for (var index in cookie_array) {
            var cookie_name = cookie_array[index].split("=");
            
            if (cookie_name[0] == name) { // 요청한 이름(name)과 일치하는 쿠키의 값을 반환
                return cookie_name[1];
            }
        }
    }
    return ""; // 쿠키가 없으면 빈 값을 반환
}


function deleteCookie(cookieName){
    var expireDate = new Date();
    expireDate.setDate(expireDate.getDate() - 1);
    document.cookie = cookieName + "= " + "; expires=" + expireDate.toGMTString();
}