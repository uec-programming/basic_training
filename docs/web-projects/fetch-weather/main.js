function onLoad() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.aoikujira.com/tenki/week.php?fmt=json');
  xhr.addEventListener('load', function () {
    const data = xhr.responseText;
    const json = JSON.parse(data);
    showData(json);
  });
  xhr.send();
}

function showData(json) {
  const tokyo = json['東京'];

  let result = '';
  for (const day of tokyo) {
    result += `<h2>${day.date}の天気</h2>
    <ul>
      <li>天気：${day.forecast}</li>
      <li>気温：${day.maxtemp}度 / ${day.mintemp}度</li>
      <li>降水確率：${day.pop}％</li>
    </ul>`;
  }
  result += `取得時刻：${json.mkdate}`;

  document.getElementById('main').innerHTML = result;
}

window.addEventListener('load', onLoad);
