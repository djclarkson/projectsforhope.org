import React from 'react'

const Footer = () => (
  <footer className="footer">
    <p>
      © {new Date().getFullYear()}
      {` `}
      <a href="https://projectsforhope.org" target="_blank" rel="noopener noreferrer nofollow">
        Projects for Hope
      </a>
    </p>
  </footer>
)

export default Footer
