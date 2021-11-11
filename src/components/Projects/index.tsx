import React from 'react';
import { ProjectCard, ProjectData } from './ProjectCard';
import { ProjectsContainer, ProjectsContent } from './styles';

export function ProjectsComponent({ content }) {
  return (
    <ProjectsContainer>
      <ProjectsContent>
        <h2>{content.title}</h2>
        <ul className="projects_list" role="list">
          {content.projects.map((project: ProjectData) => (
            <ProjectCard key={project.title} content={project} />
          ))}
        </ul>
      </ProjectsContent>
    </ProjectsContainer>
  );
}
