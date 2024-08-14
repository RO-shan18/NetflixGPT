export const CheckValidate = (Email, Password)=>{

    const IsEmailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(Email);

    const IsPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(Password);

    if(!IsEmailValid) return "Email is not Valid"
    if(!IsPasswordValid) return "Password is not Valid"

    return null
}