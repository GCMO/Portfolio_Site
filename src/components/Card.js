import { StyledCard } from './styles/Card.styled'
import { Image } from './styles/Header.styled';

const Card = ({ item: { id, title, body, image } }) => {
  return (
    <StyledCard layout={id % 2 === 1 && 'row-reverse'}> 
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>

      <div>
        <Image src={`/images/${image}`} alt='Tech-Stack' />
      </div>
    </StyledCard>
  )
}

export default Card;
