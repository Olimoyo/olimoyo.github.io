import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  navLinks,
  navLinkItem,
  navLinkText,
  heading,
} from './layout.module.css'
import cv from '../data/Oliver_CV_2023_long.pdf'

interface Props {
  pageTitle?: string,
  children: React.ReactNode,
}
const Layout = ({ pageTitle, children }: Props): React.JSX.Element => {
  return (
    <div className={container}>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
          <li className={navLinkItem}><Link to="#research" className={navLinkText}>Select Publications</Link></li>
          <li className={navLinkItem}><Link to="#work" className={navLinkText}>Work</Link></li>
          <li className={navLinkItem}><Link to="#projects" className={navLinkText}>Projects</Link></li>
          <li className={navLinkItem}><a href={cv} className={navLinkText}>CV</a></li>
        </ul>
      </nav>
      <main>
        { heading && <h1 className={heading}>{pageTitle}</h1> }
        {children}
      </main>
    </div>
  )
}

export default Layout
