// 天気API呼び出し
function getWeather() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.aoikujira.com/tenki/week.php?fmt=json&city=東京');
  xhr.addEventListener('load', showData);
  xhr.send();
}

// ページロード時にonLoad関数を呼び出し
window.addEventListener('load', getWeather);

// データの表示
function showData(event) {
  const xhr = event.target;
  // 取得した文字列
  const text = xhr.responseText;
  // オブジェクトに変換
  const data = JSON.parse(text);
  // 東京の天気を取り出し
  const tokyo = data['東京'];

  // HTMLの組み立て
  let result = '';
  for (const day of tokyo) {
    result += `<h2>${day.date}の天気</h2>
    <ul>
      <li>天気：${day.forecast}</li>
      <li>気温：${day.maxtemp}度 / ${day.mintemp}度</li>
      <li>降水確率：${day.pop}％</li>
    </ul>`;
  }
  result += `取得時刻：${data.mkdate}`;

  // 画面に表示
  document.getElementById('main').innerHTML = result;
}
