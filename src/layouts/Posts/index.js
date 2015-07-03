import React, {PropTypes} from "react"
import cx from "classnames"
import DefaultTemplate from "../Default"

import Html from "../../modules/Html"
import Head from "../../modules/Head"
import Body from "../../modules/Body"
import PostsList from "../../modules/PostsList"

export default class Posts extends DefaultTemplate {

  // should not be declared here too, only in parent class
  // https://github.com/yannickcr/eslint-plugin-react/issues/68
  static propTypes = {
    metadata: PropTypes.object.isRequired,
    contributors: PropTypes.object.isRequired,
    collections: PropTypes.object.isRequired,
    file: PropTypes.object.isRequired,
    i18n: PropTypes.object.isRequired,
  }

  render() {
    const { file, metadata, collections } = this.props

    return (
      <Html>
        <Head
          title={ file.title }
          stylesheets={ metadata.assets.stylesheets }
        />
        <Body
          scripts={ metadata.assets.scripts }
        >
          <div className="r-Grid putainde-Section">
            <div
              className={cx(
                "r-Grid-cell",
                "r-all--8of12",
                "putainde-Section-contents",
                "js-Posts"
              )}
            >
              <div className="putainde-Title putainde-Title--home">
                <h2 className="putainde-Title-text">
                  { file.title }
                </h2>
              </div>
              <PostsList posts={ collections.posts } />
            </div>
          </div>
        </Body>
      </Html>
    )
  }
}
