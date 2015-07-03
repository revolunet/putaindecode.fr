import React, {Component, PropTypes} from "react"

const { string, array } = PropTypes

export default class TagFilter extends Component {
  static contextTypes = {
    i18n: PropTypes.object,
  }

  static propTypes = {
    activeTag: string.isRequired,
  }

  render() {
    const { activeTag } = this.props
    return (
      <div className="putainde-TagsFilter">
        Articles filtrés par: { activeTag }
      </div>
    )
  }
}
