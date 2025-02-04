import { useCallback, useState } from "react";
import Button from "./button";

export default function SignUpForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const signUp = useCallback(async (email) => {
    const response = await fetch('/api/sign-up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email }),
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
      const email = new FormData(e.currentTarget).get("email");
      console.log(email);
      if (! email) throw new Error('No email provided');
      await signUp(email);
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
            {'Success! You\'re now signed up for the presale.'}
          </h3>
        )}
        {!isSuccess && (
          <form onSubmit={handleSubmit}>
            <div className="sign-up-form-copy">
              <h2 className="pxglow">{'Sign up for the presale today'}</h2>
              <p>{'Don\'t miss the mayhem! Tickets go on sale soon. Enter your email and we\'ll keep you posted.'}</p>
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
              <Button type="submit" disabled={isSubmitting}>
                {'Sign up >'}
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
