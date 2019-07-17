// React.js imports
import React from 'react';

// UDS component imports
import {
  OCUniform,
  OCCard,
  OCHeading,
  OCCopy,
  OCText,
  OCButton
} from 'oc-uniform';

// UDS CSS import
import 'oc-uniform/dist/all.css';

// Note: CSS can be imported individually.
//
// import 'oc-uniform/dist/base.css';
// import 'oc-uniform/dist/card.css';
// import 'oc-uniform/dist/heading.css';
// import 'oc-uniform/dist/text.css';
// import 'oc-uniform/dist/button.css';

// Application CSS
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mounted: false,
      email: '',
      pwd: ''
    };
  }

  componentDidMount() {
    this.setState({ mounted: true });
  }

  handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  handlePwdChange = e => {
    this.setState({ pwd: e.target.value });
  };

  render() {
    const { state, handleEmailChange, handlePwdChange } = this;

    return (
      <OCUniform className="App">
        <form>
          <OCCard
            modifiers="card--m card--layer-4"
            className={`login${state.mounted ? ' mounted' : ''}`}>
            <img
              className="login__logo"
              src={`${process.env.PUBLIC_URL}/logo.svg`}
              alt="Open Colleges Logo"
              title="Open Colleges"
            />
            <OCHeading level={2} modifiers="h2--compact h2--center">
              Welcome back!
            </OCHeading>
            <OCCopy modifiers="p--center" className="login__blurb">
              Login to access your online campus.
            </OCCopy>
            <OCText
              type="text"
              name="email"
              label="Email"
              value={state.email}
              autoComplete="email"
              autoFocus={true}
              required={true}
              placeholder="fei.sun@opencolleges.edu.au"
              onChange={handleEmailChange}
            />
            <OCText
              type="password"
              name="password"
              label="Password"
              autoComplete="current-password"
              value={state.pwd}
              required={true}
              onChange={handlePwdChange}
            />
            <OCButton action="Login" className="login__button" />
            <OCCopy tag="a" href="#" className="login__forgot-pwd-link">
              Forgot password?
            </OCCopy>
          </OCCard>
        </form>
      </OCUniform>
    );
  }
}
