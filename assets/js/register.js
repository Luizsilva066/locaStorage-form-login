const inputUser = document.querySelector("#log-usuario")
const inputPassword = document.querySelector("#log-senha")
const inputConfirmPassword = document.querySelector("#log-confirmar-senha")
const inputRegister = document.querySelector("#SignInBtn")

const cadastrarUsuario = ()=>{

    let user = inputUser.value
    let password = inputPassword.value
    let confirmPassword = inputConfirmPassword.value

    if(password == confirmPassword && user.trim() !="") {
        localStorage.setItem("user",user)
        localStorage.setItem("password",password)
        window.location.href = "../../index.html"
        alert("Cadastrado finalizado com sucesso")
        return;
    }

    alert("Falha no Cadastro!")

}

inputRegister.addEventListener("click", cadastrarUsuario)
