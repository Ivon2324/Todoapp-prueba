const form = document.querySelector('#form');
const emailInput = document.querySelector('#email-input');
const passwordInput = document.querySelector('#password-input');
const boton = document.querySelector('#boton');

form.addEventListener('submit', async e => {
  e.preventDefault();

  try {
    const email = emailInput.value;
    const password = passwordInput.value;
    const { data: credentials } = await axios.post('/api/login', {
      email,
      password,
    });
    window.location.replace(`/app/${credentials.userId}`);
  } catch (error) {
    console.log(error);
    const p = document.createElement('p');
    p.innerHTML = error.response.data.error;
    p.classList.add('text-rose-300', 'font-bold', 'text-center');
    form.children[4] ? form.children[4].remove() : null;
    form.append(p);
  }
});
