"use client";

const Home = () =>{

  type Morador = {
    primeiroNome: string,
    sobrenome: string
  }

  const morador: Morador = {
    primeiroNome: "sergio",
    sobrenome: "pereira"
  }
  function formatarNomeMorador(morador: Morador){
    return morador.primeiroNome + ' ' + morador.sobrenome;
  }
  function obterSaudacao(morador: null | Morador){
    if(morador)
      return formatarNomeMorador(morador)
    return "Olá estranho"
  }
  const element = <span>Olá mundo, tudo bem?</span>
  return(
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4x1 font-bold">{obterSaudacao(morador)}</h1>
    </div>
  )
}

export default Home