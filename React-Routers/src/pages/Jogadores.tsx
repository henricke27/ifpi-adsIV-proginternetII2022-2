export const Jogadores = () => {
  
  const jogadores = ['Neymar', "Cr7", "Messi", "Mbappé", "Mané", "Foden"]
  
  return (
    <>
      <h2>Jogadores</h2>
      <ul>
        {jogadores.map(jogador => <li>{jogador}</li>)}
      </ul>
    </> 
  )
}