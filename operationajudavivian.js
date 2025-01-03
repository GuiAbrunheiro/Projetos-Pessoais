
  
  function Multiplicarmatrizes2d(MH, MP){
    let MatrizAM = []
    let MatrizBM = []
    let MatrizMultiplicaçãoM = []
    const QtdLinhasA = 3
    const QtdColunasA = 3
    const NumerosSA = MH
    const NumerosA = NumerosSA.split("").map(Number)
    const QtdLinhasB = 3
    const QtdColunasB = 1
    const NumerosSB = MP
    const NumerosB = NumerosSB.split("").map(Number);

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
    return MatrizMultiplicaçãoM
    
    }
    let resultado
    resultado = Multiplicarmatrizes2d("200020002", "123")
    console.log(resultado);

  


