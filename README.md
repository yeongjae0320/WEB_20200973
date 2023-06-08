# WEB_20200973 자바웹프로그래밍(1) 4-6 김영재
웹프로그래밍(1) 소스코드
수업 이외에 추가하거나 수정한 부분 스크린샷 화면 그림 업로드

## 9주차 문제 및 추가구현

-1.login.js에서 login 함수 안에 코드를 추가 구현하였다. 9주차 응용 문제는 이메일 형식 정규 표형식과, 
패스워드 형식 체크를 사용하여 test()로 값을 검사하는 기능을 추가하는 것이었다. 
정규식 패턴이 일치하지 않는 경우를 확인하는데, 만약 일치하지 않는다면, 입력 필드 
주위에 빨간색 테두리를 추가하여 사용자에게 잘못된 입력을 알리고, 메시지를 표시하는 코드를 작성하였다. 

## 10주차 문제 및 추가구현

-1.10주차 응용 문제는 로그인, 로그아웃 횟수를 쿠키를 만들어 저장하는 것이다. 
login.js에서 이를 추가했는데, 로그인할 때 호출되는 함수를 사용하여 함수 내부에서 먼저 login_cnt 값을 쿠키에서 가져오는데, 
만약 해당 쿠키가 존재하지 않는다면 초기값인 1을 loginCnt 변수에 설정하고, 
그렇지 않은 경우, 현재 값에 1을 더한 후 loginCnt 변수에 할당한다. 
마지막으로, login_cnt라는 이름의 쿠키에 새로운 값을 설정하고, 
이렇게 함으로써 로그인 횟수가 쿠키에 저장되고 추적되는 코드를 구현하였다. 
마찬가지로, 로그아웃도 이와 같은 과정을 따르게 된다.

-2.로그인이 성공하면 쿠키의 값을 증가시킬 수 있게 login 함수 내에 login_count();을 
작성하여 호출하게 했다. 로그아웃하면 쿠키의 값을 증가시킬 수 있게 logout 함수 내에 
logout_count();을 작성하여 호출하게 했다.

## 11주차 문제 및 추가구현
 
-1.11주차 응용문제는 로그인 시간을 유지하고, 로그인 실패 횟수가 N번인 경우 로그인을 제한하는 
문제이다. 문제는 로그인 유지 시간을 5분으로 유지하는 거였지만, 실제로 코드가 정상적으로 
돌아가는지 확인하기 위해 제한 시간을 30초로 설정하였다. 코드는 weeks11.js에 구현되어 있다. 시간을 리셋하는 함수와 
시간을 설정하는 함수, 시간 타이머를 리셋하는 함수를 만들어서 세션의 지속 시간은 30초이고 만료되면 
자동으로 로그아웃 코드를 구현한 것이다.

-2.두 가지 동적인 코드를 더 구현해 보았는데, 하나는 같이 실행시키지 않을 것이기에 주석 처리를 하였다. 
그 내용은 마우스 클릭을 하면 시간이 초기화되는 것을 구현한 코드이고, 다른 하나는 마우스를 움직일 시 시간이 
초기화되는 코드이다. 지금의 실행되는 마우스를 움직일 시 시간이 초기화되는 코드에 대해 설명해보자면 
마우스의 이동을 감지하고, 초기화하는 함수를 호출하는 것이다. 세션을 삭제할때 removeItem을 사용해 
Session_Storage_object와 Session_Storage_encrypted을 없애는 것으로 구현하였다.

## 12주차 문제 및 추가구현

-1.12주차 응용 문제인 콘솔에 객체 내용을 출력하는 코드를 구현하였다. index_join.html에 
body 태그에 문서 로드 시 session_join_get() 함수를 호출하게 했고, session.js에서 
session_join_get() 함수를 만들어 Session_Storage_object를 get하여 새로운 변수에 저장하고 
콘솔창에 그 할당된 변수를 출력하게 했다.

## 13주차 문제 및 추가구현

-1.소개 페이지에서 외부 유튜브 미디어를 삽입할 때 강의안 설명대로 width=800, height=600을
주었을 시, 유튜브 썸네일 규격 1280 * 720이 아니기 때문에 확대되어 보여 잘림 현상이 있었다.
그래서 이 문제를 해결하기 위해 16:9 규격을 맞춰 width=800, height=450으로 수정하였다.
또, 강의안대로 구현을 하면 영상 공간이 왼쪽 정렬되어버리는 문제가 발생하여 이를 깔끔하게 보이기 위해
div태그와 text-align:center 속성을 추가하여 가운데 정렬로 만들었다.

-2.소개 페이지에 위치시킨 성결대학교 중심의 지도에서, 기본 코드에 더하여
마우스 클릭 시 마커 표시 기능 및 위도와 경도가 표시되는 코드를 추가 구현하였다.

-3.개인 사진을 내 사진으로 수정하는 문제를 해결하였고, 두 번째 응용 문제인 검색창의 입력한
키워드로 카카오 맵 페이지 열기 - 키워드 검색 및 목록 출력 화면을 새로운 html 파일을 만들어 구현하였다. 이 지도는 
기본 index.html 화면에 버튼으로 구현하여 다음 창으로 넘어가는 단계가 좋겠다 생각하여
상단 로그인하기, 회원가입 버튼 오른쪽에 지도 검색 버튼을 새로 만들었고, 지도 검색 버튼을 클릭하면 지도 화면이 나오게 했다. 
로그인이 성공하고 열리는 index_login.html에도 로그아웃 버튼 옆에 지도 검색 버튼을 만들었다. 
map_keyword.html에서 카카오 맵 페이지 소스대로 height값을 설정하면 지도는 높이가 사이트 반 도 안채워져 나온다. 
그렇기에 style부분에서 .map_wrap 부분의 height를 적당하게 값을 늘려 화면에 꽉 차게 해주었다. 
(height:100vh;로 값을 바꾸었다.)

-4.section의 배경 색깔을 #eee에서 #ffcc00으로 바꾸어 노란 배경화면으로 바꿔주었다. 그리고, 
프로필의 좌측에 기존 강의안대로 만들어진 mdbootstrap 칸 아래에 새로운 칸을 추가해서 
내가 운영했던 블로그의 링크를 걸어두었다. 밑줄 친 것이 보기 좋지 않아 text-decoration을 none으로 사용하여 
a태그를 사용함으로써 생기는 밑줄을 제거해주었다. 마찬가지로 새로운 칸을 추가하여 
위와 같은 내용으로 내가 운영했던 인스타그램 링크를 추가해주었다.

-5.index html파일에서 구현했던 하단메뉴 소개페이지를 index_login html파일에도 코드를 가져와 사용하였다.