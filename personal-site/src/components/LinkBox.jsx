import '../styles/link-box.css';

function LinkBox({ url, name }) {

    return (
        <a 
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="link-box"
            // onClick={handleClick}
            style={{ cursor: 'pointer', textDecoration: 'none' }}
        >
            {name}
        </a>
    );
}

export default LinkBox;
