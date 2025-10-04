"use client";

import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Login() {
  const supabase = createClient()
  const router = useRouter()
  const[checkinSession, setCheckinSession] = useState(true)
  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<Error>();

  useEffect(()=> {
    const checkSession = async ()=> {
      const{ data:{session} } = await supabase.auth.getSession();
      if(session?.user){
        router.replace("/condominios")
      }else{
        setCheckinSession(false)
      }
    }
    checkSession()
  }, [])

  const login = async (e: React.FormEvent) => {
    setLoading(true)
    e.preventDefault();
    const{data, error} = await supabase.auth.signInWithPassword({email, password})
    if (error || !data.user) {
      if(error.code == "invalid_credentials")
        setErr(new Error("Email ou senha inválidos"));
      else setErr(new Error("Erro inesperado. Tente novamente"))
          setLoading(false)
      return;
    }
    router.replace("/condominios")
  }

if(checkinSession){
  return null;
}
return (
    <div className="flex h-screen flex-col md:flex-row">
      <div className="w-full flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Olá 👋</h2>
          <p className="text-gray-500 mb-6">Insira as informações que você usou ao se registrar.</p>
          <form onSubmit={login}>
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mb-4 border rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 mb-4 border rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
            { err ? 
          <p className="text-red-500 mb-6">{err.message}</p> 
          : null}
            <button type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white p-3 rounded-md hover:opacity-90 transition-all disabled:opacity-50"
            >
            { loading ? "Entrando..." : "Entrar"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}