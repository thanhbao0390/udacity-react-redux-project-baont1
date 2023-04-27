import { Link } from 'react-router-dom'

export default function Header({ title }) {

  return (
    <div className='header'>
      <div>
        <span className='link'><Link to='/home'>List Question</Link></span>
        <span className='link'><Link to='/add'>Add Question</Link></span>
        <span className='link'><Link to='/leaderboard'>Leader Board</Link></span>
      </div>
      <h4>{title}</h4>
    </div>
  )
}