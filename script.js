function criptografar() {
    let texto = document.getElementById('texto').value;
    let textoCriptografado = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    
    if (texto.trim() === "") {
        //recarrega a pagina
        location.reload();
    } else {
        // Atualiza o conteúdo do texto criptografado e esconde a imagem
        document.getElementById('mensagem3').textContent = textoCriptografado;
        document.getElementById('imagemSecundario').style.display = 'none';
        document.getElementById('textoSecundario').style.display = 'flex';
        document.getElementById('mensagem1').style.display = 'none';
        document.getElementById('mensagem2').style.display = 'none';
        document.getElementById('copiar').style.display = 'flex';

    }
}

function descriptografar() {
    let texto = document.getElementById('texto').value;
    let textoDescriptografado = texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    
    if (texto.trim() === "") {
        //recarrega a pagina
        location.reload();
    } else {
        // Atualiza o conteúdo do texto descriptografado e esconde a imagem
        document.getElementById('mensagem3').textContent = textoDescriptografado;
        document.getElementById('imagemSecundario').style.display = 'none';
        document.getElementById('textoSecundario').style.display = 'flex';
        document.getElementById('mensagem1').style.display = 'none';
        document.getElementById('mensagem2').style.display = 'none';
        document.getElementById('copiar').style.display = 'flex';

    }
}

function copiar(){
    // Seleciona o texto do elemento com id "textoParaCopiar"
    const texto = document.getElementById('mensagem3').innerText;

    // Usa a API Clipboard para copiar o texto para a área de transferência
    navigator.clipboard.writeText(texto).then(() => {
        alert('Texto copiado com sucesso!');
    });

}