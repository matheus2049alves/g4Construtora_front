import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import { api } from "../services/api";

const AuthContext = createContext({})

function AuthProvider({children}){
   const [data,setData] = useState("")
   
  async function signIn({cpf,password}){
    try {
      const response = await api.post("/Login", {cpf, password})
        const {sucesso} = response.data
        setData({sucesso})
        const {funcao} = response.data.sucesso
        console.log(funcao)
        localStorage.setItem("@g4construtora : sucesso", JSON.stringify(sucesso))
      
    } catch (error) {
      if(error.response){
        alert(error.response.data.message)
      }else{
        alert("não foi possivel entrar")
      }
    }
    

  }
  function signOut(){
    localStorage.removeItem("@g4construtora : sucesso")
    console.log("oi")
    setData({})
  }
  useEffect(() => {
    const sucesso = localStorage.getItem("@g4construtora : sucesso")
    if (sucesso){
      setData({
        sucesso :JSON.parse(sucesso)
      })
    }
  },[])

  return(
    <AuthContext.Provider value ={{signIn,user : data.sucesso,signOut,}}>
      {children}
    </AuthContext.Provider>
  )

}


  function useAuth(){
    const context = useContext(AuthContext)

    return context
  }

export {AuthProvider, useAuth }