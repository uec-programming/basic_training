// 答えを保管する変数
let answer;

// 問題を作る
function createQuiz() {
  // 0から99の整数を2つ作る
  const a = Math.floor(Math.random() * 100);
  const b = Math.floor(Math.random() * 100);
  // 足した答えをanswerに代入
  answer = a + b;
  // 問題文
  const quizString = `${a} + ${b} = ?`;
  // 要素を取得して表示する
  document.getElementById('quiz-text').innerText = quizString;
}

// 採点
function check() {
  // 要素を取得
  const inputElement = document.getElementById('answer-box');
  // ユーザーの入力値
  const input = Number(inputElement.value);
  // 問題の答えと比較
  if (input == answer) {
    alert('正解！');
  } else {
    alert('残念！違います。');
  }
}
