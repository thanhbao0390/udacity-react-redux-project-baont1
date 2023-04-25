import { Link } from 'react-router-dom'

export default function Header({title, link, linkText}) {
  
  return (
    <div className='header'>
      <h4>{title}</h4>
      <div>
        <Link to={link}>{linkText}</Link>
      </div>
      <div>
        <Link to='/leaderboard'>Leader Board</Link>
      </div>
    </div>
  )
}