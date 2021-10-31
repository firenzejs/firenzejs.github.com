/** @jsx jsx */
import {jsx} from "theme-ui"
import {sample} from 'lodash'

type ProjectCardProps = {
  link: string
  title: string
  children: React.ReactNode
  bg: string
}

const gradients = [
  'linear-gradient(45deg, #D4145A 0%, #FBB03B 100%)',
  'linear-gradient(45deg, #662D8C 0%, #ED1E79 100%)',
  'linear-gradient(45deg, #009245 0%, #FCEE21 100%)',
  'linear-gradient(45deg, #D585FF 0%, #00FFEE 100%)',
  'linear-gradient(45deg, #3D7EAA 0%, #FFE47A 100%)',
  'linear-gradient(45deg, #5C258D 0%, #4389A2 100%)',
  'linear-gradient(45deg, #4776E6 0%, #8E54E9 100%)',
  'linear-gradient(45deg, #1F1C2C 0%, #928DAB 100%)',
  'linear-gradient(45deg, #DD5E89 0%, #F7BB97 100%)',
  'linear-gradient(135deg, #D4145A 0%, #FBB03B 100%)',
  'linear-gradient(135deg, #662D8C 0%, #ED1E79 100%)',
  'linear-gradient(135deg, #009245 0%, #FCEE21 100%)',
  'linear-gradient(135deg, #D585FF 0%, #00FFEE 100%)',
  'linear-gradient(135deg, #3D7EAA 0%, #FFE47A 100%)',
  'linear-gradient(135deg, #5C258D 0%, #4389A2 100%)',
  'linear-gradient(135deg, #134E5E 0%, #71B280 100%)',
  'linear-gradient(135deg, #4776E6 0%, #8E54E9 100%)',
  'linear-gradient(135deg, #1F1C2C 0%, #928DAB 100%)',
  'linear-gradient(135deg, #DD5E89 0%, #F7BB97 100%)',
]

const ProjectCard = ({link, title, children, bg}: ProjectCardProps) => (
  <a
    href={link}
    target={link !== '#' ? "_blank" : "_self"}
    rel="noreferrer noopener"
    sx={{
      width: `100%`,
      minHeight: '15em',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      boxShadow: `lg`,
      position: `relative`,
      textDecoration: `none`,
      borderRadius: `lg`,
      px: 4,
      py: [4, 4],
      color: `white`,
      background: bg || sample(gradients),
      transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
      "&:hover": {
        color: `white !important`,
        transform: `translateY(-5px)`,
        boxShadow: `xl`,
      },
      h5: {
        margin: '0',
        padding: '0',
        color: '#1c1c1c'
      },
      i: {
        color: '#1c1c1c',
        display: 'inline-block',
        ':not(:last-child)': {
          marginBottom: '16px',
        }
      }
    }}
  >
    <div sx={{opacity: 0.85, textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)`}}>{children}</div>
    <div
      sx={{
        letterSpacing: `wide`,
        pt: 4,
        fontSize: [4, 4],
        fontWeight: `medium`,
        lineHeight: 1,
      }}
    >
      {title}
    </div>
  </a>
)

export default ProjectCard
