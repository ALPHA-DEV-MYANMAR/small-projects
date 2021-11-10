let cards = document.getElementById('cards');
let pianoMemory = [];
let list = document.getElementById('list');

function run(x) {
    const a = new Audio(`sound/${x}.mp3`);
    a.play();
    cards.value += x+'.';
}

function saveChord(){
    let input = cards.value;
    pianoMemory.push(input);
    cards.value = "";
    list.innerHTML = "";    
    pianoMemory.map(function(el,index){
        list.innerHTML += `<li>${el} <button onclick="rePlay(${index})">reply</button> </li>`;
    });
}

function rePlay(x){
    let forPlay = pianoMemory[x].split(".");
    console.log(forPlay.pop());
    runMemory(forPlay,200);
    cards.value = "";
}

function runMemory(arr,delay){
    let x = delay;
    arr.map(function(el,index){
        setTimeout(run,x,el);
        x += delay;
    });
}

document.addEventListener('keyup',function(e){
    e.preventDefault();
    let current = e.keyCode;
    console.log(e.keyCode);
    if(current == 65){

        run('A4');
    }
    else if(current == 83){
        console.log('B4');
        run('B4');
    }
    else if(current == 68){
        console.log('C4');
        run('C4');
    }
    else if(current == 70){
        console.log('C5');
        run('C5');
    }
    else if(current == 74){
        console.log('D4');
        run('D4');
    }
    else if(current == 75){
        console.log('E4');
        run('E4');
    }
    else if(current == 76){
        console.log('F4');
        run('F4');
    }
    else if(current == 186){
        console.log('G4');
        run('G4');
    }
})

document.activeElement('keyup',function(e){
    e.preventDefault();
    let enter = e.keyCode;
    console.log(enter);
    if(enter == 13){
        alert('5650');
    }
});



