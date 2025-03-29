let weddingDate = document.getElementsByClassName("wedding-date")[0];
let time = document.getElementsByClassName("text-time")[0];

dataCasamento = setarDia();


weddingDate.innerHTML = dataCasamento.data;
countDown(dataCasamento.dataCompleta, time);
setInterval(function(){
    countDown(dataCasamento.dataCompleta, time);
    }, 1000);


if (time.innerHTML == "Feliz Casamento!") {
    time.style.fontSize = "400%";
    time.style.color = "#be1b80";
    time.style.textAlign = "center";
    time.style.fontFamily = "Segoe Script, Tangerine, cursive";
    weddingDate.style.fontFamily = "Segoe Script, Tangerine, cursive";
}


console.log("Data do Casamento: ", dataCasamento.data); 
console.log("Faltam: ", time.innerHTML, "para o Casamento!");

function setarDia(){
    const date = new Date("2026","05","04", "13", "35", "00", "00");
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    if (day < 10) {
        day = "0" + day;
    }
    if (day == 0) {
        day = "";
    }
    if (month < 10) {
        month = "0" + month;
    }
    let data = day + "-" + month + "-" + year;
    let dataCompleta = date;
    return {data, dataCompleta};
}

function countDown(dataCasamento, time){
    console.log("AAA")
    let data = new Date(dataCasamento);
    let hoje = new Date();
    let diff = data - hoje;
    
    let dias = (Math.floor(diff / (1000 * 60 * 60 * 24))) + ':';
    let horas = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + ':';
    let minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)) + ':';
    let segundos = Math.floor((diff % (1000 * 60)) / 1000);
    
    if (segundos < 0) {
        time.innerHTML = "Feliz Casamento!";
        return;
    }

    if (parseInt(dias) <= 0) {
        dias = '';
        if(parseInt(horas) <= 0) {
            horas = '';
            if(parseInt(minutos) <= 0) {
                minutos = '';
                if(parseInt(segundos) <= 0) {
                    segundos = '';
                }
            }
        }
    }

    if(parseInt(horas) < 10){
        horas = "0" + horas;
    }

    if(parseInt(minutos) < 10){
        minutos = "0" + minutos;
    }

    if(parseInt(segundos) < 10){
        segundos = "0" + segundos;
    }

    time.innerHTML = dias+horas+minutos+segundos;
    return time.innerHTML;
}