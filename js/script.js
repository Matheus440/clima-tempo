//Variáveis e Elementos
const apiKey = "a02857f1e449ec079c366e4108b9584f"
const apiUnsplashKey = "bIomApnc2bIUAj3W57t0oCBc5c48nstKqeOHC7qqbSQ"


const cidadeInput = document.querySelector("#cidade-input")
const btnBusca = document.querySelector("#buscar")

const imgFundo = document.querySelector("#img-back")

const cidadeElemento = document.querySelector("#cidade")
const tempElemento = document.querySelector(".tempet span")
const bandeiraElemento = document.querySelector("#bandeira")
const climaElemento = document.querySelector("#clima")
const climaIconElemento = document.querySelector("#clima-icon")
const umidadeElemento = document.querySelector("#umidade span")
const ventoElemento = document.querySelector("#vento span")

const hideDados = document.querySelector("#dados-prev-tempo")


//Eventos
btnBusca.addEventListener("click", (e) => {
    e.preventDefault()

    const cidade = cidadeInput.value.trim()
    if (!cidade) {
        alert("Digite o nome de uma cidade!")
        return
    }

    mostrarDadosPrev(cidade)
})

cidadeInput.addEventListener("keyup", (e) => {
    if (e.code === "Enter") {
        const cidade = e.target.value

        mostrarDadosPrev(cidade)
    }

})



//Funções

const fotoPais = async (cidade) => {

    const urlUnsplashApi = `https://api.unsplash.com/search/photos?page=1&query=${cidade}&client_id=${apiUnsplashKey}`

    const resUnsplash = await fetch(urlUnsplashApi)
    const dadosUnsplash = await resUnsplash.json()
    const imageUrl = dadosUnsplash.results[0].urls.full

    return imageUrl
}


const dadosPrev = async (cidade) => {
    const urlWeatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${apiKey}&lang=pt_br `

    const res = await fetch(urlWeatherApi)
    const dados = await res.json()

    if (!res.ok) {

        alert("Erro ao buscar dados da cidade.")

        location.reload()
    }

    return dados
}

const mostrarDadosPrev = async (cidade) => {
    const dados = await dadosPrev(cidade)
    const imageUrl = await fotoPais(cidade)

    cidadeElemento.innerText = dados.name
    tempElemento.innerText = parseInt(dados.main.temp)
    climaElemento.innerText = dados.weather[0].description
    climaIconElemento.setAttribute("src", `http://openweathermap.org/img/wn/${dados.weather[0].icon}.png`)
    bandeiraElemento.setAttribute("src", `https://flagsapi.com/${dados.sys.country}/flat/64.png`)
    umidadeElemento.innerText = `${dados.main.humidity}%`
    ventoElemento.innerText = parseInt(dados.wind.speed) + 'km'
    imgFundo.innerHTML = `<img src="${imageUrl}" alt="Imagem de ${cidade}" width="" height="" />`

    hideDados.classList.remove("hide")

}

