import * as React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {
  container,
  image,
  content,
} from './projects.module.css'
const ProjectsPage = () => {

  const sourceData = useStaticQuery(dataQuery)
  const data = sourceData.allProjectsJson.edges
  return (
    <div>
      <h2 id="projects">Projects</h2>
      {
        data.map((project) => (
          <div className={container}>
            <div className={image}>
              { project.node.image && <GatsbyImage image={getImage(project.node.image)} alt="" /> }
            </div>
            <div className={content}>
              <h3>{project.node.title}</h3>
              <p>{project.node.description}</p>
              <p>
                {project.node.links && project.node.links.map((link) => <span><a href={link.url} target="_blank">{link.name}</a></span>)}
              </p>
            </div>
          </div>
        ))
      }
    </div>
  )
}
const dataQuery = graphql`
  query getProjects {
    allProjectsJson {
      edges {
        node {
          title
          description
          links {
            name
            url
          }
          image {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: AUTO)
            }
          }
        }
      }
    }
  }
`
export const Head = () => <title>Oliver Limoyo: Projects</title>
export default ProjectsPage