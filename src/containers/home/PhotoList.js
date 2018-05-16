import React from 'react';
import Photo from './Photo';

const PhotoList = ({ photos, likePhoto, commentOnPhoto }) => (
  <div>
    {photos.map(photo => (
      <Photo
        key={photo.id}
        {...photo}
        onClick={() => likePhoto(photo.id)}
        onComment={commentOnPhoto}
      />
    ))}
  </div>
);

export default PhotoList;
