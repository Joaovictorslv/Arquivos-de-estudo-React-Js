import {useState} from 'react'

function Condicional(){

    const [email, setEmail] = useState()
    const [useremail, setUserEmail] = useState()

    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
    }

    function limparEmail(){
        setUserEmail('')
    }

return(
    <div>
        <h2>Cadastre seu email:</h2>

        <form>
            <input type="email" placeholder="Digite seu email..."
            onChange={(e) => setEmail(e.target.value)}/>
            <button type="submit" onClick={enviarEmail}>Enviar-email</button>

            {useremail && (
                <div>
                    <p>O e-mail do usuário é: {useremail}</p>
                    <button onClick={limparEmail}>Limpar e-mail</button>
                </div>
            )}
        </form>
    </div>
)
}

export default Condicional