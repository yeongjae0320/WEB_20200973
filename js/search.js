document.getElementById("search_btn").addEventListener('click', search_message);

function search_message(){
	if (search_str.value.length === 0) {
		alert("검색어가 비었습니다. 입력해주세요");
	}
	else {
		alert("검색을 수행합니다!");
		//태그에 값 추가
		let text = document.getElementById("search_message").innerHTML = search_str.value;
		document.querySelector("#form_main").submit();
	}
	
	//변수에 저장
	//let search_str = document.querySelector("#search_txt");
	
	//콘솔에 출력
	//console.log(search_str.value);
}