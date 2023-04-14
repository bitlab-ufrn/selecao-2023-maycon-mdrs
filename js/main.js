const forms = document.querySelector('#forms');
const inputComment = document.querySelector('#input-comment');
const postarBtn = document.querySelector('.btn-postar');
const comments = document.querySelector('.comments');

forms.addEventListener('submit', e => {
    e.preventDefault()
    console.log('Deu certo')
})

postarBtn.addEventListener('click', () => {
    // capturar frase do form
    const frase = getFraseForm();
    // enviar dados -> api
    //postarComentario(frase);
    //limparInput();
    verificarCometarioApi(frase);
});

inputComment.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        const frase = getFraseForm();
        // enviar dados -> api
        //postarComentario(frase);
        //limparInput();
        verificarCometarioApi(frase);
    }
});

function getFraseForm() {
    const inputFrase = document.querySelector('#input-comment');
    
    if(inputFrase.value === null || inputFrase.value === ''){
        console.log('campo vazio');
        return;
    }
    
    const frase = {
        keywords: inputFrase.value
    } 
    return frase;
}

async function verificarCometarioApi(frase) {
    const verificar = await fetch('http://localhost:3000/comentario/verificar-frase', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(frase)
    })

    if(verificar.status != 400){
        limparInput();
        postarComentario(frase);
        console.log('post deu certo');
    } else{
        limparInput();
        postarComentario(frase);
        console.log('erro post');
    }
}

function postarComentario(frase) {
    const comentarioHTML = `
                                <div class="div-comentario">
                                    <span class="nome-usuario">user: </span>
                                    <span class="comentario-user">${frase}</span>
                                </div>
                            `
    comments.innerHTML = comments.innerHTML + comentarioHTML
}

function limparInput() {
    document.querySelector('#input-comment').value = '';
}
