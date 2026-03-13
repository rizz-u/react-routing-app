import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  const concepts = [
    {
      icon: '⬡',
      color: '#7c6bff',
      title: 'React Router',
      desc: 'Manages client-side routing without page reloads, giving your app SPA behavior.',
    },
    {
      icon: '⬡',
      color: '#ff6b9d',
      title: 'Routes & Route',
      desc: 'Defines which component renders for each URL path in your application.',
    },
    {
      icon: '⬡',
      color: '#6bffd8',
      title: 'Link Component',
      desc: 'Replaces anchor tags for navigation, updating the URL without a full page reload.',
    },
  ]

  const features = [
    'Single Page Application behavior',
    'Smooth animated page transitions',
    '404 Not Found page handling',
    'Responsive mobile navigation',
    'Active link highlighting',
  ]

  return (
    <div className="home">
      {/* Background effects */}
      <div className="bg-orb orb-1" />
      <div className="bg-orb orb-2" />
      <div className="bg-orb orb-3" />
      <div className="grid-overlay" />

      {/* Hero */}
      <section className="hero">
        <div className="hero-badge">
          <span className="badge-dot" />
          React Router v6 Example
        </div>

        <h1 className="hero-title">
          Routing in
          <br />
          <span className="gradient-text">React Apps</span>
        </h1>

        <p className="hero-desc">
          A clean, well-structured example of client-side routing using React Router DOM.
          Navigate between pages without a single full reload.
        </p>

        <div className="hero-actions">
          <Link to="/about" className="btn-primary">
            Go to About
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10m0 0L9 4m4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <a
            href="https://reactrouter.com/en/main"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            View Docs ↗
          </a>
        </div>

        {/* Floating code snippet */}
        <div className="code-card">
          <div className="code-header">
            <span className="dot red" /><span className="dot yellow" /><span className="dot green" />
            <span className="code-filename">App.jsx</span>
          </div>
          <pre className="code-body"><code>{`import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}`}</code></pre>
        </div>
      </section>

      {/* Concepts */}
      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <span className="tag">Concepts Covered</span>
            <h2 className="section-title">What You'll Learn</h2>
          </div>

          <div className="cards-grid">
            {concepts.map((c, i) => (
              <div
                className="concept-card"
                key={i}
                style={{ animationDelay: `${i * 0.1}s`, '--card-accent': c.color }}
              >
                <div className="card-icon" style={{ color: c.color }}>
                  {c.icon}
                </div>
                <h3 className="card-title">{c.title}</h3>
                <p className="card-desc">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section features-section">
        <div className="section-inner features-inner">
          <div className="features-text">
            <span className="tag">Functionalities</span>
            <h2 className="section-title">What's Included</h2>
            <p className="features-subtitle">
              This project showcases the essential patterns you'll use in every React application that needs multiple pages.
            </p>
            <ul className="features-list">
              {features.map((f, i) => (
                <li key={i} className="feature-item" style={{ animationDelay: `${i * 0.08}s` }}>
                  <span className="check-icon">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <Link to="/about" className="btn-primary" style={{ marginTop: '32px', display: 'inline-flex' }}>
              Explore About Page →
            </Link>
          </div>

          <div className="folder-card">
            <div className="code-header">
              <span className="dot red" /><span className="dot yellow" /><span className="dot green" />
              <span className="code-filename">Folder Structure</span>
            </div>
            <div className="folder-tree">
              <div className="tree-item folder root-folder">📁 src/</div>
              <div className="tree-item folder sub">📁 pages/</div>
              <div className="tree-item file deep">📄 Home.jsx</div>
              <div className="tree-item file deep">📄 About.jsx</div>
              <div className="tree-item file deep">📄 NotFound.jsx</div>
              <div className="tree-item folder sub">📁 components/</div>
              <div className="tree-item file deep">📄 Navbar.jsx</div>
              <div className="tree-item file sub">📄 App.jsx</div>
              <div className="tree-item file sub">📄 main.jsx</div>
              <div className="tree-item file sub">📄 index.css</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
