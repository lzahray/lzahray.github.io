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

            {/* Hidden content when expanded */}
            {isExpanded && hasHiddenContent && (
                <div className="fading-expand-expanded">
                    {hiddenChildren}
                </div>
            )}
            
            {/* Gradient overlay bar with arrows - creates fading effect */}
            {hasHiddenContent && (
                <div 
                    className="gradient-bar"
                    onClick={(e) => {
                        e.stopPropagation(); // Prevent bubbling to child components
                        toggleExpanded();
                    }}
                    style={{
                        position: 'absolute',
                        bottom: '0',
                        left: '0',
                        right: '0',
                        height: isExpanded ? '50px' : '120px', // Much smaller height for up arrows
                        background: isExpanded 
                            ? `linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.1) 20%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.4) 80%, rgba(0, 0, 0, 0.7) 100%)`  // Gentler gradient for up arrows
                            : `linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.2) 15%, rgba(0, 0, 0, 0.4) 30%, rgba(0, 0, 0, 0.6) 45%, rgba(0, 0, 0, 0.8) 60%, rgba(0, 0, 0, 0.95) 75%, rgba(0, 0, 0, 1) 100%)`, // Full dramatic gradient for down arrows
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                        paddingBottom: isExpanded ? '12px' : '20px',
                        transition: 'all 0.3s ease',
                        zIndex: '10',
                        borderRadius: '0 0 10px 10px' // Match the container's border radius
                    }}
                    onMouseEnter={(e) => {
                        // Keep the same dramatic gradient, just grow the arrows
                        const arrows = e.target.querySelector('span');
                        if (arrows) {
                            arrows.style.fontSize = '1.3em'; // Same hover size for both
                            arrows.style.transform = 'scale(1.1)';
                        }
                    }}
                    onMouseLeave={(e) => {
                        // Reset arrow size
                        const arrows = e.target.querySelector('span');
                        if (arrows) {
                            arrows.style.fontSize = '1em'; // Same default size for both
                            arrows.style.transform = 'scale(1)';
                        }
                    }}
                >
                    <span style={{
                        color: color.title,
                        fontSize: '1em', // Same size for both up and down arrows
                        fontWeight: 'bold',
                        textShadow: '0 0 12px rgba(0, 0, 0, 1), 0 0 6px rgba(0, 0, 0, 1)',
                        letterSpacing: '8px',
                        opacity: '1',
                        transition: 'all 0.2s ease' // Smooth transition for hover effect
                    }}>
                        {isExpanded ? '▲▲▲' : '▼▼▼'}
                    </span>
                </div>
            )}
        </div>
    );
}

export default FadingExpandBox;
