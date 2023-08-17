'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = '13';
// document.querySelector('.score').textContent = '10';

// document.querySelector('.guess').value = 23;


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;



const displayMessage = (message) => {
    document.querySelector('.message').textContent = message;
};


const displayNumber = (bgcolor, bgsize, snum) => {

    document.querySelector('body').style.backgroundColor = bgcolor;

    document.querySelector('.number').style.width = bgsize;

    document.querySelector('.number').textContent = snum;
};


document.querySelector('.check').addEventListener
('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess);

    if (!guess) {
        // document.querySelector('.message').textContent = '🙅 No Number!';
        displayMessage('🙅 No Number!');
    }

    else if (guess < 0 || guess > 20) {
        // document.querySelector('.message').textContent = '🙅 Invalid Number!\nPick from numbers (1 - 20)';
        displayMessage('🙅 Invalid Number!\nPick from numbers (1 - 20)');
    }

    else if (score == 0) {
        alert('Nah bro u lost already, click again...');
    }

    else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = '🎉 Correct Number!';
        

        // document.querySelector('body').style.backgroundColor = '#60b347';
        // document.querySelector('.number').style.width = '30rem';
        // document.querySelector('.number').textContent = secretNumber;
        displayMessage('🎉 Correct Number!');

        displayNumber('#60b347', '30rem', secretNumber);

        
        if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
        }

    }

    else if (guess !== secretNumber) {
        // document.querySelector('.message').textContent = guess > secretNumber ? 
        // '⬆️ Too High! 😵‍💫' : '⬇️ Too Low! 🥴';
        displayMessage(guess > secretNumber ? '⬆️ Too High! 😵‍💫' : '⬇️ Too Low! 🥴');
        score--;
        document.querySelector('.score').textContent = score;

        if(score == 0) {
            // document.querySelector('.message').textContent = '😂 You Lost!';
            displayMessage('😂 You Lost!');
        }
    }
    
});


document.querySelector('.again').addEventListener('click', function () {

    secretNumber = Math.trunc(Math.random() * 20) + 1;
    // document.querySelector('.number').textContent = '?';

    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');

    score = 20;
    document.querySelector('.score').textContent = score;

    let guess = Number(document.querySelector('.guess').value);
    guess = 0;
    Number(document.querySelector('.guess').value = '');

    // document.querySelector('body').style.backgroundColor = '#222';
    // document.querySelector('.number').style.width = '15rem';
    displayNumber('#222', '15rem', '?');

});