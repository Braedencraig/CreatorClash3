import { useCallback, useState } from "react";
import Button from "./button";

export default function SignUpForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const signUp = useCallback(async (email, consent) => {
    const response = await fetch('/api/sign-up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        consent: !!consent,
      }),
    });
    const result = await response.json();
    if (response.ok) {
      console.info(result);
    } else {
      throw new Error(result);
    }
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setIsSuccess(false);
    try {
      const formData = new FormData(e.currentTarget);
      const email = formData.get("email");
      const consent = formData.get("consent");
      if (! email) throw new Error('A valid email is required');
      if (! consent) throw new Error('Consent to receive communications is required');
      await signUp(email, consent);
      setIsSuccess(true);
      setIsSubmitting(false);
    } catch(error) {
      setError(error);
      setIsSubmitting(false);
    }
  }, [signUp]);

  return (
    <div className="sign-up-form">
      <div className="sign-up-form-container">
        {error && (
          <h3 className="sign-up-form-error pxglow">
            {error.message}
          </h3>
        )}
        {isSuccess && (
          <h3 className="sign-up-form-success pxglow">
            {'Success! You\'re now subscribed for updates.'}
          </h3>
        )}
        {!isSuccess && (
          <form onSubmit={handleSubmit}>
            <div className="sign-up-form-copy">
              <h2 className="pxglow">{'Subscribe for updates'}</h2>
              <p>{'Don\'t miss the mayhem! Enter your email and we\'ll keep you posted on matchups, ticket info, and all things Creator Clash.'}</p>
              <ul className="pxglow" style={{ marginTop: '40px', fontSize: '18px', marginLeft: '1em', textAlign: 'start' }}>
                <li><span style={{ fontWeight: 400 }}>{'Presale begins'}</span> {'Wednesday, Feb 5 - 10am ET'}</li>
                <li><span style={{ fontWeight: 400 }}>{'Presale ends'}</span> {'Thursday, Feb 6 - 10pm ET'}</li>
                <li><span style={{ fontWeight: 400 }}>{'Public on sale begins'}</span> {'Friday, Feb 7 - 10am ET'}</li>
              </ul>
            </div>
            <div className="sign-up-form-fields">
              <div className="sign-up-form-field">
                <label htmlFor="sign-up-email" className="pxglow">Email *</label>
                <input
                  type="email"
                  id="sign-up-email"
                  name="email"
                  placeholder="me@example.com"
                  required={true}
                  disabled={isSubmitting}
                />
              </div>
              <div className="sign-up-form-field">
                <div className="check-field">
                  <input
                    type="checkbox"
                    id="sign-up-consent"
                    name="consent"
                    required={true}
                    disabled={isSubmitting}
                  />
                  <label htmlFor="sign-up-consent">I consent to my email being used for purposes related to The Creator Clash 3 updates and notifications. *</label>
                </div>
              </div>
              <Button type="submit" disabled={isSubmitting}>
                {'Subscribe >'}
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
