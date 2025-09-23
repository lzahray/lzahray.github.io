import FadingExpandBox from './FadingExpandBox';

function PublicationsBoundingBox({ visiblePublications = [], hiddenPublications = [] }) {
    return (
        <FadingExpandBox
            title="Publications"
            visibleChildren={visiblePublications}
            hiddenChildren={hiddenPublications}
            colorScheme="green"
        />
    );
}

export default PublicationsBoundingBox;
