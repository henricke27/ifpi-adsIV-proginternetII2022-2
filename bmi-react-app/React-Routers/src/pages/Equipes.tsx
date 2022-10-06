export const Equipes = () => {
  const times = ['Brasil', 'Sérvia', 'Camarões', 'Suiça']
  
  return (
    <>
      <h2>Equipes</h2>
      <ul>
        {times.map(time => <li>{time}</li>)}
      </ul>
    </>
  )
}