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
      return "Olá, " + formatarNomeMorador(morador)
    return "Olá estranho"
  }
  
  return(
    <div id="principal" className="min-h-screen flex items-center justify-center bg-black">
      <div id="componente-azul" className="card-azul">
        <h1 className="text-2x1 font-bold text-center">{obterSaudacao(morador)}</h1>
        </div>
      
    </div>
  )
}

export default Home