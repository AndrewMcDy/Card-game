(function () {

    let anyArray = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
    let variable = "0";
    let maxScore = localStorage.getItem('maxScore');

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
        let hiScore = document.createElement('div');
        let buttonsWrapper = document.createElement('div');
        let resetButton = document.createElement('button');        

        appControls.classList.add('card-game-app__controls');
        score.classList.add('card-game-app__score');
        hiScore.classList.add('card-game-app__hi-score');
        buttonsWrapper.classList.add('card-game-app__buttons-wrapper');        
        resetButton.classList.add('card-game-app__btn', 'card-game-app__btn_reset');
        resetButton.textContent = "Reset Game";
        score.textContent = '0';
        hiScore.textContent = `max: ${maxScore || '0'}`;
        buttonsWrapper.append(resetButton);
        appControls.append(score);
        appControls.append(hiScore);
        appControls.append(buttonsWrapper);
        return {
            appControls,
            resetButton,
            score,
            hiScore,
        }
    }

    function createGameField(cardsNumber = 16) {
        let appField = document.createElement('div');
        appField.classList.add('card-game-app__game-field');

        array = shuffleCards(anyArray);

        for (let i = 0; i < cardsNumber; i++) {
            let card = document.createElement('div');
            let cardFront = document.createElement('div');
            let cardBack = document.createElement('div');
            card.classList.add('card-game-app__card');
            cardFront.classList.add('card-game-app__card-front');
            cardBack.classList.add('card-game-app__card-back');
            cardBack.textContent = `${array[i]}`;
            card.append(cardFront);
            card.append(cardBack);
            appField.append(card);
        }
        return appField;
    }

    function createApp(container) {

        let gameTitle = createAppTitle();
        let gameControls = createAppControls();
        let gameField = createGameField(anyArray.length);
        let currentScore = 0;

        container.append(gameTitle);
        container.append(gameControls.appControls);
        container.append(gameField);

        let cards = document.querySelectorAll(".card-game-app__card");

        function onClick(event) {
            const clickedCard = event.target.closest(".card-game-app__card");
            clickedCard.classList.toggle('card-game-app__card-rotate');

            if (variable === "0") {
                variable = clickedCard.textContent;
            } else {
                if (variable === clickedCard.textContent) {
                    let cards = document.querySelectorAll('.card-game-app__card');
                    cards.forEach(card => {
                        if (card.textContent === variable) {
                            card.removeEventListener('click', onClick);
                            currentScore += 100;
                            gameControls.score.textContent = currentScore;
                            setTimeout(function () {
                                card.classList.add('strike');
                            }, 1000);
                        }
                    })
                    variable = "0";
                } else {
                    currentScore -= 10;
                            gameControls.score.textContent = currentScore;
                    setTimeout(function () {
                        clickedCard.classList.remove('card-game-app__card-rotate');
                        let cards = document.querySelectorAll('.card-game-app__card');
                        cards.forEach(anyCard => {
                            if (anyCard.textContent === variable) {
                                anyCard.classList.remove('card-game-app__card-rotate');
                            }
                        });
                        variable = "0";
                    }, 1000)
                }
            }

            if (maxScore < currentScore) {
                maxScore = currentScore;
                localStorage.setItem('maxScore', maxScore);
                gameControls.hiScore.textContent = `max: ${maxScore}`;
            };
        }

        cards.forEach(item => {
            item.addEventListener('click', onClick);
        });
        
        let reset = document.querySelector('.card-game-app__btn_reset');
        let gameContainer = document.getElementById('card-game-app');
        reset.addEventListener("click", () => {
            gameContainer.innerHTML = '';
            createApp(gameContainer);
        });
    }

    document.addEventListener('DOMContentLoaded', function () {        
        createApp(document.getElementById('card-game-app'));
    });

})();