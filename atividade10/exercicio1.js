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
    for(i = 1; i < 13; i++){
        ganho = window.prompt(`Ganhos do mês ${i}`)
        ganhoTotal += ganho
        gasto = window.prompt(`Gastos do mês ${i}`)
        gastoTotal += gasto
    }
    if(ganhoTotal > gastoTotal){
        ganhoFinal=(ganhoTotal-gastoTotal)/12
        window.alert(`O lucro foi de: ${ganhoFinal}`)
    } else if(gastoTotal > gastoTotal){
        gastoFinal=(gastoTotal-ganhoTotal)/12
        window.alert(`O prejuízo foi de: ${gastoFinal}`)
    }else {
        window.alert(`Não teve ganhos nem gastos`)
    } 
}

function decrescente(){
   var numeros = [];
   for(i = 1; i < 5; i++){
    numeros[i]= prompt(`Digite o número ${i}`)
   }
   numeros.sort((a, b) => b - a);
   window.alert(`Em ordem decrescente fica: ${numeros}`)
}

function transformar(){
    let numero = 0;
    numero = window.prompt('Digite um número qualquer, seja ele par ou ímpar')
    if ( numero % 2 == 0){
        window.alert(`O seu número agora é impar`)
    }
    else{
        window.alert(`O seu número agora é par`)
    }
}

function alfabeto(){
    let letrinha = window.prompt(`Digite uma letra qualquer, seja vogal ou consoante`)
    if (letrinha == a || letrinha == e || letrinha==i || letrinha==o || letrinha==u|| letrinha==A || letrinha==E || letrinha==I|| letrinha==O || letrinha==U){
        window.alert(`Sua letra agora é uma consoante`)
    }
    else{
        window.alert(`Sua letra agora é uma vogal`)
    }
}

function picolezinho(){
    let i = 0;
    let opcao="";
    var picole = [['Chocolate', 1.50], ['Morango', 2.50], ['Creme', 2.50], ['Manga', 3.20], ['Melancia', 3.40], ['VanillaIce', 3.00], ['CeuAzul',3.60], ['Brownie', 4.00], ['Hawaiano',5.00]]
    for(i = 0; i < picole.length; i++){
        console.log(picole[i][0]+':'+picole[i][1]);
    }
    opcao = prompt(`Digite o sabor de sua escolha`)

    for(i=0; i<picole.length;i++){
        if(opcao=== picole[i][0]){
            console.log(`O picole de sabor ${picole[i][0]} custa R$:${picole[i][1]}`)
        }
    }
}