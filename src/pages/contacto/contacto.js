import '../../sass/main.scss'

document.addEventListener('DOMContentLoaded', () => {
    let formulario = document.querySelector('#form-form');
    let nombreInput = document.querySelector('#nombre');
    let emailInput = document.querySelector('#email');
    let telInput = document.querySelector('#tel');
    let ideasInput = document.querySelector('#ideas');

    let nombreError = document.querySelector('[data-error="nombre-error"]');
    let emailError = document.querySelector('[data-error="correo-error"]');
    let telError = document.querySelector('[data-error="tel-error"]');
    let ideasError = document.querySelector('[data-error="ideas-error"]');

    function validarNombre() {
        if (nombreInput.value.trim() === '') {
            nombreError.textContent = 'El nombre es obligatorio';
            return false;
        } else {
            nombreError.textContent = '';
            return true;
        }
    }

    function validarEmail() {
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'El correo es obligatorio';
            return false;
        } else if (!emailInput.value.includes('@')) {
            emailError.textContent = 'Debe ser un correo válido';
            return false;
        } else {
            emailError.textContent = '';
            return true;
        }
    }

    function validarTel() {
        if (telInput.value.trim() === '') {
            telError.textContent = 'El teléfono es obligatorio';
            return false;
        } else {
            telError.textContent = '';
            return true;
        }
    }

    function validarIdeas() {
        if (ideasInput.value.trim() === '') {
            ideasError.textContent = 'Este campo es obligatorio';
            return false;
        } else {
            ideasError.textContent = '';
            return true;
        }
    }

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();

        let nombreValido = validarNombre();
        let emailValido = validarEmail();
        let telValido = validarTel();
        let ideasValido = validarIdeas();

        if (nombreValido && emailValido && telValido && ideasValido) {
            console.log('Formulario enviado con éxito');
            formulario.submit(); 
        } else {
            console.error('No se envía el formulario porque hay errores');
        }
    });

    nombreInput.addEventListener('input', validarNombre);
    emailInput.addEventListener('input', validarEmail);
    telInput.addEventListener('input', validarTel);
    ideasInput.addEventListener('input', validarIdeas);
});
