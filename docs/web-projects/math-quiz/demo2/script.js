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
