const gameboard = (() => {
    var board = [
        ["","",""],
        ["","",""],
        ["","",""]
    ];
    const changeBoard = (x, y, sign) => {
        //code of adding a sign into a board
    };
    const getBoard = () =>{
        return this.board;
    }
    return {
        changeBoard,
        getBoard
    };
})();

const displayController = (() => {
    const parentDiv = document.createElement('div');
    const fillTheBoard = () => {
        //creating childs of parent div and displaying them
    }
    return {
        fillTheBoard
    };
})();
const gameController = (() => {
    const startGame = () =>{
        
    };
    return {
        startGame
    };
})();
const Player = (name, sign) =>{
    let name = name;
    let sign = sign;
    const getName = ()=>{
        return this.name;
    }
    const getSign = ()=>{
        return this.sign;
    }
    return {
        getName,
        getSign
    };
};