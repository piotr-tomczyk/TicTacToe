const Player = (name, sign) =>{
    let PlayerName = name;
    let PlayerSign = sign;
    const getName = ()=>{
        return PlayerName;
    }
    const getSign = ()=>{
        return PlayerSign;
    }
    return {
        getName,
        getSign
    };
};
const gameboard = (() => {
    var board = [
        ["","",""],
        ["","",""],
        ["","",""]
    ];
    const changeBoard = (x, y, sign) => {
        var board = getBoard();
        if (board[x][y] == ""){
            board[x][y] = sign;
            return true;
        }
        return false;
    };
    const getBoard = () => {
        return board;
    }
    const clearBoard = () => {
        board = [
            ["","",""],
            ["","",""],
            ["","",""]
        ];
        return;
    }
    return {
        changeBoard,
        getBoard, 
        clearBoard
    };
})();
const gameController = (() => {
    var Omove = false;
    var Over = false;
    var win = "";
    const Player1 = Player("1", "X");
    const Player2 = Player("2", "O");
    const makeMove = (element) => {
        let y = parseInt(element.target.id[1]);
        let x = parseInt(element.target.id[0]);
        if(Omove){
            if(gameboard.changeBoard(x, y, "O")){
                Omove = !Omove;
                win = checkWin();
                if (win == Player1.getSign()){
                    alert(Player1.getSign() + "WINS!");
                    gameboard.clearBoard();
                }
                else if (win == Player2.getSign()){
                    alert(Player2.getSign() + "WINS!");
                    gameboard.clearBoard();
                }
                else if(win == "DRAW"){
                    alert("DRAW");
                    gameboard.clearBoard();
                }
                displayController.fillTheBoard(gameboard.getBoard());
            }
            return;
        }
        if(gameboard.changeBoard(x, y, "X")){
            Omove = !Omove;
            win = checkWin();
            if (win == Player1.getSign()){
                alert(Player1.getSign() + "WINS!");
                gameboard.clearBoard();
            }
            else if (win == Player2.getSign()){
                alert(Player2.getSign() + "WINS!");
                gameboard.clearBoard();
            }
            else if(win == "DRAW"){
                alert("DRAW");
                gameboard.clearBoard();
            }
            displayController.fillTheBoard(gameboard.getBoard());
        }
        return;
    };
    const checkWin = () => {
        let board = gameboard.getBoard();
        for (var i = 0; i < 3; i++){
            if(board[i][0] == board[i][1] && board[i][1] == board[i][2] && board[i][0] != "" && board[i][1] != "" && board[i][2] != ""){
                if(Player1.getSign() == board[i][0]){
                    console.log(Player1.getSign() + "WINS!");
                }
                else{
                    console.log(Player2.getSign() + "WINS!");
                }
                return board[i][0];
            }
        }
        for (var i = 0; i < 3; i++){
            if(board[0][i] == board[1][i] && board[1][i] == board[2][i] && board[0][i] != "" && board[1][i] != "" && board[2][i] != ""){
                if(Player1.getSign() == board[0][i]){
                    console.log(Player1.getSign() + "WINS!");
                }
                else{
                    console.log(Player2.getSign() + "WINS!");
                }
                return board[0][i];
            }
        }
        if(board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != "" && board[1][1] != "" && board[2][2] != ""){
            if(Player1.getSign() == board[0][0]){
                console.log(Player1.getSign() + "WINS!");
            }
            else{
                console.log(Player2.getSign() + "WINS!");
            }
            return board[0][0];
        }
        if(board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] != "" && board[1][1] != "" && board[2][0] != ""){
            if(Player1.getSign() == board[0][2]){
                console.log(Player1.getSign() + "WINS!");
            }
            else{
                console.log(Player2.getSign() + "WINS!");
            }
            return board[0][2];
        }
        var counter = 0;
        for (var i = 0; i < 3; i++){
            for (var j = 0; j < 3; j++){
                if(board[i][j] != ""){
                    counter++;
                }
            }
        }
        if(counter == 9){
            console.log("DRAW");
            return "DRAW";
        }
    };
    const startGame = () => {
        displayController.fillTheBoard(gameboard.getBoard());
    };
    return {
        startGame, makeMove
    };
})();
const displayController = (() => {
    const parentDiv = document.createElement('div');
    parentDiv.className = "board";
    const createRow = (board, num) => {
        const parent = document.createElement('div');
        parent.className = "row";
        for(var i = 0; i < 3; i++){
            var field = document.createElement('div');
            field.className = "field";
            field.id = num.toString() + i.toString();
            field.textContent = board[i];
            field.onclick = gameController.makeMove;
            parent.appendChild(field);
        }
        return parent;
    }
    const createBoard = (board) => {
        parentDiv.appendChild(createRow(board[0], 0));
        parentDiv.appendChild(createRow(board[1], 1));
        parentDiv.appendChild(createRow(board[2], 2));
    };
    const deleteBoard = () => {
        var elements = document.getElementsByClassName("row");
        while(elements.length > 0){
            elements[0].parentNode.removeChild(elements[0]);
        }
    };
    const fillTheBoard = (board) => {
        deleteBoard();
        createBoard(board);
        document.body.appendChild(parentDiv);
    }
    return {
        fillTheBoard
    };
})();
gameController.startGame();