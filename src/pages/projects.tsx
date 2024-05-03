import * as React from "react"
import { useStaticQuery, graphql } from 'gatsby'
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
              { project.node.image && <img src={require(`../images/projects/${project.node.image}`).default } /> }

            </div>
            <div className={content}>
              <h3>{project.node.title}</h3>
              <p>{project.node.description}</p>
              { project.node.links && (<p>
                { project.node.links.map((link) => <span><a href={link.url} target="_blank">{link.name}</a></span>)}
              </p>)}
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
          image
          links {
            name
            url
          }
        }
      }
    }
  }
`
export const Head = () => <title>Oliver Limoyo: Projects</title>
export default ProjectsPage