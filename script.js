function wrong()
{

    document.querySelector("#button1").style.background = 'red';
    document.querySelector("#button2").style.background = 'red';
    document.querySelector('#button3').style.background = 'red';
    document.querySelector('#button4').style.background = 'red';
    document.querySelector('#cabeca').style.background = 'red';
    document.querySelector('#jumbo').style.background = 'red';
    document.querySelector('#cabeca').innerHTML = 'ERRADO!';
    document.querySelector('#errado1').innerHTML = 'Incorrect!';
    document.querySelector("#button1").disabled = true;
    document.querySelector("#button2").disabled = true;
    document.querySelector('#button3').disabled = true;
    document.querySelector('#button4').disabled = true;
}

function right(){
    document.querySelector("#button1").style.background = 'red';
    document.querySelector("#button2").style.background = '#32CD32';
    document.querySelector('#button3').style.background = 'red';
    document.querySelector('#button4').style.background = 'red';
    document.querySelector("#button1").disabled = true;
    document.querySelector("#button2").disabled = true;
    document.querySelector('#button3').disabled = true;
    document.querySelector('#button4').disabled = true;
    document.querySelector('#cabeca').innerHTML = 'Quase la, Mais uma pergunta!';
    document.querySelector('#submit_box').disabled = false;
    document.querySelector('#errado1').innerHTML = 'Correct!';
}

function text(){
    var text = document.querySelector('#resposta').value;
    text = text.toLowerCase()
    if (text == "colombo", "cristovão colombo"){
        document.querySelector('#resposta').style.background = '#32CD32';
        document.querySelector('#errado2').innerHTML = 'Correct!';
        document.querySelector('#submit_box').disabled = true;
        document.querySelector('#cabeca').innerHTML = 'Parabens! Voce completou o quiz!';
        document.querySelector('#cabeca').style.background = '#32CD32';
        document.querySelector('#jumbo').style.background = '#32CD32';
    }
    else{
        document.querySelector('#resposta').style.background = 'red';
        document.querySelector('#errado2').innerHTML = 'Incorrect!';
        document.querySelector('#submit_box').disabled = true;
        document.querySelector('#cabeca').innerHTML = 'ERRADO!';
        document.querySelector('#cabeca').style.background = 'red';
        document.querySelector('#jumbo').style.background = 'red';
    }
    }
