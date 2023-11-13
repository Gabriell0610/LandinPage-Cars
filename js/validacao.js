const campo = document.querySelectorAll('.requerid')
const spans = document.querySelectorAll('.span-requerid')
const label = document.querySelectorAll('.label')
const inputName = document.querySelector('#input-name')
const inputEmail = document.querySelector('#input-email')
const inputCPF = document.querySelector('#input-cpf')
const inputPassword = document.querySelector('#input-senha')
const form = document.querySelector('.form')


//Funções

function setError(index, erroMensage) {
    campo[index].style.border = '1px solid #df3020';
    spans[index].style.display = 'block';
    //muando o texto do span
    spans[index].textContent = erroMensage;
    label[index].style.color = '#df3020';
}

function removeErro(index) {
    campo[index].style.border = '';
    spans[index].style.display = 'none';
    label[index].style.color = '';
}


const validationName = () => {
    if(inputName.value === '') {
        setError(0, 'Campo vazio')
    }else {
        removeErro(0)
    }
}

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;  //Regex para Email padrão

const validationEmail = () => {
    if(inputEmail.value === '')  {
        setError(1, 'Campo vazio')
    }else if (!emailRegex.test(inputEmail.value)) {
        setError(1, 'E-mail invalido')
    }else {
        removeErro(1)
    }

}

const cpfRegex = /^(\d{3}\.\d{3}\.\d{3}-\d{2}|\d{11})$/;// Regex para o formato padrão do CPF

const validationCPF = () => {
    if(inputCPF.value === '') {
        setError(2, 'Campo Vazio') 
    }else if(!cpfRegex.test(inputCPF.value)) {
        setError(2, 'Digite um CPF válido')
    }else {
        removeErro(2)
    }
}


const validationPassword = () => {
    if(inputPassword.value === '') {
        setError(3, 'Campo Vazio')
    }else if (inputPassword.value.length < 8) {
        setError(3, 'Senha contém menos de 8 caracteres')
    }else {
        removeErro(3)
    }
}


const checkValidations = () => {
    validationCPF()
    validationName()
    validationEmail()
    validationPassword()

    let isValid = true
     spans.forEach((span) => {
        if(span.style.display === 'block') {
            isValid = false
        }
    })

    if(isValid) {
        //salvar no banco de dados
        alert('cadastrado com sucesso')
    }

}


// Eventos
inputName.addEventListener('input', validationName)
inputEmail.addEventListener('input', validationEmail)
inputCPF.addEventListener('input', validationCPF)
inputPassword.addEventListener('input', validationPassword)

form.addEventListener('submit', (e) =>  {
  e.preventDefault();

  checkValidations();

 
})









