"use strict";
window.onload = function() {
    var arr = ["", "", "", "", "", "", "", "", ""];
    var chances = {};
    var squares = document.querySelectorAll("#board div");
    var next = 1;
    var status = document.getElementById("status");

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];




    for (var i = 0; i < squares.length; i++) {

        squares[i].classList.add("square");
        chances[i] = squares[i];
        squares[i].addEventListener("click", function() {

            for (var a in chances) {
                if (this == squares[a]) {
                    arr[a] = next;
                }
            }
            if (
                arr[0] == next && arr[1] == next && arr[2] == next ||
                arr[3] == next && arr[4] == next && arr[5] == next ||
                arr[6] == next && arr[7] == next && arr[8] == next ||
                arr[0] == next && arr[3] == next && arr[6] == next ||
                arr[1] == next && arr[4] == next && arr[7] == next ||
                arr[2] == next && arr[5] == next && arr[8] == next ||
                arr[0] == next && arr[4] == next && arr[8] == next ||
                arr[2] == next && arr[4] == next && arr[6] == next
            ) {

                status.classList.add("you-won");
                if (next == 1) {
                    status.textContent = "Congratulations! X is the winner!";
                } else {
                    status.textContent = "Congratulations! O is the winner!";
                }
            }
            if (next == 1) {
                this.innerHTML = "X";
                this.classList.add("X");
                this.style.pointerEvents = 'none';
                next = 2;

            } else if (next == 2) {
                this.innerHTML = "O";
                this.classList.add("O");
                this.style.pointerEvents = 'none';
                next = 1;

            }


        });


        squares[i].addEventListener("mouseover", function() {
            this.classList.add("hover");
        });


        squares[i].addEventListener("mouseout", function() {
            this.classList.remove("hover");
        });


        document.querySelector("button").addEventListener("click", function() {
            for (var square of squares) {
                square.style.pointerEvents = 'auto';
                square.classList.remove("X");
                square.classList.remove("O");
                square.textContent = "";
            }

            next = 1;
            arr = ["", "", "", "", "", "", "", "", ""];
            status.textContent = "Move your mouse over a square and click to play an X or an O.";





        });

    }

}