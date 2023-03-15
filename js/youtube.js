var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
    new YT.Player("player", {
        videoId: "An6LvWQuj_8", //최초 재생할 유튜브 영상 id
        playerVars: {           //영상을 재생하기위한 변수들
            autoplay: true,     //자동 재생 유무
            loop: true,         // 반복 재생 유무
            playlist: 'An6LvWQuj_8'  //반복 재생할 id
        },
        events: {
            onReady: function (event) {
                event.target.mute() //음소거
            }
        }
    });
}
