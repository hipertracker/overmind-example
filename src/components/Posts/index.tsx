import * as React from 'react'
import { Connect, connect } from '../../overmind'

class Posts extends React.Component<Connect> {
  componentDidMount() {
    this.props.overmind.actions.getPosts()
  }
  render() {
    const { overmind } = this.props

    if (overmind.state.isLoadingPosts) {
      return <h4>Loading posts...</h4>
    }

    return (
      <ul>
        {overmind.state.posts.map(post => <li key={post.id}>{post.title}</li>)}
      </ul>
    )
  }
}

export default connect(Posts)
