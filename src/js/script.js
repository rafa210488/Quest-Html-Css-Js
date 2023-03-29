const form = document.getElementById('form')
const inputs = document.querySelectorAll('input')
const textArea = document.querySelector('textarea')
const error = document.querySelectorAll('span')
const button = document.getElementById('button')



button.addEventListener('click', function (ev) {
  ev.preventDefault()
  inputs.forEach(input => {
    if(input.value == '') {
      input.classList.add('campo-obrigatorio')
      error.forEach(erro => {
        erro.innerText = 'campo obrigatório'
        erro.classList.add('error')
        
      })
    } else {
      input.classList.add('campo-preenchido')
    }
  })

  if(textArea.value == '') {
    textArea.classList.add('campo-obrigatorio')
  } else {
    textArea.classList.add('campo-preenchido')
  }
})  
  
 


