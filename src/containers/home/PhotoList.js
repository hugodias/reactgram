import React from 'react';
import Photo from './Photo';
import { commentOnPhoto } from '../../modules/photos';

const PhotoList = ({ photos, likePhoto }) => (
  <div>
    {photos.map(photo => 
      <Photo 
        key={photo.id} 
        {...photo} 
        onClick={ () => likePhoto(photo.id) }
        onComment={ () => commentOnPhoto()} 
      />
    )}
  </div>
);

export default PhotoList;
