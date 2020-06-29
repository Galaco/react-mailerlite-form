import * as React from "react"

interface Props {
  code: number
  trackerId: string
  header?: any
  submitButtonContent?: any
  submittingButtonContent?: any
  submissionComplete?: any
  emailPlaceholder?: string
}

const MailerLiteForm = ({ code, trackerId, header, submitButtonContent, submittingButtonContent, submissionComplete, emailPlaceholder }: Props) => {
  React.useEffect(() => {
    const js = `
      function ml_webform_success_${code}() {
          var $ = ml_jQuery || jQuery;
          $('.ml-subscribe-form-${code} .row-success').show();
          $('.ml-subscribe-form-${code} .row-form').hide();
      };
    `
    const script = document.createElement("script")
    const scriptText = document.createTextNode(js)
    script.appendChild(scriptText)
    document.body.appendChild(script)

    const script2 = document.createElement("script")
    script2.src = `https://static.mailerlite.com/js/w/webforms.min.js?${trackerId}`
    document.body.appendChild(script2)
  }, [])

  return (
    <>
      <div
        id={`mlb2-${code}`}
        className={`ml-form-embedContainer ml-subscribe-form ml-subscribe-form-${code}`}
      >
        <div className="ml-form-align-center">
          <div className="ml-form-embedWrapper embedForm">
            <div className="ml-form-embedBody ml-form-embedBodyHorizontal row-form">
              <div className="ml-form-embedContent">
                { header && header }
              </div>
              <form
                className="ml-block-form"
                action="https://app.mailerlite.com/webforms/submit/s3v3x0"
                data-code="s3v3x0"
                method="post"
                target="_blank"
              >
                <div className="ml-form-formContent horozintalForm">
                  <div className="ml-form-horizontalRow">
                    <div className="ml-input-horizontal">
                      <div className="horizontal-fields">
                        <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                          <input
                            type="email"
                            className="form-control"
                            data-inputmask=""
                            required
                            name="fields[email]"
                            placeholder={emailPlaceholder || ''}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="ml-button-horizontal primary">
                      <div>
                        <button
                          type="submit"
                        >
                          { submitButtonContent && submitButtonContent}
                        </button>
                        <button
                          type="button"
                          disabled={true}
                          style={{ display: "none" }}
                          className="loading"
                        >
                          <div
                            className="ml-form-embedSubmitLoad"
                            style={{ margin: "0 auto" }}
                          >
                            { submittingButtonContent && submittingButtonContent }
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <input type="hidden" name="ml-submit" value="1" />
              </form>
            </div>
            <div
              className="ml-form-successBody row-success"
              style={{ display: "none" }}
            >
              <div
                className="ml-form-successContent"
                style={{
                  height: "140px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                { submissionComplete && submissionComplete }
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src={`https://track.mailerlite.com/webforms/o/${code}/s3v3x0?${trackerId}`}
        width="1"
        height="1"
        style={{
          maxWidth: "1px",
          maxHeight: "1px",
          visibility: "hidden",
          padding: 0,
          margin: 0,
          display: "block",
        }}
        alt="."
      />
    </>
  )
}

export default MailerLiteForm
