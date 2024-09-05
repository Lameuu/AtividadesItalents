class CalculadoraIMC {
    constructor(peso, altura) {
        this.peso = peso;
        this.altura = altura / 100; // Converter altura para metros
    }

    calcularIMC() {
        return this.peso / (this.altura ** 2);
    }

    obterClassificacao(imc) {
        const classificacoes = [
            { max: 16, texto: 'Muito abaixo do peso' },
            { max: 16.9, texto: 'Abaixo do peso' },
            { max: 18.4, texto: 'Peso normal' },
            { max: 24.9, texto: 'Acima do peso' },
            { max: 29.9, texto: 'Obesidade grau I' },
            { max: 34.9, texto: 'Obesidade grau II' },
            { max: Infinity, texto: 'Obesidade grau III' }
        ];
        
        return classificacoes.find(c => imc <= c.max).texto;
    }
}

const calcularIMC = () => {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    const calculadora = new CalculadoraIMC(peso, altura);
    const imc = calculadora.calcularIMC().toFixed(2);
    const classificacao = calculadora.obterClassificacao(imc);

    document.getElementById('resultadoIMC').textContent = `Seu IMC é ${imc} (${classificacao})`;
};
