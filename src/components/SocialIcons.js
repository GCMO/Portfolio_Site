import { FaLinkedin, FaGithub, FaSlack, FaMobile } from 'react-icons/fa'
import { StyledSocialIcons } from './styles/SocialIcons.styled'

export default function SocialIcons() {
  return (
    <StyledSocialIcons>
      <li>
        <a href='tel:+46 0722265758' >
          <FaMobile/>
        </a>
      </li>
      <li>
        <a href='https://github.com/GCMO'>
          <FaGithub />
        </a>
      </li>
      <li>
        <a href='https://linkedin.com/in/gabrieleorlandi/'>
          <FaLinkedin />
        </a>
      </li>
      <li>
        <a href='https://slack.com'>
          <FaSlack/>
        </a>
      </li>
    </StyledSocialIcons>
  )
}
