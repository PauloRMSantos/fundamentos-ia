let x11 = 0, x12 = 0, resultado1 = 0; //Variáveis de entrada 
let x21 = 0, x22 = 0, resultado2 = 0; //Grupo 2 | Entradas 1 e 2
let x31 = 1, x32 = 0, resultado3 = 1; //Grupo 3 | Entradas 1 e 2
let x41 = 1, x42 = 1, resultado4 = 1; //Grupo 4 | Entradas 1 e 2

let peso1 = -1, peso2 = -1;

let soma = 0, ajustes = 0, ajustesTotais = 0, repeticoes = 0;

do 
{
    ajustes = 0
    soma = somar(x11, x12)

    y = transferencia(soma)
    if (y != resultado1)
    {
        ajustar(x11, x12, resultado1, y)
        ajustes++;
        ajustesTotais++;
    }

    soma = somar(x21, x22)
    if (y != resultado2) 
    {
        ajustar(x21, x22, resultado2, y)
        ajustes++;
        ajustesTotais++;
    }

    soma = somar(x31, x32)
    if (y != resultado3)
    {
        ajustar(x31, x32, resultado3, y)
        ajustes++;
        ajustesTotais++;
    }

    soma = somar(x41, x42)
    if (y != resultado4)
    {
        ajustar(x41, x42, resultado4, y)
        ajustes++;
        ajustesTotais++;
    }

} while (ajustes != 0)

console.log("Teste de aprendizagem de rede neural");
console.log("Peso 1" + peso1);
console.log("Peso 2" + peso2);
console.log("Foram necessários " + ajustesTotais + " ajustes para treinar a rede");
function somar(x1, x2) 
{
    return (x1 * peso1) + (x2 * peso2)
}

function transferencia(soma) 
{
    return soma <= 0 ? 0 : 1; // Utilização de if-ternário
}

function ajustar(entrada1, entrada2, resultadoEsperado, resultadoObtido)
{
    peso1 = peso1 + 1 * (resultadoEsperado - resultadoObtido) * entrada1;
    peso2 = peso2 + 1 * (resultadoEsperado - resultadoObtido) * entrada2;

}