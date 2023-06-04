//13주차 map 실습내용
var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
        center: new kakao.maps.LatLng(37.38027012281215, 126.92765459883796), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성

// 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성
var mapTypeControl = new kakao.maps.MapTypeControl();

// 지도에 컨트롤을 추가해야 지도위에 표시
// kakao.maps.ControlPosition은 컨트롤이 표시 위치 TOPRIGHT는 오른쪽 위를 의미
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

// 지도를 클릭한 위치에 표시할 마커와 인포윈도우를 생성합니다
var marker = new kakao.maps.Marker(),
    infowindow = new kakao.maps.InfoWindow({zIndex:1});

// 추가구현
// 지도를 클릭한 위치에 표시할 마커와 인포윈도우를 생성합니다
var marker = new kakao.maps.Marker(),
    infowindow = new kakao.maps.InfoWindow({zIndex:1});

// 지도에 클릭 이벤트를 등록합니다
kakao.maps.event.addListener(map, 'click', function(mouseEvent) {

    // 클릭한 위도, 경도 정보를 가져옵니다
    var latlng = mouseEvent.latLng;

    // 마커 위치를 클릭한 위치로 옮깁니다
    marker.setPosition(latlng);
    marker.setMap(map);

    // 인포윈도우에 표시될 HTML 내용을 생성합니다
    var content =
        '<div style="padding:10px; font-size:6px;">' +
        '위도: ' + latlng.getLat() +
        '<br>' +
        '경도: ' + latlng.getLng() +
        '</div>';

    // 인포윈도우에 내용을 설정합니다
    infowindow.setContent(content);
    infowindow.open(map, marker);
});