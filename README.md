# WEB_20200973 자바웹프로그래밍(1) 4-6 김영재
웹프로그래밍(1) 소스코드

## 9주차 문제 및 추가구현

-1. login.js 에서 login() 함수 안에 코드를 추가 구현하였다. 
9주차 응용 문제는 이메일 형식 정규 표현식과, 
패스워드 형식 체크를 사용하여 test() 로 값을 검사하는 기능을 추가하는 것이었다. 
정규식 패턴이 일치하지 않는 경우를 확인하는데, 만약 일치하지 않는다면, 
입력 필드 주위에 빨간색 테두리를 추가하여 사용자에게 잘못된 입력을 알리고, 
메시지를 표시하는 코드로 수정하여 작성하였다. 

## 10주차 문제 및 추가구현

-1. 10주차 응용 문제는 로그인, 로그아웃 횟수를 쿠키를 만들어 저장하는 것이다. 
login.js 에서 이를 추가했는데, 로그인할 때 호출되는 함수를 사용하여 
함수 내부에서 먼저 login_cnt 값을 쿠키에서 가져온다.
만약 해당 쿠키가 존재하지 않는다면 초기값인 1을 loginCnt 변수에 설정하고, 
그렇지 않은 경우, 현재 값에 1을 더한 후 loginCnt 변수에 할당한다. 
마지막으로, login_cnt 라는 이름의 쿠키에 새로운 값을 설정하고, 
이렇게 함으로써 로그인 횟수가 쿠키에 저장되고 추적되는 코드를 구현하였다. 
마찬가지로, 로그아웃도 이와 같은 과정을 따르게 된다.

-2. 로그인이 성공하면 쿠키의 값을 1씩 증가시킬 수 있게 
login() 함수 내에 login_count(); 을 작성하여 호출하게 했다. 
또, 로그아웃하면 쿠키의 값을 1씩 증가시킬 수 있게 logout() 함수 내에 
logout_count(); 을 작성하여 호출하게 했다.

-3. 팝업창을 카운트다운하여 닫는 코드는 close_window.js 에 구현되어 있었다. 
팝업창 카운트가 5초 이하가 되면, 
글자 색이 붉게 변하고 크기가 커지는 것으로 추가 수정하였다. 
또, pop_up.js 에서 팝업창의 크기와 위치가 구현되어 있는데, 
이 width, height, top, left의 값을 수정하여 크기가 작았던 점을 개선하였다.

-4. index.html 에서 중앙에 검색어 입력 검색 버튼을 누르면 쿠키를 만들어 버튼을 
누를 때 마다 횟수가 증가하는 코드를 구현하였다. 
이 코드를 실행시키기 위해 index.html 에서 검색 버튼 button 의 속성 
onclick="search_count();" 을 넣어주었고, 
search.js 에서 "검색어가 비었습니다. 입력해주세요" 경고창 아래에 
location_href="index.html"; 을 구현해주어 
페이지를 새로고침하여 쿠키의 값을 갱신시키게 하였다. 
검색 버튼을 10번 누르면 "검색 버튼을 너무 많이 누르셨어요! 
그만 눌러주세요! T.T" 이라는 메시지를 띄우는 코드를 추가하였다.

## 11주차 문제 및 추가구현
 
-1. 11주차 응용문제는 로그인 시간을 유지하고, 
로그인 실패 횟수가 N번인 경우 로그인을 제한하는 문제이다. 
문제는 로그인 유지 시간을 5분으로 유지하는 거였지만, 실제로 코드가 정상적으로 
돌아가는지 확인하기 위해 조건을 변경하여 제한 시간을 30초로 설정하였다. 
코드는 weeks11.js 에 구현되어 있다. 
시간을 리셋하는 함수와 시간을 설정하는 함수, 시간 타이머를 리셋하는 함수를 
만들어서 세션의 지속 시간은 30초이고 만료되면 자동으로 로그아웃 코드를 구현한 것이다.

-2. 로그인 시간을 유지하는 코드에 두 가지 동적인 코드를 더 구현해 보았는데, 
하나는 같이 실행시키지 않을 것이기에 주석 처리를 하였다. 
그 내용은 마우스 클릭을 하면 시간이 초기화되는 것을 구현한 코드이고, 
다른 하나는 마우스를 움직일 시 시간이 초기화되는 코드이다. 
지금의 실행되는 '마우스를 움직일 시 시간이 초기화되는 코드'에 대해 설명해보자면 
마우스의 이동을 감지하고, 초기화하는 함수를 호출하는 것이다. 
세션을 삭제할때 removeItem() 을 사용해 
"Session_Storage_encrypted" 을 제거하는 것으로 구현하였다.

## 12주차 문제 및 추가구현

-1. 12주차 응용 문제인 콘솔에 객체 내용을 출력하는 코드를 구현하였다. 
index_join.html 에서 body 태그에 문서 로드 시 session_join_get() 함수를 
호출하게 했고, session.js 에서 session_join_get() 함수를 만들어 
"Session_Storage_object" 를 get하여 새로운 변수에 저장하고 
콘솔창에 그 할당된 변수를 출력하게 했다.

## 13주차 문제 및 추가구현

-1. 소개 페이지에서 외부 유튜브 미디어를 삽입할 때 강의안 설명대로 
width=800, height=600 을 주었을 시, 유튜브 썸네일 규격 1280 * 720이 아니기 때문에 
확대되어 보여 잘림 현상이 있었다. 그래서 이 문제를 해결하기 위해 실제 16:9 규격을 맞춰 
width=800, height=450 으로 수정하였다.
또, 강의안대로 구현을 하면 영상 구역이 왼쪽 정렬되어버리는 문제가 발생하였다. 
이를 깔끔하게 보이게 하기 위해
div 태그와 text-align:center; 속성을 추가하여 가운데 정렬로 만들었다.

-2. 소개 페이지에 위치시킨 성결대학교 중심의 지도에서, 기본 코드에 더하여
마우스 클릭 시 마커 표시 기능 및 위도와 경도가 표시되는 코드를 추가 구현하였다.

-3. 개인 사진을 내 사진으로 수정하는 첫 번째 응용 문제를 해결하였고, 
두 번째 응용 문제인 검색창의 입력한
키워드로 카카오 맵 페이지 열기 - 키워드 검색 및 목록 출력 화면을 
새로운 html 파일을 만들어 구현하였다. 이 지도는 
기본 index.html 화면에 버튼으로 구현하여 다음 창으로 넘어가는 단계가 좋겠다 생각하여
상단 로그인하기, 회원가입 버튼 오른쪽에 지도 검색 버튼을 새로 만들었고, 
지도 검색 버튼을 클릭하면 지도 화면이 나오게 했다. 
로그인이 성공하고 열리는 index_login.html 에도 로그아웃 버튼 옆에 지도 검색 버튼을 
만들었다. map_keyword.html 에서 카카오 맵 페이지 소스대로 height 값을 설정하면 
지도는 높이가 사이트 반 도 안채워져 나온다. 
그렇기에 style 부분에서 .map_wrap 부분의 height 를 적당하게 값을 늘려 
화면에 꽉 차게 해주었다. height:100vh; 으로 값을 바꾸었다.

-4. section 의 배경 색깔을 #eee 에서 #ffcc00 으로 바꾸어 
노랑색 계열의 배경화면으로 바꿔주었다. 
그리고, 프로필의 좌측에 기존 강의안대로 만들어진 mdbootstrap 칸 아래에 
새로운 칸을 추가해서 내가 운영했던 블로그의 링크를 걸어두었다. 
밑줄이 있는 것이 보기 좋지 않아 text-decoration:none; 을 넣어주어  
a 태그를 사용함으로써 생기는 밑줄을 제거해주었다. 마찬가지로 새로운 칸을 추가하여 
위와 같은 내용으로 내가 운영했던 인스타그램 링크를 추가해주었다.

-5. index.html 파일에서 구현했던 하단메뉴 소개페이지를 
index_login.html 파일에도 코드를 가져와 사용하였다.

## 그동안 수정되어왔던 사항들 (홈페이지 제작 여행)

 사이트 제작에 앞서 화면에 기본적인 여러 내용들을 구현했다. 
첫 번째로, 상단 좌측과 하단 우측에 문자 내용을 입력하였고 
화면 중앙에 구글 이미지를 넣었다. 
그리고 중앙 구글 이미지 아래에 검색창 문자열과 박스를 추가했다.

 기존 head 태그 사이에 메타데이터, 페이지 세부 정보를 표현해주었고 
구글 이미지를 클릭하면 현재 웹 메인 페이지에 접속하게 
a 태그의 href 속성을 이용하여 수정해주었다. 
그리고 중앙 검색창 문자열과 박스 아래에 표를 삽입했다. 

 부트스트랩 사용을 위해 html 코드 head 태그 부분에 
link 태그의 href 속성, script 태그의 src 속성 
등을 추가하였다. 또, 부트스트랩에서 제공하는 
네비게이션 바 링크 코드를 이용하여 기존 index.html 에 추가했다. 
웹 사이트 하단 footer 도 마찬가지로 부트 스트랩을 활용하여 스타일과 아이콘을 가져왔다. 
현재 검색창 버튼을 클릭하면 메시지 창이 생기는 것을 원래 index.html 에서 구현했는데, 
html 에서가 아닌 search.js 파일을 새로 만들어 자바스크립트 코드로 새로 추가했다. 
문서의 특정 id, 즉, 검색 버튼의 id 인 search_btn 을 가져오고 
마우스 이벤트 '클릭' 이벤트를 등록하여 함수를 실행시키도록 했다.

 메인 페이지 화면의 표의 색을 수정해주었다. 
부트스트랩 테이블 디자인 페이지에서 코드를 참고하여 테이블의 색을 수정했다.

 날짜 데이터를 출력하는 팝업창을 만들었다. 새 pop_up 폴더를 만들고 
pop_up.html 파일을 만들었다. pop_up.js 파일에 가로 400, 세로 300, 
위 여백 10, 왼쪽 여백 10 크기의 팝업창 html 페이지를 open하게 구현했다. 
메인 페이지에 접속하면 팝업창이 띄워지게 하기 위해 기존 index.html 의 
body 태그 onload 속성 값을 pop_up(); 으로 주어 호출하게 했다. 
팝업창에 날짜를 출력하게 하기 위해 1초 마다 갱신하여 현재 시간을 알려주는 코드를 
showclock() 함수를 새로 만들어 추가했다. pop_up.html 의 
body 태그 onload 속성 값을 showclock(); 으로 주어 함수를 호출하게 했고, 
시간 id 값을 이용했기 때문에 동일한 id 값을 html 파일에도 주었다. 
팝업창 테스트 안에 아이콘과 글씨를 부트스트랩을 연동하여 나타냈고, 
메인 페이지의 구글 이미지에 마우스를 올리면 이미지가 바뀌는 것으로 수정했다. 그리고, 
검색창이 빈 경우 검색이 되지 않도록 검사하는 코드를 추가하여 
웹 브라우저 검색 창의 동작을 확인하였다.

 팝업창을 일정 시간 후 자동으로 닫게 구현해 주었다. 
팝업창을 닫게 동작하기 위해 close_window.js 파일을 작성하여 
카운트다운을 하여 창을 자동 닫게 하였다. 
그리고 홈페이지에서 검색창에 입력한 문자열을 배열에 저장하는 코드를 구현했다. 
이 코드는 기존에 있던 search.js 파일을 수정하여 추가했다.

 기존 메인 화면에 전체 메뉴 네비게이션 바 끝에 로그인하기 버튼을 추가했고, 
login 폴더를 만들어 login.html 파일에 로그인 페이지 화면을 구성하였다. 
이 login.html 파일은 기존 index.html 코드에서 body 태그 부분을 
부트스트랩 샘플 로그인 화면으로 바꿔주었고, 
login.js 파일을 새로 만들었다. 버튼을 클릭하면 form을 submit할 수 있게 
자바스크립트 코드를 구현했고, 이를 호출하기 위해 로그인하기 버튼에 
onclick 속성을 추가하여 login() 함수를 호출하도록 했다. 
로그인하고 나서의 페이지는 기존 처음 페이지와는 달라야 하기 때문에 
로그인 후 페이지를 html 파일을 새로 만들어 로그인하기 버튼을 로그아웃으로 바꿔주고 
oclick 속성에서 logout() 함수를 호출하도록 바꿨다. 
login.js 에 logout() 함수를 추가 구현했고, 
이메일 주소 입력, 패스워드 입력 input 태그 안에 name="id" 로 설정했다. 
form의 전송된 정보를 가져오는 get_id() 함수를 새로 만들었다. 
이는 현재 접속 중인 주소 정보에서 파라미터 분리 저장을 통해 id를 가져와 
"@@@님 반갑습니다!" 라는 메시지 창을 출력하도록 구현했다. 
이 함수를 호출하기 위해 index_login.html, 
즉, 로그인 후 화면 body 태그에 get_id() 함수를 onload했다.

 popup 폴더를 지우고 pop_up.html 파일을 index.html 와 같은 경로로 위치시켰다. 
그리고, 자바 스크립트 연동 경로를 수정해주었다. 
10주차는 쿠키를 만들고 팝업창을 수정하였다. 
팝업창 화면에 남은 시간을 알려주는 위치 아래에 
체크박스와 하루에 한 번만 열기 라는 문구를 추가하였다. 
기존에 pop_up.js 파일에서 pop_up() 함수는 쿠키를 가져와서 
쿠키에 값이 N이 없는 경우 팝업창을 열게 수정하였다. 
쿠키를 가져오니까 쿠키를 설정하는 함수와 쿠키를 가져오는 함수를 추가 구현했다. 
그것은 setCookie() 함수와 getCookie() 함수이다. 
쿠키에 값을 설정하고 얻도록 코드를 구현했고, 
팝업창 체크 박스를 클릭 하면 그 팝업창을 닫는 기능을 함수를 따로 추가하여 구현했다. 
setCookie() 함수에서 SameSite 속성을 사용하여 
보안을 개선하였다. 이번에는, login 폴더를 지우고 그 안에 있던 login.html 파일을 
index.html 와 같은 경로로 위치시켰다. 그리고, 자바 스크립트 연동 경로를 수정해주었고, 
기존 아이디 기억 체크 박스의 id 값을 추가했다. 
체크를 하면 이메일이 저장되는 기능을 추가 구현했고, 
쿠키를 삭제하는 deleteCookie() 함수를 추가했다. 
이 아이디 기억 체크박스를 선택하고 로그인하면 다음 로그인때 
그 이메일을 가져올 수 있게 
init() 함수를 추가하여 login.html 에 body 태그 onload="init();" 으로 수정하였다.

 세션 함수를 만들었다. session_set() 함수를 이용하여 세션을 저장하고, 
session_get() 함수를 이용하여 세션을 읽는다. 
login() 함수에 폼을 제출하는 submit(); 앞에 세션을 생성해주었고, 
session_check() 함수를 새로 만들어 로그인 페이지에 다시 접속하는 경우 
로그인된 페이지로 이동하는 코드를 구현했다. 
기존 로그인 폼에 쿠키에서 가져온 아이디를 입력한 init() 함수에 
session_check(); 를 호출하게 했다. 세션을 없애는 session_del() 함수도 추가했는데, 
이것은 브라우저를 닫으면 자동으로 삭제되는 것이다. 
로그인 기능을 강화시키기 위해 암호화, 복호화 함수를 추가했다. 
패스워드 보안 처리 부분을 추가했고, session_set() 함수에서 패스워드 id를 
가져오지 않았는데, 이를 가져와 패스워드를 암호화해서 
세션에 저장하는 것으로 수장해주었다. 
get_id() 함수에서 세션에 저장된 암호화된 값을 복호화를 수행하는 것을 수정했다.

 login.js 파일에 담겨있던 모든 기능들을 각각의 기능에 맞게 분리하여 새로운 js 파일을 
만들어주고, 자바스크립트 외부 연동 코드를 작성하여 코드가 서로 분리는 되어있지만, 
기능이 작동되게 수정하였다. 기존의 session_set() 함수는 키, 값(문자열) 형태로 
저장하였는데, 프로퍼티를 이용하여 객체 리터럴 방식으로 저장하게 수정하였다. 
객체를 생성하면서 JSON 문자열로 변환했는데, 
소스 코드를 수정하면서 세션의 키를 변경해주었다. 
그래서 session_get() 함수에서 키의 이름도 수정해주었고, 
마찬가지로 session_check() 함수와 session_del() 함수에서의 키의 이름도 수정해주었다. 
메인 화면 index.html 에서 회원가입 버튼을 추가하여 부트스트랩 회원 가입 폼을 이용해 
페이지를 새로 추가해주었다. 그리고 회원가입을 위한 js 파일을 새로 만들고, 
html의 회원 가입 버튼에서 onclick="join()" 으로 함수를 실행하게 설정했다. 
새로 만들어진 js 파일에 join() 함수를 구현하는데, 
회원가입 폼에 나와있는 다양한 정보들의 id값을 가져와 정보의 빈 칸이 생기지 않게 
모든 정보 칸을 입력하면 폼을 보내는 코드를 구현하였다. 
그리고, 회원 가입 후 완료 페이지 html 을 추가 구현하였다. 
join.js 파일에서 다수의 회원가입 정보를 객체로 생성하기 위해 constructor 생성자와 
SignUp 클래스를 작성하였고, 회원가입과 함께 세션 객체를 생성하기 위해 
기존의 join() 함수에서 회원가입용 세션을 생성하는 코드를 넣어 수정하였다. 
join.js 파일에서도 외부 함수를 가져와야 하기 때문에 자바스크립트 외부 연동 코드를 
작성해주었다. 회원가입 폼 페이지의 헤더에 크립토 라이브러리 연동을 추가하여 
암복호화 함수를 사용할 수 있게 하였고, session.js 파일에 세션을 객체로 저장해주는 
함수를 추가하여 회원가입 폼의 입력 항목을 객체로 전달하고, 
new 연산자로 객체를 생성하여 
콘솔창에 문자열로 변환된 객체의 내용과 암호화된 객체의 내용을 출력하게 해주는 
session_join_set() 함수를 새로 만들었다.

 메인화면 index.html 에 기존 전체 메뉴 네비바 하단에 
새로운 네비바인 하단 메뉴 네비바를 
삽입했다. 하단 메뉴에 소개 페이지를 입력하고, 글자를 클릭하면 소개 페이지가 열리는 
화면을 구성하기 위해 프로필 html을 만들었다. 부트스트랩 템플릿의 소스코드를 
복사 붙여넣기를 하여 소개 페이지 화면을 구상했고, 
기존 코드에서 외부 유튜브 미디어와 배경 사운드, 지도 화면을 추가하였다. 
지도 화면을 동작하게 할 자바스크립트 코드는 
카카오 api 개발자 사이트에 접속하여 개인 API 키를 발급받아 작성하였다. 
지도를 구현하게 될 코드는 kakaomap Maps API 사이트를 참고하였다.