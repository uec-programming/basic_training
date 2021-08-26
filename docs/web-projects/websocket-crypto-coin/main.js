let ws;
function onload() {
  ws = new WebSocket('wss://api.coin.z.com/ws/public/v1');
  document.getElementById('status-text').textContent =
    'GMOコインに接続しています...';
  ws.addEventListener('open', onOpen);
  ws.addEventListener('error', onError);
  ws.addEventListener('message', onMessage);
}

function subscribeBTC() {
  const data = {
    command: 'subscribe',
    channel: 'ticker',
    symbol: 'BTC_JPY'
  };
  const dataString = JSON.stringify(data);
  ws.send(dataString);
}

function subscribeXRP() {
  const data = {
    command: 'subscribe',
    channel: 'ticker',
    symbol: 'XRP_JPY'
  };
  const dataString = JSON.stringify(data);
  ws.send(dataString);
}

function onOpen() {
  document.getElementById('status-text').textContent =
    'GMOコインに接続しました';
}

function onError() {
  document.getElementById('status-text').textContent = '接続エラー';
}

function onMessage(event) {
  const dataString = event.data;
  const data = JSON.parse(dataString);
  if (data.symbol == 'BTC_JPY') {
    document.getElementById('btc-jpy-last').textContent = data.last;
    const timestamp = new Date(data.timestamp).toLocaleString();
    document.getElementById('btc-jpy-timestamp').textContent = timestamp;
  } else if (data.symbol == 'XRP_JPY') {
    document.getElementById('xrp-jpy-last').textContent = data.last;
    const timestamp = new Date(data.timestamp).toLocaleString();
    document.getElementById('xrp-jpy-timestamp').textContent = timestamp;
  }
}

window.addEventListener('load', onload);
