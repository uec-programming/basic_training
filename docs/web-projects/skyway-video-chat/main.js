let localStream;
let peer;
const API_KEY = '9fa5a062-8447-46df-b6aa-86752eec9bd0';

function onLoad() {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: true })
    .then(onUserMediaSuccess)
    .catch(onUserMediaError);
}

function onUserMediaSuccess(stream) {
  localStream = stream;
  const videoElement = document.getElementById('local-video');
  videoElement.srcObject = localStream;
  videoElement.play();

  createPeer();
}

function onUserMediaError(error) {
  alert('カメラ映像が取得できませんでした！');
  console.error('mediaDevice.getUserMedia() error:', error);
  return;
}

function createPeer() {
  peer = new Peer({
    key: API_KEY,
    debug: 3
  });
  peer.on('open', onOpen);
  peer.on('call', onCall);
}

function onOpen() {
  document.getElementById('local-id').textContent = peer.id;
}

function onCall(connection) {
  connection.answer(localStream);
  connection.on('stream', onStream);
}

function startCall() {
  const remoteID = document.getElementById('remote-id').value;
  const connection = peer.call(remoteID, localStream);
  connection.on('stream', onStream);
}

function onStream(remoteStream) {
  const videoElement = document.getElementById('remote-video');
  videoElement.srcObject = remoteStream;
  videoElement.play();
}

window.addEventListener('load', onLoad);
