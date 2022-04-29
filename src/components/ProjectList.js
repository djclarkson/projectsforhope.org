import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import routes from '../routes'

const ProjectListItem = ({ project }) => {
  const startYear = new Date(project.startDate).getFullYear()
  const endYear = project.endDate ? new Date(project.endDate).getFullYear() : null
  const includeEndYear = endYear && startYear !== endYear
  return (
    <Link to={routes.project(project.name)}>
      <Img fluid={project.coverImage.fluid} alt={project.description} />
      <div className="project-list__title">
        <p className="project__name">
          <strong>{project.name}</strong>
        </p>
        <p className="project__metadata">
          {startYear}
          {includeEndYear ? `&endash; ${endYear}` : ``}
        </p>
      </div>
    </Link>
  )
}

const ProjectList = ({ projects }) => (
  <ul className="nostyle project-list">
    {projects.items.map((project, i) => (
      <li className="project-list--entry" key={i}>
        <ProjectListItem project={project} />
      </li>
    ))}
  </ul>
)

export default ProjectList
