# react-input-auto-tab

> React Input Field with Auto tabbing functionality component.

[![Build Status](https://travis-ci.org/ayoola-solomon/react-input-auto-tab.svg?branch=master)](https://travis-ci.org/ayoola-solomon/react-input-auto-tab)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](https://github.com/ayoola-solomon/react-input-auto-tab/blob/master/LICENSE)

react-input-auto-tab is a module that easily lets you drop it into your existing project and get the benefits of HTML input element with auto tabbing functionality. It's a plug and play component that'll fit in your workflow if your using standalone React or React with Redux.

## Usage

`npm install --save react-input-auto-tab`

```js
import React, { Component } from 'react';
import Autotab from 'react-input-auto-tab';

class InputField extends Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(response) {
    console.log(response);
  }

  render() {
    return (
      <Autotab
        type="text"
        name="dayOfBirth"
        maxLength={2}
        hint="Enter your day of birth"
        style={{ height: 24, paddingLeft: 10 }}
        onChange={this.handleChange}
        autoFocus
      />
    )
  }
}

export default InputField;
```

### Properties
| Name | Type | Default | Description |
| ---- |:----:|:-----:|:-----|
| type | string | text | Specifies the type of input to display such as "password" or "text"|
| name* | string | | Specifies the name of the component |
| value | string or number | | Specifies the value of the component |
| hint | string | | Specifies a short hint that describes the expected value of the component |
| maxLength | number | | Specifies component value length restriction and auto tabbing. The maxLength has to be set for the auto tabbing to work else it will work like a normal HTML input field. |
| onChange* | function | `() => {}` | callback function that is fired when component value changes |
| style | object | | Override the inline-styles of the root element |
| autoFocus | bool | false | Specifies that component should automatically get focus on render |

*required properties
