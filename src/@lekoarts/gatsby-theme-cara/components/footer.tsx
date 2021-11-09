/** @jsx jsx */
import {Box, jsx} from "theme-ui"
import logoRound from '../../../images/logo_round.svg'

const Footer = () => {
  return (
    <Box as="footer" variant="footer" style={{fontSize: '13px'}}>
      <img src={logoRound} alt="FirenzeJS logo" width={64}/>
      <br/>
      <br/>
      Copyright &copy; {new Date().getFullYear()}. Tutti i diritti riservati ai rispettivi autori
    </Box>
  )
}

export default Footer
