const contarPalavras = () => {
    const texto = document.getElementById('entradaTexto').value;
    const palavras = texto.trim().split(/\s+/);
    const contagemPalavras = palavras.filter(palavra => palavra.length > 0).length;
    
    document.getElementById('contagemPalavras').textContent = `Palavras: ${contagemPalavras}`;
};
