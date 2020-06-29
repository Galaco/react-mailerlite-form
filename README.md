# React MailerLite Form

React component for MailerLite forms.

## Instructions

1. Install dependency: 
* NPM: `npm install react-mailerlite-form`
* yarn: `yarn add react-mailerlite-form`

2. Add script
    ```js
    import React from 'react'
    import ReactDOM from 'react-dom'
    import MailerLite from 'react-mailerlite-form'

    const MyMailerLiteForm = () => (
      <MailerLite
        code={123456}
        trackerId="vc2g234g2lewklfl23j4234"
        header={(<div>Some Instructions</div>)}
        submitButtonContent="Submit"
        submittingButtonContent="Submitting..."
        submissionComplete={(<div>Success!</div>)}
        emailPlaceholder="Enter your email..."
      />
    )

    ReactDOM.render(
      <MyMailerLiteForm />,
      document.getElementById('content')
    )
    ```

## Configuration
* All props are optional except `code ` and `trackerId`. These 2 values can be obtained fom MailerLite in various ways. The easiest is probably to create a default template on MailerLite and extract the values through DOM inspection.
* All other props, except `emailPlaceholder` accept `null`, `string` or react element