const quizList = [
  {
    text: '西暦1900年は閏年である。',
    answer: 0
  },
  {
    text: '光の三原色は赤緑青である',
    answer: 1
  },
  {
    text: '紙鍋の紙は、燃えないように耐火加工されている。',
    answer: 0
  }
];

// 今何問目か
let quizNumber = 0;
// 正解数
let score = 0;

// 回答ボタンを押した時
function submit(input) {
  // 答え合わせ
  check(input);
  // 問題番号を1つÏ進める
  quizNumber++;
  // 問題があれば問題文を表示、そうでなければ結果発表する。
  if (quizNumber < quizList.length) {
    showQuiz();
  } else {
    finish();
  }
}

// 問題を表示する
function showQuiz() {
  const quiz = quizList[quizNumber];
  document.getElementById('quiz-text').innerText = quiz.text;
}

// 正解ならば、得点を1加算する。
function check(input) {
  const quiz = quizList[quizNumber];
  if (input == quiz.answer) {
    score++;
  }
}

// 結果発表
function finish() {
  alert(`${quizList.length}問中、${score}問正解でした！`);
}
