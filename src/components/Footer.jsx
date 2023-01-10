import React, { Component } from "react";

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <>
            <div className="footer flex">
                <span>Made By Adil Sheikh</span>
                &nbsp;&nbsp;
                <span><a href="https://github.com/adilcodes"><i className="fa-brands fa-github"></i></a></span>
            </div>
        </>
    );
  }
}
