const calcular = () => {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    const operacao = document.getElementById('operacao').value;
    
    const operacoes = {
        adicionar: (a, b) => a + b,
        subtrair: (a, b) => a - b,
        multiplicar: (a, b) => a * b,
        dividir: (a, b) => b !== 0 ? a / b : 'Erro: Divisão por zero'
    };
    
    const resultado = operacoes[operacao](numero1, numero2);
    document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
};
