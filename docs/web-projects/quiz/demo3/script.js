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

// 問題を表示する
function showQuiz() {
  const quiz = quizList[quizNumber];
  document.getElementById('quiz-text').innerText = quiz.text;
}
