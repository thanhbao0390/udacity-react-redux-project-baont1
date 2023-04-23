import { Link } from 'react-router-dom'

export default function Header({title, link, linkText}) {
  
  return (
    <div>
      <h4>{title}</h4>
      <div>
        <Link to={link}>{linkText}</Link>
      </div>
    </div>
  )
}