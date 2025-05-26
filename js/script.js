//Variáveis e Elementos
const apiKey = "a02857f1e449ec079c366e4108b9584f"
const apiCountryURL = "https://flagsapi.com//flat/64.png"

const cidadeInput = document.querySelector("#cidade-input")
const btnBusca = document.querySelector("#buscar")

const cidadeElemento = document.querySelector("#cidade")
const tempElemento = document.querySelector(".tempet span")
const bandeiraElemento = document.querySelector("#bandeira")
const climaElemento = document.querySelector("#clima")
const climaIconElemento = document.querySelector("#clima-icon")
const umidadeElemento = document.querySelector("#umidade span")
const ventoElemento = document.querySelector("#vento span")


//Eventos
btnBusca.addEventListener("click", (e) => {
    e.preventDefault()

    const cidade = cidadeInput.value

    mostrarDadosPrev(cidade)
})



//Funções
const dadosPrev = async(cidade) => {
    const urlWeatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${apiKey}&lang=pt_br `

    const res = await fetch(urlWeatherApi)
    const dados = await res.json()

    console.log(dados)

}

const mostrarDadosPrev = (cidade) => {
    dadosPrev(cidade)
}