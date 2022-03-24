(function () {

    let anyArray = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
    
    function shuffleCards(array) {
        let m = array.length, t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }
     return array;
    }

    function createAppTitle() {
        let appTitle = document.createElement('h1');
        appTitle.classList.add('card-game-app__title');
        appTitle.textContent = "Funny Flip Card Game =)";
        return appTitle;
    }

    function createAppControls() {
        let appControls = document.createElement('div');        
        let score = document.createElement('div');        
        let buttonsWrapper = document.createElement('div');        
        let startButton = document.createElement('button');        
        let stopButton = document.createElement('button');

        appControls.classList.add('card-game-app__controls');
        score.classList.add('card-game-app__score');
        buttonsWrapper.classList.add('card-game-app__buttons-wrapper');
        startButton.classList.add('card-game-app__btn', 'card-game-app__btn_start');
        stopButton.classList.add('card-game-app__btn', 'card-game-app__btn_stop', 'disabled');

        startButton.textContent = "Start Game";
        stopButton.textContent = "Stop Game";
        score.textContent = "0";

        buttonsWrapper.append(startButton);
        buttonsWrapper.append(stopButton);
        appControls.append(score);
        appControls.append(buttonsWrapper);

        return {
            appControls,
            startButton,
            stopButton,
        }    
    }

    function createGameField(cardsNumber = 16) {
        let appField = document.createElement('div');
        appField.classList.add('card-game-app__game-field');

        array = shuffleCards(anyArray);
        
        for (let i = 0; i < cardsNumber; i++) {
            let card = document.createElement('div');
            card.classList.add('card-game-app__card');
            card.textContent = `${array[i]}`;
            appField.append(card);
        }

        return appField;
    }

    function createApp(container) {

        let gameTitle = createAppTitle();
        let gameControls= createAppControls();
        let gameField = createGameField(anyArray.length);

        container.append(gameTitle);
        container.append(gameControls.appControls);
        container.append(gameField);
    }

    document.addEventListener('DOMContentLoaded', function () {
        createApp(document.getElementById('card-game-app'))
    });
     

    
})();