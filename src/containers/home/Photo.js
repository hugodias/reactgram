import React from 'react';
import './Photo.scss';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faHeart from '@fortawesome/fontawesome-free-solid/faHeart'

const Photo = props => (
  <div key={props.id} className="Photo">
    <div className="Profile">
      <div className="Profile-photo">
        <canvas className="Profile-photo-canvas" />
        <span className="Profile-photo-container">
          <img src={props.user.profile_image.small} alt={props.user.first_name} />
        </span>
      </div>
      <div className="Profile-name">
        <a href={props.user.links.self} target="_blank">
          {props.user.first_name}
        </a>
      </div>
    </div>
    <div className="Picture">
      <div className="Picture-Container">
        <img src={props.urls.regular} alt={props.description} />
      </div>
    </div>
    <div className="Footer">
      <section className="Footer-actions">
        <a onClick={props.onClick} className={props.liked ? 'liked' : null}>
          <FontAwesomeIcon icon={faHeart}/>
        </a>
      </section>
    </div>
  </div>
);

export default Photo;
