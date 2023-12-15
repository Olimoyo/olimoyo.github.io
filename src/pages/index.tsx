import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"
import Research from "./research"
import Work from "./work"
import Projects from "./projects"
import { StaticImage } from "gatsby-plugin-image"
import { bio, image, text } from './index.module.css'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className={bio}>
        <div className={image}>
          <StaticImage src="../images/oliver.jpeg" alt="Profile picture" />
        </div>
      <div className={text}>
          <h1>Oliver Limoyo</h1>
          <p>I'm a Ph.D. student at the STARS Lab, University of Toronto. My research focuses on the application of reinforcement learning for autonomous robots. I'm supervised by Proj. Johnathan Kelly.</p>
        </div>
      </div>
      <Research />
      <Work />
      <Projects />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
