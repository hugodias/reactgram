import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchPhotosIfNeeded, likePhoto, commentOnPhoto } from '../../modules/photos';
import PhotoList from './PhotoList';

const Loading = props => {
  if (props.isFetching) {
    return <div> Loading ... </div>;
  }

  return null;
};

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchPhotosIfNeeded();
  }

  render() {
    return (
      <div className="App">
        <Loading {...this.props} />

        <PhotoList 
          photos={this.props.photos} 
          {...this.props} 
          onPhotoLike={ index => this.props.likePhoto(index) }/>
        <p>
          <button onClick={() => this.props.changePage()}>
            Go to about page via redux
          </button>
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  photos: state.photos.photos,
  isFetching: state.photos.isFetching
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchPhotosIfNeeded,
      likePhoto,
      commentOnPhoto,
      changePage: () => push('/about-us')
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
