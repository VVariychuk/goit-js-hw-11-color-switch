import './styles.css';


const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    body: document.body,
    startBtn: document.querySelector('button[data-action="start"]'),
    stopBtn: document.querySelector('button[data-action="stop"]'),
     
}
let isActive = false
let intervalId = null

refs.startBtn.addEventListener('click', startFn)
refs.stopBtn.addEventListener('click', stopFn)

function startFn() {
    if (isActive) { return }
    
    intervalId = setInterval(() => {
      isActive = true
      const currentColor = randomIntegerFromInterval(0, colors.length)  
      refs.body.style.backgroundColor = colors[currentColor]
        
    },1000)
    
}


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function stopFn() {
    clearInterval(intervalId)
    isActive = false
}