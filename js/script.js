//Variáveis e Elementos
const apiKey = "a02857f1e449ec079c366e4108b9584f"
const apiCountryURL = "https://flagsapi.com//flat/64.png"

const cidadeInput = document.querySelector("#cidade-input")
const btnBusca = document.querySelector("#buscar")

//Eventos
btnBusca.addEventListener("click", (e) => {
    e.preventDefault()
    const cidade = cidadeInput.value
    mostrarDadosPrev(cidade)
})



//Funções
const mostrarDadosPrev = (cidade) => {
    console.log(cidade)
}