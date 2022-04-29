import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../layouts/default'

export const ProjectMetadata = ({ startDate, endDate, client }) => {
  const startYear = new Date(startDate).getFullYear()
  const endYear = endDate ? new Date(endDate).getFullYear() : null
  const includeEndYear = endYear && startYear !== endYear
  return (
    <div className="project__metainfo">
      {client ? (
        <p className="project__metalink">
          <a href={client.url} target="_blank" rel="noopener noreferrer">
            {client.name}
          </a>
        </p>
      ) : (
        ``
      )}
      <p className="project__metadata">
        {startYear}
        {includeEndYear ? `&endash; ${endYear}` : ``}
      </p>
    </div>
  )
}

export const Project = ({ project }) => (
  <article className="project">
    <header>
      {project.coverImage ? (
        <Img fluid={project.coverImage.fluid} />
      ) : (
        ``
      )}
      <div className="project__title">
        <h1>{project.name}</h1>
        <ProjectMetadata
          startDate={project.startDate}
          endDate={project.endDate}
          client={project.client}
        />
      </div>
    </header>
    <div className="project__description" dangerouslySetInnerHTML={{ __html: project.description }} />
  </article>
)

export default ({ data }) => (
  <Layout>
    <Project project={data.takeshape.project} />
  </Layout>
)

export const query = graphql`
  query($projectId: ID!) {
    takeshape {
      project: getProject(_id: $projectId) {
        name
        startDate
        endDate
        coverImage {
          description
          path
          fluid(maxWidth: 700, maxHeight: 400) {
            ...GatsbyTakeShapeImageFluid
          }
        }
        client {
          name
          url
        }
        description: descriptionHtml
      }
    }
  }
`
