function voltar(){ //Apaga o último caracter selecionado no visor

    var res = document.getElementById('visor').innerHTML;
    document.getElementById('visor').innerHTML = res.substring(0, res.length -1);

}

function limpar(){ //Limpa todo o visor

    document.getElementById('visor').innerHTML = "";

}

function conta(){ //O cálculo é realizado pela função conta()

    var res = document.getElementById('visor').innerHTML;
    if(res)
    {
        document.getElementById('visor').innerHTML = eval(res); //Essa aqui é a função que retorna o valor da expressão da string. Uma descoberta sensacional! ^^
    }
    else
    {
        document.getElementById('visor').innerHTML = "ERROR";
    }

}

function putnum(num){ //Os números e caracteres especiais são inseridos no visor por esta função

    var num1 = document.getElementById('visor').innerHTML;
    document.getElementById('visor').innerHTML = num1 + num;

}