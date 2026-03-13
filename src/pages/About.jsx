import { Link } from 'react-router-dom'
import './About.css'

function About() {
  const improvements = [
    {
      icon: '🔐',
      title: 'Protected Routes',
      desc: 'Guard certain routes so only authenticated users can access them.',
      code: '<Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />',
    },
    {
      icon: '⚡',
      title: 'Lazy Loading',
      desc: 'Split your code and load page components only when they are needed.',
      code: "const About = React.lazy(() => import('./pages/About'))",
    },
    {
      icon: '🗺️',
      title: 'Nested Routes',
      desc: 'Create layout-based routing where child components share parent layout.',
      code: '<Route path="/dashboard" element={<Dashboard />}>\n  <Route index element={<Overview />} />\n</Route>',
    },
  ]

  const routerAPIs = [
    { name: 'useNavigate()', desc: 'Programmatically navigate to a route' },
    { name: 'useParams()', desc: 'Access dynamic URL parameters' },
    { name: 'useLocation()', desc: 'Read current location/path' },
    { name: 'useSearchParams()', desc: 'Read and set URL query strings' },
    { name: 'Outlet', desc: 'Render child routes in a layout' },
    { name: 'NavLink', desc: 'Link with active class support' },
  ]

  return (
    <div className="about">
      {/* Hero */}
      <section className="about-hero">
        <div className="about-badge">
          <span>📖</span>
          About This Project
        </div>
        <h1 className="about-title">
          Built for <span className="gradient-text">Learning</span>
        </h1>
        <p className="about-desc">
          This project demonstrates client-side routing with React Router v6 — a core skill
          for any React developer building multi-page applications.
        </p>
      </section>

      {/* Explanation */}
      <section className="section">
        <div className="section-inner">
          <div className="explanation-grid">
            <div className="explanation-text">
              <span className="tag">How It Works</span>
              <h2 className="section-title" style={{ marginTop: '16px' }}>Logic Behind Routing</h2>
              <div className="logic-items">
                <div className="logic-item">
                  <div className="logic-number">01</div>
                  <div>
                    <h4>BrowserRouter wraps the app</h4>
                    <p>Provides routing context to all child components using the History API.</p>
                  </div>
                </div>
                <div className="logic-item">
                  <div className="logic-number">02</div>
                  <div>
                    <h4>Routes matches the URL</h4>
                    <p>Scans all Route children and renders the one whose path matches the current URL.</p>
                  </div>
                </div>
                <div className="logic-item">
                  <div className="logic-number">03</div>
                  <div>
                    <h4>Link updates the URL</h4>
                    <p>Instead of a full page reload, Link updates the URL and lets Router handle the rest.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="router-apis">
              <div className="code-header">
                <span className="dot red" /><span className="dot yellow" /><span className="dot green" />
                <span className="code-filename">React Router APIs</span>
              </div>
              <div className="api-list">
                {routerAPIs.map((api, i) => (
                  <div key={i} className="api-item">
                    <code className="api-name">{api.name}</code>
                    <span className="api-desc">{api.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Improvements */}
      <section className="section improvements-section">
        <div className="section-inner">
          <div className="section-header">
            <span className="tag">Possible Improvements</span>
            <h2 className="section-title">Take It Further</h2>
            <p className="section-sub">
              Here are patterns you can add to extend this project into a production-ready app.
            </p>
          </div>

          <div className="improvement-cards">
            {improvements.map((item, i) => (
              <div key={i} className="improvement-card" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="imp-top">
                  <span className="imp-icon">{item.icon}</span>
                  <div>
                    <h3 className="imp-title">{item.title}</h3>
                    <p className="imp-desc">{item.desc}</p>
                  </div>
                </div>
                <div className="imp-code">
                  <pre><code>{item.code}</code></pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-inner">
          <h2 className="cta-title">Ready to explore?</h2>
          <p className="cta-sub">Head back to the home page or check out the React Router docs.</p>
          <div className="cta-actions">
            <Link to="/" className="btn-primary">← Back to Home</Link>
            <a
              href="https://reactrouter.com/en/main/start/tutorial"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Full Tutorial ↗
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
