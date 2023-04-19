document.getElementById("search_btn").addEventListener('click', search_message);

var search_array = [];	//빈 배열 - 전역 변수
var MAX_SEARCH_COUNT = 10;    //최대 검색어 개수

//변수에 저장
let search_str = document.querySelector("#search_txt");

function search_message(){
	
	if (search_str.value.length === 0) {
		alert("검색어가 비었습니다. 입력해주세요");
	}
	else if (search_array.length >= MAX_SEARCH_COUNT) {
        alert("최대 검색어 개수를 초과하였습니다.");
        search_array.splice(0, 1);    //첫번째 값 삭제
    }
	else {
		alert("검색을 수행합니다!");
		search_array.push(search_str.value);	//배열에 검색어 추가
		//태그에 값 추가
		let text = document.getElementById("search_message").innerHTML = search_array.toString();	//값 변환
		document.querySelector("#form_main").submit();
	}
	
	
	//콘솔에 출력
	//console.log(search_str.value);
}

/*
// 검색 제한 단어
const forbiddenWords = ["금지어1", "금지어2", "금지어3"];

document.getElementById("search_btn").addEventListener('click', search_message);

//변수에 저장
let search_str = document.querySelector("#search_txt");

function search_message(){
	
	if (search_str.value.length === 0) {
		alert("검색어가 비었습니다. 입력해주세요");
	} else if (forbiddenWords.includes(search_str.value)) {
		alert("검색어가 제한 단어에 해당됩니다. 다른 검색어를 입력해주세요.");
	} else {
		alert("검색을 수행합니다!");
		//태그에 값 추가
		let text = document.getElementById("search_message").innerHTML = search_str.value;
		// 검색어가 제한 단어가 아니면 폼 제출
		document.querySelector("#form_main").submit();
	}
	
	//콘솔에 출력
	//console.log(search_str.value);
}
*/