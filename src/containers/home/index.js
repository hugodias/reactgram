import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchPhotosIfNeeded } from '../../modules/photos';
import Photo from './Photo';

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
        <h1>Home</h1>

        <Loading {...this.props} />

        {this.props.photos.map(photo => Photo(photo))}

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
      changePage: () => push('/about-us')
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
