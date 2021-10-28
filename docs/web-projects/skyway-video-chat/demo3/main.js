// 自分の映像
let localStream;

// ページ読み込み完了時
function onLoad() {
  console.log('ページ読み込み完了');
  // カメラ映像を取得
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: true })
    .then(onUserMediaSuccess)
    .catch(onUserMediaError);
}

// カメラ映像の取得に成功時
function onUserMediaSuccess(stream) {
  console.log('カメラ映像取得成功');
  // video要素を取得し、映像(stream)をセットして再生
  const videoElement = document.getElementById('local-video');
  videoElement.srcObject = stream;
  videoElement.play();

  // 取得した映像をグローバル変数に保存
  localStream = stream;
}

// カメラ映像の取得に失敗時
function onUserMediaError(error) {
  alert('カメラ映像が取得できませんでした！');
  console.error(error);
}

// ページ読み込みが完了した時の関数を登録
window.addEventListener('load', onLoad);
