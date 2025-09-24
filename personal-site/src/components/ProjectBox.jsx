import { useState } from 'react';
import TechTagsContainer from './TechTag';
import LinkBox from './LinkBox';

function ProjectBox({title, description, date, projectType, linkBoxes = [], children, technologies = [], variant = 'default'}) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = (event) => {
        event.stopPropagation(); // Prevent event from bubbling up to bounding box
        setIsExpanded(!isExpanded);
    };

    return (
        <div 
            className={`individual-project-box ${variant} ${isExpanded ? 'expanded' : ''}`}
            onClick={toggleExpanded}
            style={{ cursor: 'pointer' }}
        >
            {/* Technology tags in top-right corner */}
            <TechTagsContainer technologies={technologies} />
            
            <div className="project-header">
                <div className="expand-indicator">
                    {isExpanded ? '▼' : '▶'}
                </div>
                <div>
                    <h2>{title}</h2>
                    <p className="project-meta">{projectType}, {date}</p>
                    <p style={{ maxWidth: '80%', margin: '0 auto' }}>{description}</p>
                    {isExpanded && (
                <div className="expanded-content">
                    {children}
                </div>
            )}
                    {/* Horizontally put link boxes in list next to each other */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', marginTop: '12px', marginBottom: "0 auto" }}>
                        {linkBoxes}
                    </div>
                </div>
            </div>
            
            
        </div>
    );
}

export default ProjectBox;