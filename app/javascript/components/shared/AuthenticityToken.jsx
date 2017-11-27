import React from 'react';
import { csrfToken } from 'utils';

const AuthenticityToken = () => (
  <input name="authenticity_token" readOnly type="hidden" value={csrfToken()} />
);

export default AuthenticityToken;
