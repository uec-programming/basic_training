let count = 0;

function countup() {
  count += 1;
  document.getElementById('number').innerText = count;
}

function reset() {
  count = 0;
  document.getElementById('number').innerText = count;
}
