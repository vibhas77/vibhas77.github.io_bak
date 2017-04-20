"use strict";

var App = React.createClass({
  displayName: "App",

  getInitialState: function getInitialState() {
    return {
      jobs: []
    };
  },

  componentDidMount: function componentDidMount() {
    // Is there a React-y way to avoid rebinding `this`? fat arrow?
    var th = this;
    this.serverRequest = axios.get(this.props.source).then(function (result) {
      th.setState({
        jobs: result.data.jobs
      });
    });
  },

  componentWillUnmount: function componentWillUnmount() {
    this.serverRequest.abort();
  },

  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h1",
        null,
        "Jobs!"
      ),
      this.state.jobs.map(function (job) {
        return React.createElement(
          "div",
          { key: job.url, className: "job" },
          React.createElement(
            "a",
            { href: job.url },
            job.company_name,
            "is looking for a",
            job.term,
            job.title
          )
        );
      })
    );
  }
});

ReactDOM.render(React.createElement(App, { source: "http://codepen.io/jobs.json" }), document.querySelector("#render-articles"));
