// A mess

var i = 0;
var imagini = [];
var timpTransitie = 3000;

imagini[0] = 'cpu.png';
imagini[1] = 'disk.png';
imagini[2] = 'memory.png';
imagini[3] = 'network0.png';
imagini[4] = 'processes.png';
imagini[5] = 'services.png';

function hide() {
    document.getElementById('hide').style.display = 'none';
    document.getElementById('hidden').style.display = 'inline';
}

function onStart() {
    document.getElementById('hidden').style.display = 'none';
}


function switchBehaviour() {
    document.show.src = imagini[i];
    if (i < imagini.length - 1) {
        i++;
    }
    else {
        i = 0;
    }

    setTimeout("switchBehaviour()", timpTransitie);
}
