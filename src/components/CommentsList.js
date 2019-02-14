import React, { Component } from 'react';
import { connect } from 'react-redux'

class CommentsList extends Component {
   render() {
      return (
         <div>
            <h4>Comments List</h4>
            <ul>
               {this.props.comments.map(comment => {
                  return <li>{comment}</li>
               })}
            </ul>
         </div>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      comments: state.comments
   }
}

export default connect(mapStateToProps)(CommentsList);