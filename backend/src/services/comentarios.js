class ComentarioServices {
    constructor(ComentarioModel){
        this.comentario = ComentarioModel;
    }

    async getComentariosBd(palavra) {
        const listaComentarios = await this.comentario.findOne(palavra);
        return listaComentarios;
    }

    async setComentarioUser() {

    }

    async verificarCometario(frase) {
        const palavras = frase.split(' ');
        let contemPalavraOfensiva = false;
        let palavraOfensiva = '';

        for(let i=0; i < palavras.lenght; i++) {
            if(this.getComentariosBd(palavras[i])){
                contemPalavraOfensiva = true;
                palavraOfensiva = palavras[i];
            }
        }

        if(contemPalavraOfensiva) {
            
        } else {

        }
    }
}

module.exports = ComentarioServices;
