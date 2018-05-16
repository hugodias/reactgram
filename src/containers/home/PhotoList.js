import React from 'react';
import Photo from './Photo';

const PhotoList = ({ photos, likePhoto, commentOnPhoto }) => (
  <div>
    {photos.map(photo => (
      <Photo
        key={photo.id}
        {...photo.data}
        onClick={() => likePhoto(photo.id)}
        onComment={commentOnPhoto}
      />
    ))}
  </div>
);

export default PhotoList;
