import { useState } from 'react';
import TechTagsContainer from './TechTag';

function ProjectBox({title, description, date, projectType, technologies = [], children}) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div 
            className={`project-box ${isExpanded ? 'expanded' : ''}`}
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
                </div>
            </div>
            
            {isExpanded && (
                <div className="expanded-content">
                    {children}
                </div>
            )}
        </div>
    );
}

export default ProjectBox;