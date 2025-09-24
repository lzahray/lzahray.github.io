import FadingExpandBox from './FadingExpandBox';

function ProjectBoundingBox({ visibleProjects = [], hiddenProjects = [] }) {
    return (
        <FadingExpandBox
            title="Projects"
            visibleChildren={visibleProjects}
            hiddenChildren={hiddenProjects}
            colorScheme="blue"
        />
    );
}

export default ProjectBoundingBox;
