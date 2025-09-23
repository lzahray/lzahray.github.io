function PublicationItem({ title, venue, year, link, videoLink, description }) {
    return (
        <div className="individual-publication-item">
            <h4 className="individual-publication-title">{title}</h4>
            <p className="individual-publication-venue">{venue}, {year}</p>
            {description && <p className="individual-publication-description">{description}</p>}
            <div className="individual-publication-links">
                {link && (
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        Paper
                    </a>
                )}
                {link && videoLink && " | "}
                {videoLink && (
                    <a href={videoLink} target="_blank" rel="noopener noreferrer">
                        Video
                    </a>
                )}
            </div>
        </div>
    );
}

function PublicationsBox({ publications = [] }) {
    return (
        <div className="publications-grid">
            {publications.map((pub, index) => (
                <PublicationItem key={index} {...pub} />
            ))}
        </div>
    );
}

export default PublicationsBox;
