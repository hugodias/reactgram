import React from 'react';
import './Photo.scss';

const Photo = props => (
  <div key={props.id} className="Photo">
    <div className="Profile">
      <div className="Profile-photo">
        <canvas className="Profile-photo-canvas" />
        <span className="Profile-photo-container">
          <img src={props.user.profile_image.small} />
        </span>
      </div>
      <div className="Profile-name">
        <a href={props.user.links.self} target="_blank">
          {props.user.first_name}
        </a>
      </div>
    </div>
    <div className="Container">
      <div className="Container-photo">
        <img src={props.urls.regular} />
      </div>
    </div>
  </div>
);

export default Photo;
