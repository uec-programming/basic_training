// 自分の映像
let localStream;
// SkywayのAPIキー
const API_KEY = '9fa5a062-8447-46df-b6aa-86752eec9bd0';
// Peer
let peer;

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

  // Peerを作成する
  createPeer();
}

// カメラ映像の取得に失敗時
function onUserMediaError(error) {
  alert('カメラ映像が取得できませんでした！');
  console.error(error);
}

// Peerを作成する関数
function createPeer() {
  // 新しいPeerを作成
  peer = new Peer({
    key: API_KEY,
    debug: 3
  });
  // Skywayサーバとの接続成功時の関数を登録
  peer.on('open', showPeerID);
  // 着信時の関数を登録
  peer.on('call', answerCall);
}

// 自分のPeerIDを表示する関数
function showPeerID() {
  console.log('Skywayサーバに接続成功');
  document.getElementById('local-id').textContent = peer.id;
}

// 着信を受け取る
function answerCall(connection) {
  // 発信元に自分の映像を送る
  connection.answer(localStream);
  // 相手から映像が来た時の関数を登録
  connection.on('stream', onStream);
}

// 発信する
function startCall() {
  // 入力された相手のPeerID
  const remoteID = document.getElementById('remote-id').value;
  const connection = peer.call(remoteID, localStream);
  connection.on('stream', onStream);
}

// 相手の映像を受け取った時
function onStream(remoteStream) {
  console.log('相手から映像を受信');
  // video要素を取得し、相手の映像(remoteStream)をセットして再生
  const videoElement = document.getElementById('remote-video');
  videoElement.srcObject = remoteStream;
  videoElement.play();
}

// ページ読み込みが完了した時の関数を登録
window.addEventListener('load', onLoad);
