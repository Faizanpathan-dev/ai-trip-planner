import React from 'react'

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="navbar-brand">
          <span className="navbar-logo" aria-hidden="true">
            ✈
          </span>
          <div>
            <span className="navbar-title">AI Trip Planner</span>
            <span className="navbar-tagline">Plan smarter trips in minutes</span>
          </div>
        </div>
        <nav className="navbar-links" aria-label="Quick links">
          <span className="navbar-link muted">Saved Trips</span>
          <span className="navbar-link muted">History</span>
          <span className="navbar-avatar" title="Profile">
            You
          </span>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
