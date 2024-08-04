'use strict';

{
  function showPassword() {
    const result = document.getElementById('result');
    const numbersCheckbox = document.getElementById('numbers-checkbox');
    const symbolsCheckbox = document.getElementById('symbols-checkbox');
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!#$%&()'
    let seeds = letters + letters.toUpperCase();
    let password = '';

    if(numbersCheckbox.checked === true) {
      seeds += numbers;
    }

    if(symbolsCheckbox.checked === true) {
      seeds += symbols;
    }

    for(let i = 0; i < slider.value; i++) {
      // password = password + seeds[Math.floor(Math.random() * seeds.length)];
      password += seeds[Math.floor(Math.random() * seeds.length)];
    }

    result.textContent = password;
  }

  const slider = document.getElementById('slider');
  const btn = document.getElementById('btn');

  slider.addEventListener('input' , () => {
    const passwordLength = document.getElementById('password-length');

    passwordLength.textContent = slider.value;
  });

  btn.addEventListener('click' , () => {
    showPassword();
  });

  showPassword();
}