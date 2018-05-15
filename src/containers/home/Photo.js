import React from 'react';
import { connect } from 'react-redux';
import { commentOnPhoto } from '../../modules/photos';
import './Photo.scss';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faHeart from '@fortawesome/fontawesome-free-solid/faHeart';
import faComment from '@fortawesome/fontawesome-free-solid/faComment';
import Comment from './Comment';

const Photo = props => {
  let input;

  return (
    <div className="Photo">
      <div className="Profile">
        <div className="Profile-photo">
          <canvas className="Profile-photo-canvas" />
          <span className="Profile-photo-container">
            <img src={props.user.profile_image.small} alt={props.user.name} />
          </span>
        </div>
        <div className="Profile-name">
          <a href={props.user.links.self} target="_blank">
            {props.user.name}
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
            <FontAwesomeIcon icon={faHeart} />
          </a>
          <a onClick={props.onComment}>
            <FontAwesomeIcon icon={faComment} />
          </a>
        </section>
        <section className="Footer-stats">{props.likes} curtidas</section>
      </div>
      <div className="Comments">
        <div className="Comments-content">
          {props.comments.map(comment => (
            <Comment key={comment.id} {...comment} />
          ))}
        </div>
        <div className="Comments-form">
          <form
            onSubmit={e => {
              e.preventDefault();
              if (!input.value.trim()) {
                return;
              }
              //dispatch(commentOnPhoto(props.id, input.value));
              input.value = '';
            }}>
            <input ref={node => (input = node)} />
            <button type="submit">Add Todo</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Photo;
