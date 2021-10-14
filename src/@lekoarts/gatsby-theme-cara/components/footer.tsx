/** @jsx jsx */
import {Box, jsx} from "theme-ui"

const Footer = () => {
  return (
    <Box as="footer" variant="footer" style={{fontSize: '13px'}}>
      Copyright &copy; {new Date().getFullYear()}. Tutti i diritti riservati
    </Box>
  )
}

export default Footer
