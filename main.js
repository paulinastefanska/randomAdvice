const options = [];
const input = document.querySelector('input');
let h1 = document.querySelector('h1');

const btnAdd = document.querySelector('.add');
const btnReset = document.querySelector('.clean');
const btnAdvice = document.querySelector('.showAdvice');
const btnOptions = document.querySelector('.showOptions');


const addAdvice = (e) => {
  e.preventDefault();
  const newOption = input.value;
  if (input.value.length) {
    for (option of options) {
      if (option === newOption) {
        alert(`${option} already exist!`);
        return 
      }
    }
    options.push(newOption);
    alert(`${newOption} added`);
    input.value = "";
    // console.log(options);
  }
}

const showAdvice = () => {
  if (options.length) {
    const randomAdvice = Math.floor(Math.random() * options.length);
    h1.textContent = `${options[randomAdvice]}`;
    // console.log(randomAdvice);
  }
}

const showOptions = () => {
  alert(`Possible options are: ${options.join(", ")}`);
}

const resetOptions = (event) => {
  event.preventDefault();
  options.length = 0;
  h1.textContent = ""; 
}

btnAdd.addEventListener('click', addAdvice)
btnAdvice.addEventListener('click', showAdvice)
btnOptions.addEventListener('click', showOptions)
btnReset.addEventListener('click' , resetOptions)


