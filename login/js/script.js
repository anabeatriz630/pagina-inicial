const bt = document.querySelector("#btVerificar");
const txUsuario = document.querySelector("#txUsuario"); // Adicionado para o usuário
const txPass = document.querySelector("#txSenha");
const txConfirmar = document.querySelector("#txConfirmarSenha"); // Adicionado para confirmar senha
const msg = document.querySelector("#mensagem");

txPass.addEventListener('input', (tx) => {
    const texto = tx.target.value;

    // Limpa todas as cores antigas antes de aplicar a nova
    msg.classList.remove("vermelho", "amarelo", "verde");

    if (texto.length === 0) {
        msg.textContent = "";
        return;
    }

    // Regra 1: Se a senha tiver menos do que 3 caracteres -> Vermelha (Fraca)
    if (texto.length < 3) {
        msg.textContent = "Senha é fraca";
        msg.classList.add("vermelho");    
    }
    // Regra 2: Entre 3 e 5 caracteres (inferior a 6) -> Amarela (Intermediária)
    else if (texto.length < 6) {
        msg.textContent = "Senha é intermediária";
        msg.classList.add("amarelo");
    }
    // Regra 3: Caso contrário (6 ou mais) -> Verde (Forte)
    else {
        msg.textContent = "Senha é forte";
        msg.classList.add("verde");
    }
});

bt.addEventListener('click', function() {
    const usuario = txUsuario.value;
    const senha = txPass.value;
    const confirmar = txConfirmar.value;

    // Limpa estilos de erro ou sucesso anteriores da mensagem final
    msg.classList.remove("vermelho", "verde");

    // Regra 4: O campo usuário deve ter no mínimo 3 caracteres
    if (usuario.length < 3) {
        msg.textContent = "O campo usuário deve ter no mínimo 3 caracteres";
        msg.classList.add("vermelho");
    } 
    // Regra 5: Os campos senha e confirma senha devem ser iguais
    else if (senha !== confirmar) {
        msg.textContent = "uma mensagem informando que as senhas devem ser iguais";
        msg.classList.add("vermelho");
    } 
    // Regra 6: Estando tudo correto, exibir o nome do usuário e a senha
    else {
        msg.textContent = "Usuário: " + usuario + " | Senha: " + senha;
        msg.classList.add("verde");
        
        // Se quiser manter o redirecionamento original após exibir, descomente a linha abaixo:
        // window.location.href = "dashboard.html";
    }
});