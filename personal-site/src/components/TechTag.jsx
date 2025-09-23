// Color mapping for different technologies
const getTechColor = (tech) => {
    const colors = {
        'Python': '#3776ab',
        'JavaScript': '#f7df1e',
        'TypeScript': '#3178c6',
        'MaxMSP': '#56bedaff',
        'React': '#1d611dff',
        'Unity': '#000000',
        'C#': '#00599c',
        'Git': '#f05032',
        'Linux': '#fcc624',
        'NumPy': '#013243',
        'ZeroMQ': '#df0000',
        'Raspberry Pi': '#c94520ff',
        'CSS': '#1572b6',
        'VR': '#9c27b0',
        'AI': '#f6730eff',
        'Robotics': '#795548',
        'Music': '#e91e63',
        'Web': '#4caf50',
        'Backend': '#607d8b',
        'Frontend': '#ff9800'
    };
    
    return colors[tech] || '#646cff'; // Default to your site's blue
};

// Individual tech tag component
function TechTag({ technology }) {
    return (
        <span 
            className="tech-tag"
            style={{
                backgroundColor: getTechColor(technology),
                color: technology === 'JavaScript' || technology === 'Linux' ? '#000' : '#fff'
            }}
        >
            {technology}
        </span>
    );
}

// Container component for multiple tech tags
function TechTagsContainer({ technologies = [] }) {
    if (technologies.length === 0) return null;
    
    return (
        <div className="tech-tags-container">
            {technologies.map((tech, index) => (
                <TechTag key={index} technology={tech} />
            ))}
        </div>
    );
}

export { TechTag, TechTagsContainer };
export default TechTagsContainer;
