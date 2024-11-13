function contarLetraA(texto) {
    // Converti a string para minúscula, facilitando a contagem
    const textoLower = texto.toLowerCase();
    let quantidadeA = 0;

    // Contando a quantidade de letras 'a' presentes
    for (let i = 0; i < textoLower.length; i++) {
        if (textoLower[i] === 'a') {
            quantidadeA++;
        }
    }

    return quantidadeA;
}

// Solicita para o usuário uma string ou define uma string previamente
let texto = prompt("Informe uma string: ");

// Conta a quantidade de letras 'a' presentes
let quantidade = contarLetraA(texto);

// Verifica se a letra 'a' existe mesmo e e então exibe o resultado
if (quantidade > 0) {
    console.log(`A letra 'a' (maiúscula ou minúscula) aparece ${quantidade} vez(es) na string.`);
} else {
    console.log("A letra 'a' (maiúscula ou minúscula) não aparece na string.");
}