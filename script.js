function submitEmail() {
    const email = document.getElementById("email").value;
    document.getElementById("loader").style="display: inline-block;"
    if (email.trim() === "") {
        alert("Por favor, insira um email válido.");
        return;
    }
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(
            {
                data: email
            }
        )
    };

    fetch("https://n8n.isilab.com.br/webhook/50cc5029-3fe4-4bea-855b-5a430047b40f", options)
        .then(res => {
            return res.json()       
        })
        .then(res => {
            // Esconde o formulário
            console.log(res);
            document.getElementById("form-card").classList.add("hidden");

            // Atualiza o card de resposta com o link recebido
            const responseCard = document.getElementById("response-card");
            responseCard.innerHTML = `
                <h2>Convite Gerado</h2>
                <p>Seu link de acesso foi criado:</p>
                <a href="${res.link}" target="_blank" style="
                    display: inline-block;
                    margin-top: 20px;
                    padding: 15px 30px;
                    border-radius: 10px;
                    background: linear-gradient(90deg, #3366ff, #9b5efb);
                    color: #fff;
                    font-weight: bold;
                    text-decoration: none;
                    transition: 0.3s;
                ">Abrir Link</a>
            `;
            responseCard.classList.remove("hidden");
        })
        .finally(() => {
            btnText.classList.remove("hidden");
            loader.classList.add("hidden");
            submitBtn.disabled = false;
        });
    
}

function abreLink(){
    window.location = "https://n8n.isilab.com.br"
}