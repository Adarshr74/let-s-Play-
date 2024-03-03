//creating all the Probablity wins 

let button = document.querySelectorAll(".btn");
let winstreak = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
];


//Designing the Reset buttons 
let reset = document.getElementById("reset");
reset.addEventListener("mouseover", () => {
    reset.style.borderColor = "red";
    reset.style.boxShadow = "5px 5px 0px 0px rgb(63, 39, 44)";
    reset.style.transitionDuration = ".3s";
    reset.style.position = "relative";
    reset.style.bottom = "1px";
    reset.style.right = "1px";
    reset.innerText = "Exit"
});

reset.addEventListener("mouseout", () => {
    reset.style.color = "black";
    reset.style.borderColor = "black";
    reset.style.boxShadow = "none";
    reset.style.transitionDuration = ".3s";
    reset.style.position = "relative";
    reset.style.bottom = "-1px";
});

reset.addEventListener("click", () => {
    button.forEach((set) => {
        set.innerText = "";
        set.disabled = false;
        hidden.style.visibility = "hidden";

    })
})



//accessing the buttons 

let value = "true";
// console.log(btn)

//Taking input

button.forEach((buttons) => {
    buttons.addEventListener("click", () => {
        if (value === "true") {
            buttons.innerText = "X";
            value = "false";
            check();


        }
        else if (value === "false") {
            buttons.innerText = "o";
            value = "true";
            check();
        }
        buttons.disabled = true;


    })
});

//checking the winner
function check() {
    for (let positions of winstreak) {
        let val1 = button[positions[0]].innerText
        let val2 = button[positions[1]].innerText
        let val3 = button[positions[2]].innerText
        if (val1 != "" && val2 != "" && val3 != "") {
            if (val1 === val2 && val2 === val3) {
                let hidden = document.getElementById("hidden");
                hidden.innerText = `${val1} is the Winner`
                console.log("won");
                hidden.style.visibility = "visible";
                let start=document.getElementById("start");
                start.style.visibility="visible"

                let body=document.querySelector("body");
                body.style.filter("blur(18px)");
            }


        }
    }
} 
