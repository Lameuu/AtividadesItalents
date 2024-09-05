class Timer {
    constructor(segundos) {
        this.segundos = segundos;
        this.intervalo = null;
    }

    iniciar(callback) {
        this.intervalo = setInterval(() => {
            if (this.segundos <= 0) {
                clearInterval(this.intervalo);
                callback('Tempo Esgotado');
            } else {
                this.segundos--;
                callback(this.formatarTempo());
            }
        }, 1000);
    }

    formatarTempo() {
        const minutos = Math.floor(this.segundos / 60);
        const segundos = this.segundos % 60;
        return `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
    }
}

const iniciarTimer = () => {
    const tempo = parseInt(document.getElementById('entradaTempo').value);
    const timer = new Timer(tempo);

    timer.iniciar((tempoFormatado) => {
        document.getElementById('exibicaoTempo').textContent = tempoFormatado;
    });
};
