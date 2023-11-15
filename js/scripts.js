const inputName = document.querySelector('#input-name')
const inputMarca = document.querySelector('#input-marca')
const inputModelo = document.querySelector('#input-modelo')
const inputPlaca = document.querySelector('#input-placa')
const inputCPF = document.querySelector('#input-cpf')
const inputDias = document.querySelector('#input-dias')
const imgCar = document.querySelector('#img-car')
const cardName = document.querySelector('#name span')
const cardMarca = document.querySelector('#marca span')
const cardModelo = document.querySelector('#modelo span')
const cardPlaca = document.querySelector('#placa span ')
const cardDias = document.querySelector('#dias span')
const cardCPF = document.querySelector('#cpf span')
const btnForm = document.querySelector('.btn-form')



const showData = () => {
    
    cardName.innerText = inputName.value
    cardMarca.innerText = inputMarca.value
    cardModelo.innerText = inputModelo.value
    cardPlaca.innerText = inputPlaca.value
    cardCPF.innerText = inputCPF.value
    cardDias.innerText = inputDias.value

    

}


btnForm.addEventListener('click', (e) => {

    showData()
})

