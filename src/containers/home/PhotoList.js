import React from 'react';
import Photo from './Photo';

const PhotoList = ({ photos, likePhoto }) => (
  <div>
    {photos.map(photo => 
      <Photo 
        key={photo.id} 
        {...photo} 
        onClick={ () => likePhoto(photo.id) } 
      />
    )}
  </div>
);

export default PhotoList;
