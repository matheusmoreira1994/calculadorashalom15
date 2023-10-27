function calcular() {
    // Pega o valor digitado pelo usuário
    const valor = document.getElementById("valor").value;

    // Calcula 10% e 5% do valor
    const dezPorcento = (valor * 0.1).toFixed(2);
    const cincoPorcento = (valor * 0.05).toFixed(2);

    // Soma os valores
    const soma = (parseFloat(dezPorcento) + parseFloat(cincoPorcento)).toFixed(2);

    // Exibe os resultados na página
    document.getElementById("dezPorcento").textContent = dezPorcento;
    document.getElementById("cincoPorcento").textContent = cincoPorcento;
    document.getElementById("soma").textContent = soma;
}
function irparasite() {
    window.location.href = "https://comshalom.org/comunhaodebens/";
 }
