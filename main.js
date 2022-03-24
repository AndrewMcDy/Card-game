(function () {
    
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

    let anyArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log(anyArray);
    shuffleCards(anyArray);
    console.log(anyArray);
    
})();