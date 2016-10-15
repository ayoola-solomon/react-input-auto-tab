# react-auto-tab

> React Input Field with Auto tabbing functionality component.

react-auto-tab is a module that easily lets you drop it into your existing project and get the benefits of HTML input element with auto tabbing functionality. It's a plug and play component that'll fit in your workflow if your using standalone React or React with Redux.

## Usage

`npm install --save react-google-login-component`

`import Autotab from 'react-auto-tab'`

```
  <Autotab
  type="password"
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
| ---- |:----:|:-----:|:-----||
| type | string | text | Specifies the type of input to display such as "password" or "text" |
| name* | string | | name given to the element |
| hint | string | | |
| maxLength | number | | for input value restriction and auto tabbing |
| onChange* | function | | callback function that is fired when component when changes `(value) => console.log(value)`|
| style | object | | Override the inline-styles of the root element |
| autoFocus | bool | | input field autoFocus |

*required properties
