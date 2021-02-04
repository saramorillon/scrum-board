import React from 'react'
import { Plus } from 'react-feather'
import { Card, CardBody, CardLink, CardSubtitle, CardTitle, Container } from 'reactstrap'
import { Project } from '../../models/Project'

export interface IProjectsProps {
  projects: Project[]
}

export default function Projects({ projects }: IProjectsProps): JSX.Element {
  return (
    <>
      <Container>
        <div className="text-right mb-3">
          <a href={`/projects/edit`}>
            <Plus size="1rem" className="mb-1" /> Create project
          </a>
        </div>
        {projects.map((project) => (
          <Card key={project.name}>
            <CardBody>
              <CardTitle tag="h5">{project.name}</CardTitle>
              <CardSubtitle tag="h6" className="text-muted mb-3">
                {project.description}
              </CardSubtitle>
              <CardLink href={`/project/${project.id}/issues/list`}>Issues</CardLink>
              <CardLink href={`/projects/edit/${project.id}`}>Edit</CardLink>
            </CardBody>
          </Card>
        ))}
      </Container>
    </>
  )
}