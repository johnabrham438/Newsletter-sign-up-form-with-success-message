const container = document.querySelector('.container');
const input = document.getElementById('email-input');
const subscribe_btn = document.getElementById('subscribe-btn');
const  message = document.getElementById('message');
const strong = document.getElementById('strong');
const error = document.querySelector('.error');
const dismiss_btn = document.getElementById('dismiss-btn');
subscribe_btn.addEventListener('click', () =>{
      if(input.value == '' || input.value == null){
        input.style.borderColor = 'rgb(202, 14, 14)'
        error.textContent = 'please enter email';
    }
      else{
        strong.textContent = input.value;
        message.style.display = 'block';
        document.querySelector('body').removeChild(container);
        document.querySelector('body').innerHTML(message);
      }
})
dismiss_btn.addEventListener('click', () =>{
        document.querySelector('body').removeChild(message);
        document.querySelector('body').appendChild(container);
        location.reload();
    
})
