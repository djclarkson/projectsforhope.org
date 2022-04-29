import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../layouts/default'
import ProjectList from '../components/ProjectList'

const IndexPage = ({ data }) => (
  <Layout>
    <ProjectList projects={data.takeshape.projects} className="main" />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    takeshape {
      projects: getProjectList {
        items {
          name
          startDate
          coverImage {
            description
            path
            fluid(maxWidth: 500, maxHeight: 300) {
              ...GatsbyTakeShapeImageFluid
            }
          }
        }
      }
    }
  }
`
