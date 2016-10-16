# react-auto-tab

> React Input Field with Auto tabbing functionality component.

[![Build Status](https://travis-ci.org/ayoola-solomon/react-auto-tab.svg?branch=master)](https://travis-ci.org/ayoola-solomon/react-auto-tab)
[![Coverage Status](https://coveralls.io/repos/github/ayoola-solomon/react-auto-tab/badge.svg?branch=master)](https://coveralls.io/github/ayoola-solomon/react-auto-tab?branch=master)

react-auto-tab is a module that easily lets you drop it into your existing project and get the benefits of HTML input element with auto tabbing functionality. It's a plug and play component that'll fit in your workflow if your using standalone React or React with Redux.

## Usage

`npm install --save react-google-login-component`

`import Autotab from 'react-auto-tab'`

```
<Autotab
  type="text"
  name="DD"
  maxLength={8}
  style={{ height: 30, paddingLeft: 10 }}
  hint="Enter your day of birth"
  onChange={this.handleChange}
  autoFocus
/>
```

### Properties
| Name | Type | Default | Description |
| ---- |:----:|:-----:|:-----|
| type | string | text | Specifies the type of input to display such as "password" or "text"|
| name* | string | | name given to the element |
| value | string or number | | |
| hint | string | | Input field placeholder |
| maxLength | number | | for input value restriction and auto tabbing. The maxLength has to be set for the auto tabbing to work. |
| onChange* | function | `(value) => console.log(value)` | callback function that is fired when component value changes |
| style | object | | Override the inline-styles of the root element |
| autoFocus | bool | false | input field autoFocus |

*required properties
