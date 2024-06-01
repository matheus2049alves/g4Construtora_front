import { createContext, useContext } from "react";
import { useState } from "react";
import { api } from "../services/api";

const AuthContext = createContext({})

function AuthProvider({children}){
   const [data,setData] = useState("")
  async function signIn({cpf,password}){
    try {
      const response = await api.post("/Login", {cpf, password})
       const {id} = response.data.sucesso
       setData({id})
      console.log(id)
    } catch (error) {
      if(error.response){
        alert(error.response.data.message)
      }else{
        alert("não foi possivel entrar")
      }
    }
    

  }

  return(
    <AuthContext.Provider value ={{signIn,id : data.id }}>
      {children}
    </AuthContext.Provider>
  )

}


  function useAuth(){
    const context = useContext(AuthContext)

    return context
  }

export {AuthProvider, useAuth }