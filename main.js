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
            let cardFront = document.createElement('div');
            let cardBack = document.createElement('div');
            card.classList.add('card-game-app__card');
            cardFront.classList.add('card-game-app__card-front');
            cardBack.classList.add('card-game-app__card-back');
            cardBack.textContent = `${array[i]}`;
            card.append(cardFront);
            card.append(cardBack);
            appField.append(card);

            card.addEventListener('click', function (event) {
                card.classList.toggle('card-game-app__card-rotate');
            });
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
     


    

    // let localArray = [];
    // localArray = JSON.parse(localStorage.getItem('localArray'));
    // let localDoneIndex = []
    // localDoneIndex = JSON.parse(localStorage.getItem('localDoneIndex'));


    // function createTodoItem(name) {
    //     let item = document.createElement('li');
    //     let textItem = document.createElement('div');
    //     let buttonGroup = document.createElement('div');
    //     let doneButton = document.createElement('button');
    //     let deleteButton = document.createElement('button');

    //     item.classList.add('list-group-item');
    //     textItem.classList.add('text-item');
    //     buttonGroup.classList.add('btn-group');
    //     doneButton.classList.add('btn', 'btn-success');
    //     doneButton.textContent = 'Готово';
    //     deleteButton.classList.add('btn', 'btn-danger');
    //     deleteButton.textContent = 'Видалити';

    //     textItem.textContent = name;

    //     buttonGroup.append(doneButton);
    //     buttonGroup.append(deleteButton);
    //     item.append(textItem);
    //     item.append(buttonGroup);

    //     // Тест обробників подій зразу, а не під кінець
    //     doneButton.addEventListener('click', function () {            
    //         textItem.classList.toggle('text-item-success');
            
    //         if (localDoneIndex[localArray.indexOf(name)] === '0') {
    //             localDoneIndex[localArray.indexOf(name)] = '1';
    //             doneButton.textContent = 'Упс, ще раз виконати';
    //         } else {
    //             localDoneIndex[localArray.indexOf(name)] = '0';
    //             doneButton.textContent = 'Готово';
    //         }
    //         localStorage.setItem('localDoneIndex', JSON.stringify(localDoneIndex));
    //     });
    //     deleteButton.addEventListener('click', function () {
    //         if (confirm('Ви впевнені?')) {
    //             localArray.splice(localArray.indexOf(name), 1);
    //             localStorage.setItem('localArray', JSON.stringify(localArray));
    //             localDoneIndex.splice(localDoneIndex.indexOf(name), 1);
    //             localStorage.setItem('localDoneIndex', JSON.stringify(localDoneIndex));                
    //             item.remove();
    //         }
    //     });

    //     return {
    //         item,
    //         textItem,
    //         doneButton,
    //         deleteButton,
    //     };
        
    // }

    // function createTodoApp(container, title = 'Список справ') {

    //     // localArray = JSON.parse(localStorage.getItem('localArray'));
    //     let todoAppTitle = createAppTitle(title);
    //     let todoItemForm = createTodoItemForm();
    //     let todoList = createTodoList();

    //     container.append(todoAppTitle);
    //     container.append(todoItemForm.form);
    //     container.append(todoList);

    //     //Виведення збережених справ
    //     localArray = JSON.parse(localStorage.getItem('localArray'));        
    //     if (localArray) {
    //         for (let i = 0; i < localArray.length; ++i) {
    //             let localTodoItem = createTodoItem(localArray[i]);
    //             todoList.append(localTodoItem.item);
    //             if (localDoneIndex[i] === '1') {                    
    //                 localTodoItem.textItem.classList.add('text-item-success');
    //                 localTodoItem.doneButton.textContent = 'Упс, ще раз виконати';
    //             };
    //         };
    //     }    

    //     todoItemForm.input.addEventListener('input', function () {
    //         if (todoItemForm.input.value == "") {
    //             todoItemForm.button.disabled = true;
    //         } else {
    //             todoItemForm.button.disabled = false;
    //         }
    //     });        

    //     todoItemForm.form.addEventListener('submit', function (e) {
    //         e.preventDefault();

    //         if (!todoItemForm.input.value) {
    //             return;
    //         }
            
    //         let todoItem = createTodoItem(todoItemForm.input.value);

    //         todoItemForm.button.disabled = true; // Деактивація кнопки "Додати справу" після додавання

    //         todoList.append(todoItem.item);

    //         // Запис в local storage новоствореної справи

    //         localArray = localArray || [];
    //         console.log(todoItemForm.input.value);
    //         localArray.push(todoItemForm.input.value);            
    //         localStorage.setItem('localArray', JSON.stringify(localArray));
    //         localDoneIndex = localDoneIndex || [];
    //         localDoneIndex.push('0');
    //         localStorage.setItem('localDoneIndex', JSON.stringify(localDoneIndex));

    //         todoItemForm.input.value = '';
    //     });

    // }


    // // localStorage.clear();
    
})();