let ws;

// ページ読み込み完了時
function onload() {
  // サーバーへ接続
  ws = new WebSocket('wss://api.coin.z.com/ws/public/v1');
  // 表示の更新
  document.getElementById('status-text').textContent = 'GMOコインに接続しています...';
  ws.addEventListener('open', onOpen);
  ws.addEventListener('error', onError);
  ws.addEventListener('message', onMessage);
}

// BTCの購読開始
function subscribeBTC() {
  const data = {
    command: 'subscribe',
    channel: 'ticker',
    symbol: 'BTC_JPY'
  };
  const dataString = JSON.stringify(data);
  ws.send(dataString);
}

// 接続成功時の表示更新
function onOpen() {
  document.getElementById('status-text').textContent = 'GMOコインに接続しました';
}

// 接続失敗時の表示更新
function onError() {
  document.getElementById('status-text').textContent = '接続エラー';
}

// 受信メッセージの処理
function onMessage(event) {
  const dataString = event.data;
  const data = JSON.parse(dataString);
  document.getElementById('btc-jpy-last').textContent = data.last;
  const timestamp = new Date(data.timestamp).toLocaleString();
  document.getElementById('btc-jpy-timestamp').textContent = timestamp;
}

window.addEventListener('load', onload);
