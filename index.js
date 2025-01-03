let Matriz = [];
let Vetor = [];
let VetorA = []
let VetorB = []
let VetorAM = []
let VetorBM = []
let VetorME = []
let VetorSoma = []
let MatrizOriginal = []
let MatrizA = []
let MatrizB = []
let MatrizSoma = []
let MatrizMM = []
let MatrizMultiplicação = []
let MatrizMEA = []
let MatrizMEB = []
let MatrizMultiplicaçãoME = []
let MatrizMultiplicaçãoM = []
let MatrizG = []
let MatrizS = []
let Nlinha = 0;
let NColuna = 0;
let contagemM = 0;
let contagemV = 0;
let contagemMO = 0;
function Criarmatriz(){
  const Qtdlinha = document.getElementById("QtdLinhas").value;
  const Qtdcolunas = document.getElementById("QtdColunas").value;
  Nlinha = Qtdlinha
  NColuna = Qtdcolunas
  const Numeross = document.getElementById("NumerosMatriz").value;
  const Numeros = Numeross.split(',').map(Number);
  if(Numeros.length > (Qtdlinha * Qtdcolunas)){
    alert("a quantidade de números e maior que a de elementos!");
}
else if(Numeros.length < (Qtdlinha * Qtdcolunas)){
    alert("a quantidade de números e menor que a de elementos!")
}
else{
  for(var i = 0, c = 0; i < Qtdlinha; i++){
      Matriz [i] = [];
      for(var j = 0; j < Qtdcolunas; j++){
          Matriz[i][j] = Numeros[c];
          c++;
      }
  }
  if(contagemM == 0){
  alert("Matriz Criada!");
  contagemM++;
  }
  else{
    alert("Matriz Atualizada!");
    contagemM++;
  }



}

}
function Acharelemento(){
  const Linha = document.getElementById("LinhaMatrizGet").value;
  const Coluna = document.getElementById("ColunaMatrizGet").value;
  if (Linha > Nlinha || Coluna > NColuna){
    alert("Algum Valor Maior que o da matriz");
  }
  const resultado = Matriz[Linha - 1][Coluna - 1];
  document.getElementById("GetResult").value = resultado;
}
function SetarValor(){
    const linha = document.getElementById("LinhaMatrizSet").value;
    const coluna = document.getElementById("ColunaMatrizSet").value;
    const Valor = document.getElementById("ValorSet").value;
    Matriz[linha - 1][coluna - 1] = Valor;
    alert(`Valor da linha ${linha} coluna ${coluna} Atualizado para ${Valor}`)
}
function Limparmatriz(){
    document.getElementById("QtdLinhas").value = "";
    document.getElementById("QtdColunas").value = "";
    document.getElementById("NumerosMatriz").value = "";
    document.getElementById("LinhaMatrizGet").value = "";
    document.getElementById("ColunaMatrizGet").value = "";
    document.getElementById("GetResult").value = "";
    document.getElementById("LinhaMatrizSet").value = "";
    document.getElementById("ColunaMatrizSet").value = "";
    document.getElementById("ValorSet").value = "";
}
function LimparVetor(){
    document.getElementById("QtdElementos").value = "";
    document.getElementById("NumerosVetor").value = "";
    document.getElementById("IndiceGet").value = "";
    document.getElementById("GetResultV").value = "";
    document.getElementById("IndiceSet").value = "";
    document.getElementById("ValorSetV").value = "";
}
function CriarVetor(){
    const QtdElementos = document.getElementById("QtdElementos").value;
    const Numeross = document.getElementById("NumerosVetor").value;
    const Numeros = Numeross.split(",").map(Number);
    if(Numeros.length > QtdElementos){
        alert("a quantidade de números e maior que a de elementos!");
    }
    if(Numeros.length < QtdElementos){
        alert("a quantidade de números e menor que a de elementos!");
    }
    else{
    for(var i = 0, c = 0; i < QtdElementos; i++, c++){
        Vetor[i] = Numeros[c];
    }
    if(contagemV == 0){
    alert("O vetor foi criado!");
    contagemV++
    }
    else{
        alert("O vetor foi atualizado!");
        contagemV++
        }
}

}
function GetVetor(){
    const Indice = document.getElementById("IndiceGet").value;
    const resultado = Vetor[Indice - 1];
    if(Indice > Vetor.length){
        alert("o número do indice é maior que o tamanho do vetor")
    }
    else{
    document.getElementById("GetResultV").value = resultado;
    }
}
function SetarVetorV(){
    const Indice = document.getElementById("IndiceSet").value;
    const valor = document.getElementById("ValorSetV").value;
    if(Indice > Vetor.length){
        alert("o número do indice é maior que o tamanho do vetor")
    }
    else{
    Vetor[Indice - 1] = valor;
    alert(`O valor de Indice ${Indice} foi atualizado para ${valor}`);
    }
}
function TransporMatriz(){
   const QtdLinhas = document.getElementById("QtdLinhasO").value;
   const QtdColunas = document.getElementById("QtdColunasO").value;
   const NumerosS = document.getElementById("NumerosMatrizO").value;
   const Numeros = NumerosS.split(",").map(Number);
   let MatrizTransposta = [];
   if(Numeros.length > (QtdColunas * QtdLinhas)){
    alert("a quantidade de números e maior que a de elementos");
   }
else if(Numeros.length < (QtdLinhas * QtdColunas)){
    alert("a quantidade de números e menor que a de elementos!")
}
   else{
   for(var i = 0, c = 0; i < QtdLinhas; i++){
    MatrizOriginal[i] = []
    for(var j = 0; j < QtdColunas; j++, c++){
        MatrizOriginal[i][j] = Numeros[c];
    }
   }
   for(var I = 0; I < QtdColunas; I++){
    MatrizTransposta[I] = [];
    for(var g = 0; g < QtdLinhas; g++){
        MatrizTransposta[I][g] = MatrizOriginal[g][I]
    }
   }


   const table = document.getElementById("MatrizTranspostaT");
   table.innerHTML = "";
   MatrizTransposta.forEach(row =>{
    const tr = document.createElement("tr");
    row.forEach(cell => {
        const td  = document.createElement("td");
        td.textContent = cell;
        tr.appendChild(td);
    })
    table.appendChild(tr);
   })

}
}
function LimparMatrizT(){
    document.getElementById("QtdLinhasO").value = ""
    document.getElementById("QtdColunasO").value = ""
    document.getElementById("NumerosMatrizO").value = ""
    document.getElementById("MatrizTranspostaT").innerHTML = ""
}
function SomarMatrizes(){
    const QtdLinhasA = document.getElementById("QtdLinhasA").value
    const QtdColunasA = document.getElementById("QtdColunasA").value
    const NumerosSA = document.getElementById("NumerosMatrizA").value
    const NumerosA = NumerosSA.split(",").map(Number);
    const QtdLinhasB = document.getElementById("QtdLinhasB").value
    const QtdColunasB = document.getElementById("QtdColunasB").value
    const NumerosSB = document.getElementById("NumerosMatrizB").value
    const NumerosB = NumerosSB.split(",").map(Number);
    if(NumerosA.length > (QtdLinhasA * QtdColunasA)){
    alert("a quantidade de números de A e maior que a de elementos!");
}
    if(NumerosA.length < (QtdLinhasA * QtdColunasA)){
    alert("a quantidade de números de A e menor que a de elementos!")
}
    if(NumerosB.length > (QtdLinhasB * QtdColunasB)){
    alert("a quantidade de números de B e maior que a de elementos!");
}
    if(NumerosB.length < (QtdLinhasB * QtdColunasB)){
    alert("a quantidade de números de B e menor que a de elementos!")
}
if(NumerosB.length < (QtdLinhasB * QtdColunasB) && NumerosA.length < (QtdLinhasA * QtdColunasA)){
    alert("a quantidade de números de A e de B sao menores que a de elementos!")
}
if(NumerosB.length > (QtdLinhasB * QtdColunasB) && NumerosA.length > (QtdLinhasA * QtdColunasA)){
    alert("a quantidade de números de A e de B sao maiores que a de elementos!")
}
if(QtdLinhasA != QtdColunasB || QtdColunasA != QtdColunasB){
    alert("as ordens das matrizes estão diferentes!")
}
else{
    for(var i = 0, c = 0; i < QtdLinhasA; i++){
        MatrizA [i] = [];
        for(var j = 0; j < QtdColunasA; j++, c++){
            MatrizA[i][j] = NumerosA[c]
        }
    }
    for(var i = 0, c = 0; i < QtdLinhasB; i++){
        MatrizB [i] = [];
        for(var j = 0; j < QtdColunasB; j++, c++){
            MatrizB[i][j] = NumerosB[c]
        }
    }
    for(var i = 0; i < QtdLinhasA; i++){
        MatrizSoma [i] = []
        for(var j = 0; j < QtdColunasA; j++){
            MatrizSoma[i][j] = MatrizA[i][j] + MatrizB[i][j]    
        }
    }

    const table = document.getElementById("SomaMatrizes");
    table.innerHTML = "";
    MatrizSoma.forEach(row =>{
     const tr = document.createElement("tr");
     row.forEach(cell => {
         const td  = document.createElement("td");
         td.textContent = cell;
         tr.appendChild(td);
     })
     table.appendChild(tr);
    })

}
}
function LimparSomaM(){
    document.getElementById("QtdLinhasA").value = ""
    document.getElementById("QtdColunasA").value = ""
    document.getElementById("NumerosMatrizA").value = ""
    document.getElementById("QtdLinhasB").value = ""
    document.getElementById("QtdColunasB").value = ""
    document.getElementById("NumerosMatrizB").value = ""
    document.getElementById("SomaMatrizes").innerHTML = ""
}
function SomarVetores(){
const QtdElementosA = document.getElementById("QtdElementosA").value
const NumerosSA = document.getElementById("NumerosVetorA").value
const NumerosA = NumerosSA.split(",").map(Number)
const QtdElementosB = document.getElementById("QtdElementosB").value
const NumerosSB = document.getElementById("NumerosVetorB").value
const NumerosB = NumerosSB.split(",").map(Number)
if(NumerosA.length > QtdElementosA){
        alert("a quantidade de números de A e maior que a de elementos!");
    }
    if(NumerosA.length < QtdElementosA){
        alert("a quantidade de números de A e menor que a de elementos!");
    }
    if(NumerosB.length > QtdElementosB){
        alert("a quantidade de números  de B e maior que a de elementos!");
    }
    if(NumerosB.length < QtdElementosB){
        alert("a quantidade de números de B e menor que a de elementos!");
    }
    if(QtdElementosA != QtdElementosB){
        alert("a quantidade de elementos dos vetores estão diferentes!")
    }
    else{
for(var i = 0; i < QtdElementosA; i++){
    VetorA[i] = NumerosA[i]
}
for(var i = 0; i < QtdElementosB; i++){
    VetorB[i] = NumerosB[i]
}
for(var i = 0; i < QtdElementosA; i++){
    VetorSoma[i] = VetorA[i] + VetorB[i]
}

const table = document.getElementById("SomaVetores");
table.innerHTML = "";
    const tr = document.createElement("tr");
    VetorSoma.forEach(cell => {
        const td  = document.createElement("td");
        td.textContent = cell;
        tr.appendChild(td);
    })
    table.appendChild(tr);
}
}
function MultiplicarMatriz(){
    const QtdLinhasMM = document.getElementById("QtdLinhasMM").value;
    const QtdColunasMM = document.getElementById("QtdColunasMM").value;
    const NumerosSMM = document.getElementById("NumerosMatrizMM").value
    const NumerosMM = NumerosSMM.split(",").map(Number);
    const NumeroMM = document.getElementById("NumeroMult").value
    if(NumerosMM.length > (QtdLinhasMM * QtdColunasMM)){
    alert("a quantidade de números da matriz e maior que a de elementos!");
}
    if(NumerosMM.length < (QtdLinhasMM * QtdColunasMM)){
    alert("a quantidade de números da matriz e menor que a de elementos!")
}
else{

    for(var i = 0, c = 0; i < QtdLinhasMM; i++){
        MatrizMM [i] = [];
        for(var j = 0; j < QtdColunasMM; j++, c++){
            MatrizMM[i][j] = NumerosMM[c]
        }
    }
    for(var i = 0; i < QtdLinhasMM; i++){
        MatrizMultiplicação [i] = [];
        for(var j = 0; j < QtdColunasMM; j++){
            MatrizMultiplicação[i][j] = MatrizMM [i][j] * NumeroMM

        }
    }
    const table = document.getElementById("MatrizMultiplicada");
    table.innerHTML = "";
    MatrizMultiplicação.forEach(row =>{
     const tr = document.createElement("tr");
     row.forEach(cell => {
         const td  = document.createElement("td");
         td.textContent = cell;
         tr.appendChild(td);
     })
     table.appendChild(tr);
    })

}
}

function LimparSomaV(){
    document.getElementById("QtdElementosA").value = ""
    document.getElementById("NumerosVetorA").value = ""
    document.getElementById("QtdElementosB").value = ""
    document.getElementById("NumerosVetorB").value = ""
    document.getElementById("SomaVetores").innerHTML = ""
}
function MultiplicarMatrizes(){
    const QtdLinhasA = document.getElementById("QtdLinhasAM").value
    const QtdColunasA = document.getElementById("QtdColunasAM").value
    const NumerosSA = document.getElementById("NumerosMatrizAM").value
    const NumerosA = NumerosSA.split(",").map(Number);
    const QtdLinhasB = document.getElementById("QtdLinhasBM").value
    const QtdColunasB = document.getElementById("QtdColunasBM").value
    const NumerosSB = document.getElementById("NumerosMatrizBM").value
    const NumerosB = NumerosSB.split(",").map(Number);
    if(NumerosA.length > (QtdLinhasA * QtdColunasA)){
    alert("a quantidade de números de A e maior que a de elementos!");
}
    if(NumerosA.length < (QtdLinhasA * QtdColunasA)){
    alert("a quantidade de números de A e menor que a de elementos!")
}
    if(NumerosB.length > (QtdLinhasB * QtdColunasB)){
    alert("a quantidade de números de B e maior que a de elementos!");
}
    if(NumerosB.length < (QtdLinhasB * QtdColunasB)){
    alert("a quantidade de números de B e menor que a de elementos!")
}
if(NumerosB.length < (QtdLinhasB * QtdColunasB) && NumerosA.length < (QtdLinhasA * QtdColunasA)){
    alert("a quantidade de números de A e de B sao menores que a de elementos!")
}
if(NumerosB.length > (QtdLinhasB * QtdColunasB) && NumerosA.length > (QtdLinhasA * QtdColunasA)){
    alert("a quantidade de números de A e de B sao maiores que a de elementos!")
}
if(QtdLinhasA != QtdColunasB || QtdColunasA != QtdColunasB){
    alert("as ordens das matrizes estão diferentes!")
}
    for(var i = 0, c = 0; i < QtdLinhasA; i++){
        MatrizMEA[i] = []
        for(var j = 0; j < QtdColunasA; j++, c++){
            MatrizMEA[i][j] = NumerosA[c]
        }
    }
    for(var i = 0, c = 0; i < QtdLinhasB; i++){
        MatrizMEB[i] = []
        for(var j = 0; j < QtdColunasB; j++, c++){
            MatrizMEB[i][j] = NumerosB[c]
        }
    }
    for(var i = 0; i < QtdLinhasA; i++){
        MatrizMultiplicaçãoME[i] = []
        for(var j = 0; j < QtdLinhasA; j++){
            MatrizMultiplicaçãoME[i][j] = MatrizMEA[i][j] * MatrizMEB[i][j]
        }
    }
    const table = document.getElementById("ResultadoMatrizesME");
    table.innerHTML = "";
    MatrizMultiplicaçãoME.forEach(row =>{
     const tr = document.createElement("tr");
     row.forEach(cell => {
         const td  = document.createElement("td");
         td.textContent = cell;
         tr.appendChild(td);
     })
     table.appendChild(tr);
    })
   
}
function LimparMPE(){
    document.getElementById("QtdLinhasMM").value = ""
    document.getElementById("QtdColunasMM").value = ""
    document.getElementById("NumerosMatrizMM").value = ""
    document.getElementById("QtdLinhasMM").value = ""
    document.getElementById("QtdColunasMM").value = ""
    document.getElementById("NumerosMatrizMM").value = ""
    document.getElementById("NumeroMult").value = ""
    document.getElementById("MatrizMultiplicada").innerHTML = ""
}
function LimparME(){
    document.getElementById("QtdLinhasAM").value = ""
    document.getElementById("QtdColunasAM").value = ""
    document.getElementById("NumerosMatrizAM").value = ""
    document.getElementById("QtdLinhasBM").value = ""
    document.getElementById("QtdColunasBM").value = ""
    document.getElementById("NumerosMatrizBM").value = ""
    document.getElementById("ResultadoMatrizesME").innerHTML = ""
}
function MultiplicarVetores(){
    const QtdElementosA = document.getElementById("QtdElementosAM").value
    const ElementosAS = document.getElementById("NumerosVetorAM").value
    const NumerosA = ElementosAS.split(",").map(Number)
    const QtdElementosB = document.getElementById("QtdElementosBM").value
    const ElementosBS = document.getElementById("NumerosVetorBM").value
    const NumerosB = ElementosBS.split(",").map(Number)
    if(NumerosA.length > QtdElementosA){
        alert("a quantidade de números de A e maior que a de elementos!");
    }
    if(NumerosA.length < QtdElementosA){
        alert("a quantidade de números de A e menor que a de elementos!");
    }
    if(NumerosB.length > QtdElementosB){
        alert("a quantidade de números  de B e maior que a de elementos!");
    }
    if(NumerosB.length < QtdElementosB){
        alert("a quantidade de números de B e menor que a de elementos!");
    }
    if(QtdElementosA != QtdElementosB){
        alert("a quantidade de elementos dos vetores estão diferentes!")
    }
    else{
    for(var i = 0; i < QtdElementosA; i++){
        VetorAM[i] = ElementosA[i]
    }
    for(var i = 0; i < QtdElementosB; i++){
        VetorBM[i] = ElementosB[i]
    }
    for(var i = 0; i < QtdElementosA; i++){
        VetorME[i] = VetorAM[i] * VetorBM[i]
    }
    const table = document.getElementById("ResultadoVetoresME");
table.innerHTML = "";
    const tr = document.createElement("tr");
    VetorME.forEach(cell => {
        const td  = document.createElement("td");
        td.textContent = cell;
        tr.appendChild(td);
    })
    table.appendChild(tr);

}
}
function LimparMV(){
    document.getElementById("QtdElementosAM").value = ""
    document.getElementById("NumerosVetorAM").value = ""
    document.getElementById("QtdElementosBM").value = ""
    document.getElementById("NumerosVetorBM").value = ""
    document.getElementById("ResultadoVetoresME").innerHTML = ""
}

function Multiplicarmatrizesm(){
    let MatrizAM = []
    let MatrizBM = []
    const QtdLinhasA = document.getElementById("QtdLinhasAMM").value
    const QtdColunasA = document.getElementById("QtdColunasAMM").value
    const NumerosSA = document.getElementById("NumerosMatrizAMM").value
    const NumerosA = NumerosSA.split(",").map(Number);
    const QtdLinhasB = document.getElementById("QtdLinhasBMM").value
    const QtdColunasB = document.getElementById("QtdColunasBMM").value
    const NumerosSB = document.getElementById("NumerosMatrizBMM").value
    const NumerosB = NumerosSB.split(",").map(Number);
    if(NumerosA.length > (QtdLinhasA * QtdColunasA)){
    alert("a quantidade de números de A e maior que a de elementos!");
}
    if(NumerosA.length < (QtdLinhasA * QtdColunasA)){
    alert("a quantidade de números de A e menor que a de elementos!")
}
    if(NumerosB.length > (QtdLinhasB * QtdColunasB)){
    alert("a quantidade de números de B e maior que a de elementos!");
}
    if(NumerosB.length < (QtdLinhasB * QtdColunasB)){
    alert("a quantidade de números de B e menor que a de elementos!")
}
if(NumerosB.length < (QtdLinhasB * QtdColunasB) && NumerosA.length < (QtdLinhasA * QtdColunasA)){
    alert("a quantidade de números de A e de B sao menores que a de elementos!")
}
if(NumerosB.length > (QtdLinhasB * QtdColunasB) && NumerosA.length > (QtdLinhasA * QtdColunasA)){
    alert("a quantidade de números de A e de B sao maiores que a de elementos!")
}
if(QtdLinhasA != QtdColunasB){
    alert("quantidade de linhas de A esta diferente da quantidade de colunas de B, logo essa multiplicação é impossível")
}
else{
    for(var i = 0, c = 0; i < QtdLinhasA; i++){
        MatrizAM[i] = []
        for(var j = 0; j < QtdColunasA; j++, c++){
            MatrizAM[i][j] = NumerosA[c]
        }
    }
    for(var i = 0, c = 0; i < QtdLinhasB; i++){
        MatrizBM[i] = []
        for(var j = 0; j < QtdColunasB; j++, c++){
            MatrizBM[i][j] = NumerosB[c]
        }
    }
    for (let i = 0; i < QtdLinhasA; i++) {
        MatrizMultiplicaçãoM[i] = [];
        for (let j = 0; j < QtdColunasB; j++) {
            MatrizMultiplicaçãoM[i][j] = 0;
        }
    }

    for (let i = 0; i < QtdLinhasA; i++) {
        for (let j = 0; j < QtdColunasB; j++) {
            for (let k = 0; k < QtdColunasA; k++) { 
                MatrizMultiplicaçãoM[i][j] += MatrizAM[i][k] * MatrizBM[k][j];
            }
        }
    }
    const table = document.getElementById("ResultadoMatrizesMEM");
    table.innerHTML = "";
    MatrizMultiplicaçãoM.forEach(row =>{
     const tr = document.createElement("tr");
     row.forEach(cell => {
         const td  = document.createElement("td");
         td.textContent = cell;
         tr.appendChild(td);
     })
     table.appendChild(tr);
    })

}
}
function LimparMEM(){
    document.getElementById("QtdLinhasAMM").value = ""
    document.getElementById("QtdColunasAMM").value = ""
    document.getElementById("NumerosMatrizAMM").value = ""
    document.getElementById("QtdLinhasBMM").value = ""
    document.getElementById("QtdColunasBMM").value = ""
    document.getElementById("NumerosMatrizBMM").value = ""
    document.getElementById("ResultadoMatrizesMEM").innerHTML = ""
}
function Eliminaçãogaussiana() {
    let MatrizG = []
    const QtdLinhasG = document.getElementById("QtdLinhasG").value;
    const QtdColunasG = document.getElementById("QtdColunasG").value;
    const NumerosSG = document.getElementById("NumerosMatrizG").value;
    const NumerosG = NumerosSG.split(",").map(Number);
    if(NumerosG.length > (QtdLinhasG * QtdColunasG)){
    alert("a quantidade de números de A e maior que a de elementos!");
}
    if(NumerosG.length < (QtdLinhasG * QtdColunasG)){
    alert("a quantidade de números de A e menor que a de elementos!")
}
else{

    for (var i = 0, c = 0; i < QtdLinhasG; i++) {
        MatrizG[i] = [];
        for (var j = 0; j < QtdColunasG; j++, c++) {
            MatrizG[i][j] = NumerosG[c];
        }
    }

    for (let i = 0; i < QtdLinhasG; i++) {
        if (MatrizG[i][i] === 0) {
            for (let j = i + 1; j < QtdLinhasG; j++) {
                if (MatrizG[j][i] !== 0) {
                    let temp = MatrizG[i];
                    MatrizG[i] = MatrizG[j];
                    MatrizG[j] = temp;
                    break;
                }
            }
        }
                
                let pivo = MatrizG[i][i];
                if (pivo !== 0) {
                    for (let k = 0; k < QtdColunasG; k++) {
                        MatrizG[i][k] = MatrizG[i][k] / pivo;
                    }
                }
        
        for (let j = i + 1; j < QtdLinhasG; j++) {
            let fator = MatrizG[j][i] / MatrizG[i][i];
            for (let k = i; k < QtdColunasG; k++) {
                MatrizG[j][k] -= fator * MatrizG[i][k];
            }
        }
    }

    
    const table = document.getElementById("Resultadoeliminacaogaussiana");
    table.innerHTML = "";
    MatrizG.forEach(row => {
        const tr = document.createElement("tr");
        row.forEach(cell => {
            const td = document.createElement("td");
            td.textContent = cell.toFixed(2);
            tr.appendChild(td);
        });
        table.appendChild(tr);
    });
}
}
function LimparMG(){
    document.getElementById("QtdLinhasG").value = ""
    document.getElementById("QtdColunasG").value = ""
    document.getElementById("NumerosMatrizG").value = ""
    document.getElementById("Resultadoeliminacaogaussiana").innerHTML = "" 
}
function ResoluçãoSistema(){
const QtdLinhasS = document.getElementById("QtdLinhasS").value
const QtdColunasS = document.getElementById("QtdColunasS").value
const NumerosSS = document.getElementById("NumerosMatrizS").value
const NumerosS = NumerosSS.split(",").map(Number)
if(NumerosS.length > (QtdLinhasS * QtdColunasS)){
    alert("a quantidade de números de A e maior que a de elementos!");
}
    if(NumerosS.length < (QtdLinhasS * QtdColunasS)){
    alert("a quantidade de números de A e menor que a de elementos!")
}
else{
for (var i = 0, c = 0; i < QtdLinhasS; i++) {
    MatrizS[i] = [];
    for (var j = 0; j < QtdColunasS; j++, c++) {
        MatrizS[i][j] = NumerosS[c];
    }
}
for (let i = 0; i < QtdLinhasS; i++) {
    if (MatrizS[i][i] === 0) {
        for (let j = i + 1; j < QtdLinhasS; j++) {
            if (MatrizS[j][i] !== 0) {
                let temp = MatrizS[i];
                MatrizS[i] = MatrizS[j];
                MatrizS[j] = temp;
                break;
            }
        }
    }

    let pivo = MatrizS[i][i];
    if (pivo !== 0) {
        for (let k = 0; k < QtdColunasS; k++) {
            MatrizS[i][k] = MatrizS[i][k] / pivo;
        }
    }

    for (let j = 0; j < QtdLinhasS; j++) {
        if (i !== j) {
            let fator = MatrizS[j][i];
            for (let k = 0; k < QtdColunasS; k++) {
                MatrizS[j][k] -= fator * MatrizS[i][k];
            }
        }
    }
}

let matrizColuna = [];
for (let i = 0; i < QtdLinhasS; i++) {
    matrizColuna[i] = [MatrizS[i][QtdColunasS - 1]]; 
}


const table = document.getElementById("ResultadoSistema");
table.innerHTML = "";
matrizColuna.forEach(row => {
    const tr = document.createElement("tr");
    row.forEach(cell => {
        const td = document.createElement("td");
        td.textContent = cell.toFixed(2);
        tr.appendChild(td);
    });
    table.appendChild(tr);
});


}
}
function LimparMS(){
    document.getElementById("QtdLinhasS").value = ""
    document.getElementById("QtdColunasS").value = ""
    document.getElementById("NumerosMatrizS").value = ""
    document.getElementById("ResultadoSistema").innerHTML = "" 
}


