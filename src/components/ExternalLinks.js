import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import DescriptionIcon from "@material-ui/icons/Description";

class ExternalLinks extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    return (
      <span className="external-links">
        {this.props.docLink && (
          <a className="doc-icon" href={this.props.docLink} download>
            <DescriptionIcon
              style={{
                fontSize: 22,
                color: "var(--lightest-slate)",
                marginRight: "10px"
              }}
            ></DescriptionIcon>
          </a>
        )}
        <a className="github-icon" href={this.props.githubLink}>
          <GitHubIcon
            style={{
              fontSize: 20,
              color: "var(--lightest-slate)"
            }}
          ></GitHubIcon>
        </a>
        {this.props.openLink && (
          <a className="open-icon" href={this.props.openLink}>
            <OpenInBrowserIcon
              style={{
                fontSize: 25,
                color: "var(--lightest-slate)"
              }}
            ></OpenInBrowserIcon>
          </a>
        )}
      </span>
    );
  }
}

export default ExternalLinks;
