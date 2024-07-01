import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"
import Research from "./research"
import Work from "./work"
import Projects from "./projects"
import { StaticImage } from "gatsby-plugin-image"
import { bio, image, text, contact, contactItem } from './index.module.css'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className={bio}>
        <div className={image}>
          <StaticImage src="../images/oliver.jpeg" alt="Profile picture" placeholder="none"/>
        </div>
      <div className={text}>
          <h1>Oliver Limoyo</h1>
          <p>I'm a Ph.D. student at the <a href="https://starslab.ca/" target="_blank">STARS Lab</a>, University of Toronto. My research focuses on the application of generative and self-supervised learning to robotics problems. I am also interested in multimodal sensing for manipulation. I'm supervised by <a href="https://twitter.com/domo_mr_roboto" target="_blank">Prof. Jonathan Kelly.</a></p>
          <ul className={contact}>

            <li className={contactItem}>
              <a href="https://twitter.com/OliverLimoyo" target="_blank" title="Twitter">
                <StaticImage placeholder="none" src="../images/icons/twitter.svg" alt="Twitter" />
              </a>
            </li>
            <li className={contactItem}>
            <a href="https://www.linkedin.com/in/oliver-limoyo-937b61b0" target="_blank" title="LinkedIn">
              <StaticImage placeholder="none" src="../images/icons/linkedin.svg" alt="LinkedIn" />
            </a>
            </li>
            <li className={contactItem}>
              <a href="https://scholar.google.com/citations?user=Rcy5gbsAAAAJ&hl=en" target="_blank" title="Google Scholar">
                <StaticImage placeholder="none" src="../images/icons/google.svg" alt="Google Scholar" />
              </a>
            </li>
            <li className={contactItem}>
              <a href="https://github.com/Olimoyo" target="_blank" title="GitHub">
                <StaticImage placeholder="none" src="../images/icons/github.svg" alt="GitHub" />
              </a>
            </li>
            <li className={contactItem}>
              <a href="mailto:oliver.limoyo[at]robotics.utias.utoronto.ca" title="E-mail">
                <StaticImage placeholder="none" src="../images/icons/email.svg" alt="E-mail" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Research />
      <Work />
      <Projects />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Oliver Limoyo</title>
