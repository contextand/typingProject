//변수
const GAME_TIME = 3;
let score = 0;
let time = GAME_TIME;
let isPlaying = false;
let timeInterval;
let checkInterval;
let word = [];

const wordInput = document.querySelector(".word-input");
const wordDisplay = document.querySelector(".word-display");
const scoreDisplay = document.querySelector(".score");
const timeDisplay = document.querySelector(".time");
const button = document.querySelector(".button");

Init();

function Init() {
  getWords();
  wordInput.addEventListener("input", checkMatch);
}

// 게임 실행
function run() {
  isPlaying = true;
  time = GAME_TIME;
  timeInterval = setInterval(countDown, 1000);
  checkInterval = setInterval(checkStatus, 50);
}

function checkStatus() {
  if (!isPlaying && time === 0) {
    buttonChange("게임종료...");
    clearInterval(checkInterval);
  }
}

// 단어 불러오기
function getWords() {
  words = ["Hello", "Banna", "Apple", "Cherry"];
  buttonChange("게임시작");
}

// 단어일치 체크
function checkMatch() {
  if (wordInput.value.toLowerCase() === wordDisplay.innerText.toLowerCase()) {
    score++;
    wordInput.value = "";
    if (!isPlaying) {
      return;
    }
    scoreDisplay.innerText = score;
  }
}

buttonChange("게임시작");

function countDown() {
  time > 0 ? time-- : (isPlaying = false);
  if (!isPlaying) {
    clearInterval(timeInterval);
  }
  timeDisplay.innerText = time;
}

function buttonChange(text) {
  button.innerText = text;
  text === "게임시작"
    ? button.classList.remove("loading")
    : button.classList.add("loading");
}
