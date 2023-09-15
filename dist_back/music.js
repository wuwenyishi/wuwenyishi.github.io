const ap = new APlayer({
  container: document.getElementById('aplayer'),
  fixed: true,
  autoplay: true,
  audio: [
    {
      name: '无法拥有的人要好好道别',
      artist: '棱镜',
      url: 'https://fastly.jsdelivr.net/gh/wuwenyishi/shared@music/2022/03/28/143445.mp3',
      cover: '/dist/musicLogo.png',
    }
  ]
});

