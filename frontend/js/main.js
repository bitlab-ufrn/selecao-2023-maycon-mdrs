const body = document.querySelector('body');
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

    if(frase != ""){
        // enviar dados -> api
        verificarCometarioApi(frase);
    }
});

inputComment.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        // capturar frase do form
        const frase = getFraseForm();

        if(frase != ""){
            // enviar dados -> api
            verificarCometarioApi(frase);
        }
    }
});

async function verificarCometarioApi(frase) {
    let body;
    let statusCode;
    body = await fetch('http://localhost:3000/comentario/', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(frase)
    })
    .then((res) =>{
        statusCode = res.status;
        return res.json();
    })
    .then((data) => {
        return data;
    })
    if(statusCode === 200){
        if(!body['ofensiva']){
            limparInput();
            console.log(frase)
            postarComentario(frase); 
        } else{
            limparInput();
            verificandoFrase(frase);
            console.log('erro post');
        } 
    }
}

function postarComentario(frase) {
    const comentarioHTML = `
                            <div class="div-comentario">
                                <span class="nome-usuario">user: </span>
                                <span class="comentario-user">${frase['frase']}</span>
                                <span class="excluir">excluir</span>
                            </div>
                            `
    comments.innerHTML = comments.innerHTML + comentarioHTML
    opcaoExcluirComentario();
}

function getFraseForm() {
    const inputFrase = document.querySelector('#input-comment');
    
    if(inputFrase.value === null || inputFrase.value === ''){
        console.log('campo vazio');
        return "";
    }
    
    const frase = {
        frase: inputFrase.value
    } 
    console.log(frase);
    return frase;
}

function limparInput() {
    document.querySelector('#input-comment').value = '';
}

function opcaoExcluirComentario() {
    const btnsExcluir = document.querySelectorAll('.excluir');

    // Itera sobre cada botão "excluir" e adiciona um ouvinte de eventos
    btnsExcluir.forEach((btn) => {
        btn.addEventListener('click', () => {
            // Acessa o elemento pai (div-comentario) e remove-o
            btn.parentNode.remove();
        });
    });  
}

/* --------------------------------- */
/* ---------- AVISO OFENSIVO ------- */
/* --------------------------------- */
const verificandoDiv = document.createElement('div');
verificandoDiv.id = 'verificando';

const closeVerificando = document.createElement('div');
closeVerificando.className ="fas fa-times close";

const bloqueio = document.createElement('div');
bloqueio.className ="bloqueio";

const palavrasTxt = document.createElement('div');
palavrasTxt.className ="palavras-txt";
palavrasTxt.innerHTML = "PALAVRA(S) OFENSIVA(S):"

//const cLoader = document.createElement('div');
//cLoader.className= "c-loader";

const statusP = document.createElement('span');
statusP.className= 'status';

body.appendChild(verificandoDiv);
/* verificandoDiv.innerHTML = verificandoDiv.innerHTML + popUp */
verificandoDiv.appendChild(closeVerificando);
verificandoDiv.appendChild(bloqueio);
verificandoDiv.appendChild(palavrasTxt);
verificandoDiv.appendChild(statusP);

function verificandoFrase(frase) {
    verificandoDiv.style.display = "flex";
    statusP.innerHTML = `${frase['frase']}`;
}

function fecharMensagem() {
    verificandoDiv.style.display = "none";
}

var botaoFechar = document.querySelector(".close");
botaoFechar.addEventListener("click", fecharMensagem);
