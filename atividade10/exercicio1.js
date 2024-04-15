function somarnumeros(){
    let soma=0;
    let continuar=true;
    while(continuar){
        let numero=parseFloat(prompt("Digite o número 0 para encerrar :"));
    
        if (!isNaN(numero)){
            soma += numero;
        }
        else{
            alert("Digite um número válido");
        }

        continuar=confirm("Deseja adicionar mais números?");
    }
    alert("A soma dos números é:" + soma);
}

var contagem = 11;

function lancarfoguete(){
    let regressiva = document.getElementById('teste');
    if (contagem > 0) {
        regressiva.innerHTML = contagem;
        contagem--;
        setTimeout(lancarfoguete, 1000);
        regressiva.innerHTML = (contagem);
    }
    else {
        regressiva.innerHTML = 'Lançou';
    }
}

function financeiro(){
    let gasto = 0;
    let ganho = 0;
    let ganhoTotal=0;
    let gastoTotal=0;
    let ganhoFinal = 0;
    let gastoFinal = 0;
    let i = 0;
    for(i = 1; i < 3; i++){
        ganho = window.prompt(`Ganhos do mês ${i}`)
        ganhoTotal += ganho
        gasto = window.prompt(`Gastos do mês ${i}`)
        gastoTotal += gasto
    }
    if(ganhoTotal > gastoTotal){
        ganhoFinal=(ganhoTotal-gastoTotal)/2
        window.alert(`O lucro foi de: ${ganhoFinal}`)
    } else if(gastoTotal > gastoTotal){
        gastoFinal=(gastoTotal-ganhoTotal)/2
        window.alert(`O prejuízo foi de: ${gastoFinal}`)
    }else {
        window.alert(`Não teve ganhos nem gastos`)
    } 
}
