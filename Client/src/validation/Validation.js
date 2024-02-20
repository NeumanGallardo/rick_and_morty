// inputs = {
    //     username:'batman',
    //     password:'robin1234'
    // }
export default function validation(inputs){
        const errors = {};
        const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        const regexpassword =  /^(?=\w*\d)\S{6,10}$/;
        const regexnumber =  /^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$/i

        //revisamos que el username sea un email
        //validacion user name
        if (!regexEmail.test(inputs.Email)) {
            errors.Email = 'Debe ser correo electronico'
        }
        if (!inputs.Email) {
            errors.Email = 'El usuario no puede estar vacio'
        }
        if (inputs.Email.length > 35) {
            errors.Email = 'Debe tener menos de 35 caracteres'
        }

        //validacion del password
        if (!regexnumber.test(inputs.PassWord)) {
            errors.PassWord = "La contrasena debe tener una letra"
        }
        if (!regexpassword.test(inputs.PassWord)) {
            errors.PassWord = "Debe tener entre 6 y 10 caracteres"
        }
        return errors;
    }