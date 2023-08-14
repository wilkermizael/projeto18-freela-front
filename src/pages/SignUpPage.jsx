import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import axios from "axios"
import MyWalletLogo from "../components/MyWalletLogo"

export default function SignUpPage() {
  
  const [nome,setNome] = useState('')
  const [email,setEmail] = useState('')
  const [senha,setSenha] = useState('')
  const [phone,setPhone] = useState('')
  const [cpf,setCpf] = useState('')
  const [confirmSenha, setConfirmSenha] = useState('')
  const navigate = useNavigate()
  function enviarCadastro(event){
    event.preventDefault();
   
      let dadosCadastro = {
        name:nome,
        email:email,
        phone:phone,
        cpf:cpf,
        password:senha
        
      }
      if(senha === confirmSenha){
        console.log(dadosCadastro)
        axios.post("https://projeto18-freela-api.onrender.com/cadastro", dadosCadastro)
        .then(() => navigate('/')) 
        //.catch((error) => alert(error.response.data))
        .catch((error) => alert(error.response.data))

      }else{
        navigate('/cadastro')
        alert('As senhas nao sao iguais') 
      }
  }



  return (
    <SingUpContainer>
      <form onSubmit={enviarCadastro}>
        
        <MyWalletLogo />
        <input  placeholder="Nome" type="text" value={nome} onChange={e =>setNome( e.target.value)}/>
        <input  placeholder="E-mail" type="email" value={email} onChange={e => setEmail(e.target.value)}/>
        <input  placeholder="Phone" type="phone" value={phone} onChange={e => setPhone(e.target.value)}/>
        <input  placeholder="CPF" type="cpf" value={cpf} onChange={e => setCpf(e.target.value)}/>
        <input  placeholder="Senha" type="password" autocomplete="new-password" value={senha} onChange={e => setSenha(e.target.value)}/>
        <input data-test='conf-password' placeholder="Confirme a senha" type="password" autocomplete="new-password" value={confirmSenha} onChange={e => setConfirmSenha(e.target.value)}/>
        <button data-test='sign-up-submit'>Cadastrar</button>
  
      </form>

      <Link to={'/signin'}>
        Já tem uma conta? Entre agora!
      </Link>
    </SingUpContainer>
  )
}

const SingUpContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`