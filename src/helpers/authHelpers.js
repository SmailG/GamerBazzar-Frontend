export const validateAuthData = (data, validationType, fieldName) => {
    // console.log(data, 'DATA')
    let isValid = false;
    if (validationType === 'login') {
        isValid = !!data.email && !!data.password;
    } else if (validationType === 'signup') {
        isValid = !!data.password && !!data.email && data.confirmPassword === data.password;
    } else if (validationType === 'change-password') {
        isValid = !!data.oldPassword && !!data.newPassword
        && data.newPassword === data.confirmPassword;
    }

    let errors = [];
    if((fieldName === 'email' || !fieldName)&& !validateEmail(data.email))
        errors.push({ message: 'Email not valid', field: 'email' })
    if((fieldName === 'password' || !fieldName) && !validatePassword(data.password))
        errors.push( { message: 'Password cannot be empty', field: 'password' })
    if((fieldName === 'confirmPassword' || !fieldName) && data.password !== data.confirmPassword && (validationType === 'signup' || validationType === 'confirm-password'))
        errors.push( { message: 'Password not matching', field: 'confirmPassword' })

    return { isValid, errors };
}

const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const validatePassword = (password) => {
    let isValid = true;
    isValid = !isNullOrWhitespace(password);

    return isValid
}

const isNullOrWhitespace = (input) => {

    if (typeof input === 'undefined' || input == null) return true;

    return input.replace(/\s/g, '').length < 1;
}