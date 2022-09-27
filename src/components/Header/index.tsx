import { HeaderContainer } from './styles'
import { Timer, Scroll } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import logoGreen from '../../assets/logo/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoGreen} alt="logo" />
      <nav>
        <NavLink to="/" title="Timer" end>
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
