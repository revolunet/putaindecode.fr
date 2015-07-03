import React, {Component, PropTypes} from "react"

import PostPreview from "../PostPreview"
import TagFilter from "../TagFilter"

const { array, string } = PropTypes
export default class PostsList extends Component {

  static contextTypes = {
    i18n: PropTypes.object,
  }

  static propTypes = {
    posts: array,
    activeTag: string,
  }

  static defaultProps = {
    activeTag: 'docker',
  }

  constructor(props, context) {
    super(props, context)
    this.state = {
      activeTag: props.activeTag,
    }
  }

  filter(activeTag) {
    this.setState({ activeTag })
  }

  render() {
    const { activeTag } = this.state
    return (
      <div>
        { activeTag ? <TagFilter activeTag={ activeTag }/> : null }
        <div className="putainde-List">
        {
          this.props.posts.map((post) => {
            return <PostPreview key={post.title} post={post} onTagClick={ ::this.filter } />
          })
        }
        </div>
      </div>
    )
  }
}
