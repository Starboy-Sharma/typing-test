window.addEventListener('load', init)
// Availabe levels

const levels = {
  'easy': 5,
  'medium': 3,
  'hard': 2
}

// Globals
let time = levels.easy
let score = 0
let isPlaying

// DOM Elements
const wordInput = document.querySelector('#word-input')
const currentWord = document.querySelector('#current-word')
const scoreDisplay = document.querySelector('#score')
const timeDisplay = document.querySelector('#time')
const message = document.querySelector('#message')
const seconds = document.querySelector('#seconds')

const words = [
  'addEventListener',
  'cooking',
  'hat',
  'rat',
  'speaker',
  'other',
  'classic',
  'design',
  'developer',
  'runway',
  'answer',
  'stubborn',
  'spellchecker',
  'recreation',
  'JavaScript',
  'nutrition',
  'painting',
  'revolver',
  'facebook',
  'azure',
  'alexa',
  'update',
  'annoying',
  'application',
  'keyborad',
  'monitor',
  'stackoverflow',
  'probably',
  'password',
  'shopping',
  'office',
  'sharing',
  'cuddle',
  'zindagi',
  'thankyoupankajsharma',
  'australia',
  'oxforduniversity',
  'fountain',
  'unfortunately',
  'gradient',
  'readme',
  'unstoppable',
  'questions',
  'webpack',
  'glasses',
  'fiftyshadesofdarker',
  'cherryblossoms',
  'mistrake',
  'contributing',
  'humptydumpty',
  'newzeland',
  'singapore',
  'departure',
  'stickynotes',
  'jewellery',
  'airconditioner',
  'heartattack',
  'popcorn',
  'round',
  'avenger',
  'annabelle',
  'studysmart',
  'hangout',
  'aeroplane',
  'accommodate',
  'intercontinental',
  'handkerchief',
  'badminton',
  'learning',
  'shapingconcepts',
  'motherboard',
  'android',
  'shipping',
  'playwright',
  'python',
  'conscience',
  'technologylost',
  'starbucks',
  'aberration',
  'aggrandize',
  'capitulate',
  'cuccumber',
  'connive',
  'debauch',
  'demagogue',
  'Initialize'
]

// Initialize Game
function init () {
  // Load words from array
  showWord(words)

  // Start matching on word input
  wordInput.addEventListener('input', startMatch);

  // Call countdown every second
  setInterval(countdown, 1000)

  // check game status here
  setInterval(checkStatus, 50)
}

// Start Match here

function startMatch () {
  if (matchWords()) {
    isPlaying = true
    time = levels.easy + 1
    showWord(words)
    wordInput.value = ''
    score++
  }
  // If score is negative
  if (score < 0) {
    scoreDisplay.innerHTML = 0
  } else {
    scoreDisplay.innerHTML = score
  }
}

// Match current word to input
function matchWords () {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'Correct!!!'
    return true
  } else {
    message.innerHTML = ''
    return false
  }
}

// Pick & Show Random words
function showWord (words) {
  // Generate Random array index
  const randIndex = Math.floor(Math.random() * words.length)
  // Output random word
  currentWord.innerHTML = words[randIndex]
}

// countdown timer
function countdown () {
  if (time > 0) {
    time--
  } else if (time === 0) {
    isPlaying = false
  }
  // Show time here
  timeDisplay.innerHTML = time
}

// Check game status
function checkStatus () {
  if (!isPlaying && time === 0) {
    message.innerHTML = 'Game Over !!!'
    score = -1
  }
}
