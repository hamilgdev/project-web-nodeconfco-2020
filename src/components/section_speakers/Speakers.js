import React from "react"

export default class team extends React.Component {
  render() {
    return (
      <div class="card-speaker">
        <figure className="card-speaker__img">{this.props.figure()}</figure>
        <div className="card-inner-wrap">
          <h3 className="card-speaker__name">{this.props.name}</h3>
          <p class="card-speaker__description">{this.props.description}</p>
          <a
            className="card-speaker__social"
            aria-label="Twitter_Speaker"
            href={this.props.twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
          >{this.props.nickname}</a>
        </div>
      </div>
    )
  }
}
