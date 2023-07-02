let currentStep = 0;
const formSteps = document.querySelectorAll('.step-form');
const form = document.querySelector('form');

// proximo passo => adicionamos um novo evento no nosso formulario somente quando clicamos em um botao
// [data-action] 

form.addEventListener('click', (e) =>{
    // Verifica se onde foi clicado é um botao
    const actions ={
        next(){
            currentStep++;
        },
        prev(){
            currentStep--;
        }
    }

    //Irá receber next porque vai ativar o data-action next definido no botao
    const action = e.target.dataset.action
    // O mesmo que actions.next() visto que a ação do botão é 'next'
    actions[action]()
    console.log(currentStep);
    console.log(formSteps);
    uptadeActiveStep()
    uptadeProgressStep()
})

// envio do formulario

form.addEventListener('submit',(e)=>{
    e.preventDefault()
})

// uptade do formulario

function uptadeActiveStep(){
    // Para cada passo ele remove todas as classes ativas
    formSteps.forEach(step =>{
        step.classList.remove('active')
    })
    // E somente para o passo atual ele adiciona o ativo
    formSteps[currentStep].classList.add('active')
};

const progressStep = document.querySelectorAll('.steps strong')
function uptadeProgressStep(){
    progressStep.forEach((step,i) =>{
        step.classList.remove('active')
        step.classList.remove('done')

        //so alteramos a partir do segundo passo
        if(i < currentStep + 1){
            step.classList.add('active')
        }

        if(currentStep > i){
            step.classList.add('done')
        }
    })
};