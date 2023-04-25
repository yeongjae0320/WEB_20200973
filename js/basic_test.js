// 한줄 주석 : 임시 자바스크립트 파일을 생성했습니다.
var jb = 'hi';	// 변수 선언 뒤에 주석처리 가능
/*
여러 줄 주석: 여러 줄에 걸쳐 주석을 처리합니다.
*/
var a = 1;
var b;
b = 5;

if (true) {
	let c = 'let 접근';
	var c_1 = 'var 접근';
	//console.log(c); 여기서는 접근가능 출력됨.
}

//console.log(c) // Error? -> Error
console.log(c_1);

let d = 5;
//let d = '값 재할당';	// Error? -> Error
console.log(d);

const e = '상수 1 접근';
//e = 5;
//const f // Error? -> Error
console.log(e);