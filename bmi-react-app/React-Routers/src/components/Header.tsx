import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <header>
          <h1>Copa do mundo 2022</h1>
          <nav>
            <ul>
              <li><Link to='/'>home</Link></li>
              <li><Link to='/equipes'>equipes</Link></li>
              <li><Link to='/jogadores'>jogadores</Link></li>
            </ul>
          </nav>
    </header>
  )
}