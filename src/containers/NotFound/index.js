import React, { Component, PropTypes } from 'react';

class NotFound extends Component {

  render() {
    return (
      <div>
        <div className={styles.container}>
          <h1> 404 Page Not Found </h1>
        </div>
      </div>
    );
  }
}

NotFound.propTypes = {
  children: PropTypes.node
};

export default NotFound;
