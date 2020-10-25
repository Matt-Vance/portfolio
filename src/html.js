import * as React from "react";
import PropTypes from "prop-types";

export default class HTML extends React.Component {
  static propTypes = {
    body: PropTypes.string,
  };

  render() {
    let css;
    if (process.env.NODE_ENV === "production") {
      css = (
        <style
          dangerouslySetInnerHTML={{
            __html: require("./layouts/index.scss"),
          }}
        />
      );
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {this.props.headComponents}
          {css}
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          <form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/success"
          >
            <p hidden>
              <label>
                Don’t fill this out:
                <input name="bot-field" />
              </label>
            </p>
            <input type="hidden" name="form-name" />
            <div className="form-field">
              <input type="text" id="name" name="name" />
            </div>
            <div className="form-field">
              <input type="email" id="email" name="email" />
            </div>
            <div className="form-field" id="message-text">
              <textarea name="message"></textarea>
            </div>
          </form>
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}
