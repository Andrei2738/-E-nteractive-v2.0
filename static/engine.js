let circle = document.querySelector('.circle');

let game1 = document.getElementById('game1');
const game1_coords = game1.getBoundingClientRect();
console.log(game1_coords.top, game1_coords.right);

let game2 = document.getElementById('game2');
const game2_coords = game2.getBoundingClientRect();
console.log(game2_coords.top, game2_coords.right);

let game3 = document.getElementById('game3');
const game3_coords = game3.getBoundingClientRect();
console.log(game3_coords.top, game3_coords.right);

let game4 = document.getElementById('game4');
const game4_coords = game4.getBoundingClientRect();
console.log(game4_coords.top, game4_coords.right);

popUpCreated = false;

let moveBy = 5;
window.addEventListener('load', () => {
    circle.style.position = 'absolute';
    circle.style.left = '50vw';
    circle.style.top = '50vh';
    circle.style.transform = 'translate(-50%, -50%)';
});

window.addEventListener('keydown', (e) => {
    let companion = document.getElementById('companion');
    const companion_coords = companion.getBoundingClientRect();
    console.log(companion_coords)


    if ((Math.abs(companion_coords.top - (game1_coords.top + 160 )) <= 100) && (Math.abs(companion_coords.right - game1_coords.right) <= 100)  ){
        console.log("Touching 1")
        if (popUpCreated) {
            const popUp = document.querySelector('.pop-up');
            popUp.remove();
            popUpCreated = false;
          }
        document.getElementById("game1").style.backgroundColor = 'red';
        document.getElementById("game2").style.backgroundColor = '';
        document.getElementById("game3").style.backgroundColor = '';
        document.getElementById("game4").style.backgroundColor = '';
        popUpCreated = true;
          const popUp = document.createElement("div");
          popUp.className = "pop-up";
          const message = document.createElement("p");
          message.textContent = "Play game 1?";
          const button = document.createElement("button");
          button.textContent = "Play";
          button.onclick = () => {
            window.location.href = "http://127.0.0.1:4000/level1";
          };
          popUp.appendChild(message);
          popUp.appendChild(button);
          document.body.appendChild(popUp);


    }
    else if ((Math.abs(companion_coords.top - (game2_coords.top +160 )) <= 100) && (Math.abs(companion_coords.right - game2_coords.right) <= 100)  ){
        console.log("Touching 2")
        if (popUpCreated) {
            const popUp = document.querySelector('.pop-up');
            popUp.remove();
            popUpCreated = false;
          }
        document.getElementById("game2").style.backgroundColor = 'red';
        document.getElementById("game1").style.backgroundColor = '';
        document.getElementById("game3").style.backgroundColor = '';
        document.getElementById("game4").style.backgroundColor = '';
        popUpCreated = true;
        const popUp = document.createElement("div");
          popUp.className = "pop-up";
          const message = document.createElement("p");
          message.textContent = "Play game 2?";
          const button = document.createElement("button");
          button.textContent = "Play";
          button.onclick = () => {
            window.location.href = "http://127.0.0.1:4000/level2";
          };
          popUp.appendChild(message);
          popUp.appendChild(button);
          document.body.appendChild(popUp);
    }
    else if ((Math.abs(companion_coords.top - (game3_coords.top + 160 )) <= 100) && (Math.abs(companion_coords.right - game3_coords.right) <= 100)  ){
        console.log("Touching 3")
        if (popUpCreated) {
            const popUp = document.querySelector('.pop-up');
            popUp.remove();
            popUpCreated = false;
          }
        document.getElementById("game3").style.backgroundColor = 'red';
        document.getElementById("game2").style.backgroundColor = '';
        document.getElementById("game1").style.backgroundColor = '';
        document.getElementById("game4").style.backgroundColor = '';
        popUpCreated = true;
        const popUp = document.createElement("div");
          popUp.className = "pop-up";
          const message = document.createElement("p");
          message.textContent = "Play game 3?";
          const button = document.createElement("button");
          button.textContent = "Play";
          button.onclick = () => {
            window.location.href = "http://127.0.0.1:4000/level3";
          };
          popUp.appendChild(message);
          popUp.appendChild(button);
          document.body.appendChild(popUp);
    }
    else if ((Math.abs(companion_coords.top - (game4_coords.top + 160 )) <= 100) && (Math.abs(companion_coords.right - game4_coords.right) <= 100)  ){
        console.log("Touching 4")
        if (popUpCreated) {
            const popUp = document.querySelector('.pop-up');
            popUp.remove();
            popUpCreated = false;
          }
        document.getElementById("game4").style.backgroundColor = 'red';
        document.getElementById("game2").style.backgroundColor = '';
        document.getElementById("game3").style.backgroundColor = '';
        document.getElementById("game1").style.backgroundColor = '';
        popUpCreated = true;
        const popUp = document.createElement("div");
          popUp.className = "pop-up";
          const message = document.createElement("p");
          message.textContent = "Play game 4?";
          const button = document.createElement("button");
          button.textContent = "Play";
          button.onclick = () => {
            window.location.href = "http://127.0.0.1:4000/level4";
          };
          popUp.appendChild(message);
          popUp.appendChild(button);
          document.body.appendChild(popUp);

    }


    switch (e.key) {
        case 'ArrowLeft':
            circle.style.left = parseInt(circle.style.left) - moveBy + 'vw';
            console.log("companion coords (Top, Right)=" , companion_coords.top, companion_coords.left)
            break;
        case 'ArrowRight':
            circle.style.left = parseInt(circle.style.left) + moveBy + 'vw';
            console.log("companion coords (Top, Right)=" , companion_coords.top, companion_coords.left)
            break;
        case 'ArrowUp':
            circle.style.top = parseInt(circle.style.top) - moveBy + 'vh';
            console.log("companion coords (Top, Right)=" , companion_coords.top, companion_coords.right)
            break;
        case 'ArrowDown':
            circle.style.top = parseInt(circle.style.top) + moveBy + 'vh';
            console.log("companion coords (Top, Right)=" , companion_coords.top, companion_coords.right)
            break;

    }
});

