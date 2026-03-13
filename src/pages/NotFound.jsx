import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './NotFound.css'

function NotFound() {
  const navigate = useNavigate()
  const [countdown, setCountdown] = useState(10)

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          navigate('/')
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [navigate])

  return (
    <div className="not-found">
      <div className="nf-bg-orb" />

      <div className="nf-content">
        <div className="nf-glitch">
          <span className="glitch-text" data-text="404">404</span>
        </div>

        <h1 className="nf-title">Page Not Found</h1>
        <p className="nf-desc">
          Looks like this route doesn't exist. You'll be redirected to the homepage in{' '}
          <span className="countdown">{countdown}</span> seconds.
        </p>

        <div className="nf-code">
          <code>{`// No route matched for: ${window.location.pathname}`}</code>
        </div>

        <div className="nf-actions">
          <Link to="/" className="btn-primary">← Go Home</Link>
          <Link to="/about" className="btn-secondary">About Page</Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
