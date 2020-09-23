import React from 'react';
interface ReactPhotoCollageContainerProps {
    width?: string;
    height?: Array<string>;
    layout: Array<number>;
    photos: Array<{
        src: string;
    }>;
    showNumOfRemainingPhotos?: boolean;
}
declare const ReactPhotoCollageContainer: React.FC<ReactPhotoCollageContainerProps>;
export default ReactPhotoCollageContainer;
