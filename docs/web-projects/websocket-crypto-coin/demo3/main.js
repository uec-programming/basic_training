let ws;

// ページ読み込み完了時
function onload() {
  // サーバーへ接続
  ws = new WebSocket('wss://api.coin.z.com/ws/public/v1');
  // 表示の更新
  document.getElementById('status-text').textContent = 'GMOコインに接続しています...';
  ws.addEventListener('open', onOpen);
  ws.addEventListener('error', onError);
}

// 接続成功時の表示更新
function onOpen() {
  document.getElementById('status-text').textContent = 'GMOコインに接続しました';
}

// 接続失敗時の表示更新
function onError() {
  document.getElementById('status-text').textContent = '接続エラー';
}

window.addEventListener('load', onload);
