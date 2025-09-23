import { useState } from 'react';

function FadingExpandBox({ 
    title, 
    visibleChildren, 
    hiddenChildren = [], 
    colorScheme = 'blue' // 'blue' for projects, 'green' for publications
}) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    const hasHiddenContent = hiddenChildren.length > 0;

    // Color schemes
    const colors = {
        blue: {
            border: '#7e82c7',
            borderHover: '#535bf2',
            background: 'rgba(126, 130, 199, 0.05)',
            backgroundHover: 'rgba(83, 91, 242, 0.3)',
            backgroundExpanded: 'rgba(83, 91, 242, 0.08)',
            title: '#7e82c7',
            expandedBorder: '#535bf2',
            shadow: 'rgba(83, 91, 242, 0.4)'
        },
        green: {
            border: '#4caf50',
            borderHover: '#66bb6a',
            background: 'rgba(76, 175, 80, 0.05)',
            backgroundHover: 'rgba(76, 175, 80, 0.3)',
            backgroundExpanded: 'rgba(76, 175, 80, 0.08)',
            title: '#4caf50',
            expandedBorder: '#66bb6a',
            shadow: 'rgba(76, 175, 80, 0.4)'
        }
    };

    const color = colors[colorScheme];

    return (
        <div 
            className={`fading-expand-box ${isExpanded ? 'expanded' : ''}`}
            style={{ 
                cursor: 'pointer',
                '--border-color': color.border,
                '--border-hover-color': color.borderHover,
                '--background-color': color.background,
                '--background-hover-color': color.backgroundHover,
                '--background-expanded-color': color.backgroundExpanded,
                '--title-color': color.title,
                '--expanded-border-color': color.expandedBorder,
                '--shadow-color': color.shadow
            }}
            onClick={toggleExpanded}
        >
            <div className="fading-expand-header">
                <h2>
                    {hasHiddenContent 
                        ? (isExpanded ? `▼ ${title}` : `▶ ${title}`)
                        : title
                    }
                </h2>
            </div>

            {/* Always visible content */}
            <div className="fading-expand-visible">
                {visibleChildren}
            </div>

            {/* Preview of hidden content when collapsed */}
            {!isExpanded && hasHiddenContent && (
                <div className="fading-expand-preview">
                    <div className="preview-wrapper">
                        {hiddenChildren.slice(0, 1)} {/* Show first hidden item as preview */}
                    </div>
                </div>
            )}
            
            {/* Clickable ellipsis - positioned relative to main container, not preview */}
            {!isExpanded && hasHiddenContent && (
                <div 
                    className="expand-ellipsis"
                    onClick={(e) => {
                        e.stopPropagation(); // Prevent bubbling to child components
                        toggleExpanded();
                    }}
                    style={{
                        position: 'absolute',
                        bottom: '9px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        color: color.title,
                        fontSize: '3em',
                        fontWeight: 'bold',
                        letterSpacing: '3px',
                        textShadow: '0 0 8px rgba(0, 0, 0, 0.8), 0 0 4px rgba(0, 0, 0, 0.9)',
                        opacity: '0.7',
                        transition: 'all 0.3s ease',
                        zIndex: '10',
                        cursor: 'pointer',
                        padding: '0',
                        borderRadius: '6px',
                        lineHeight: '1',
                        width: 'auto',
                        height: 'auto'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.fontSize = '5em';
                        e.target.style.opacity = '1';
                        //e.target.style.background = 'rgba(0, 0, 0, 0.3)';
                        e.target.style.padding = '2px 8px';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.fontSize = '3em';
                        e.target.style.opacity = '0.7';
                        e.target.style.background = 'transparent';
                        e.target.style.padding = '0';
                    }}
                >
                    ...
                </div>
            )}

            {/* Hidden content when expanded */}
            {isExpanded && hasHiddenContent && (
                <div className="fading-expand-expanded">
                    {hiddenChildren}
                </div>
            )}
            
            {/* Collapse triangle - appears when expanded */}
            {isExpanded && hasHiddenContent && (
                <div 
                    className="collapse-triangle"
                    onClick={(e) => {
                        e.stopPropagation(); // Prevent bubbling to child components
                        toggleExpanded();
                    }}
                    style={{
                        position: 'absolute',
                        bottom: '0px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        color: color.title,
                        fontSize: '4em',
                        fontWeight: 'bold',
                        letterSpacing: '3px',
                        textShadow: '0 0 8px rgba(0, 0, 0, 0.8), 0 0 4px rgba(0, 0, 0, 0.9)',
                        opacity: '0.7',
                        transition: 'all 0.3s ease',
                        zIndex: '10',
                        cursor: 'pointer',
                        padding: '0',
                        borderRadius: '6px',
                        lineHeight: '1',
                        width: 'auto',
                        height: 'auto'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.fontSize = '5em';
                        e.target.style.opacity = '1';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.fontSize = '4em';
                        e.target.style.opacity = '0.7';
                    }}
                >
                    -
                </div>
            )}
        </div>
    );
}

export default FadingExpandBox;
