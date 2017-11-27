import React from 'react';
import PropTypes from 'prop-types';
import { withFormik } from 'formik';
import Yup from 'yup';
import classnames from 'classnames';
import { Button } from 'semantic-ui-react';
import { convertFormFieldNamesForRailsModel } from 'utils';
import FormErrorMessage from 'components/shared/FormErrorMessage';
import AuthenticityToken from 'components/shared/AuthenticityToken';
import TextInput from 'components/shared/TextInput';
import Utf8 from 'components/shared/Utf8';

const formAction = '/users';

// Reference to the form element.
let $form = null;

// https://github.com/jaredpalmer/formik
// https://react.semantic-ui.com/collections/form#form-example-subcomponent-control
const InnerForm = props => {
  const {
    values,
    touched,
    errors,
    dirty,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset
  } = props;

  // When submitting the form we will convert the field names to rails-compatible ones.
  // Rails form would generates field names like name="user[email]" whereas simple field names like
  // name="email" are preferrable in Formik.
  return (
    <form
      method="post"
      action={formAction}
      acceptCharset="UTF-8"
      className="ui large form"
      ref={node => ($form = node)}
      onSubmit={handleSubmit}
      onKeyPress={event => {
        if (event.which === 13 /* Enter */) {
          event.preventDefault();
        }
      }}
    >
      <Utf8 />
      <AuthenticityToken />

      <TextInput
        type="email"
        label="Email"
        name="email"
        iconClassName="user icon"
        placeholder="Enter your email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.email && errors.email}
      />

      <TextInput
        type="password"
        label="Password"
        name="password"
        iconClassName="lock icon"
        placeholder="Enter your password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.password && errors.password}
      />

      <TextInput
        type="password"
        label="Password confirmation"
        name="passwordConfirmation"
        iconClassName="lock icon"
        placeholder="Confirm your password"
        value={values.passwordConfirmation}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.passwordConfirmation && errors.passwordConfirmation}
      />

      <FormErrorMessage errors={errors} touched={touched} />

      <Button onClick={handleReset} disabled={!dirty || isSubmitting}>
        Reset
      </Button>
      <Button positive type="submit" disabled={isSubmitting}>
        Sign Up
      </Button>
    </form>
  );
};

const SignUpForm = withFormik({
  mapPropsToValues: () => ({
    email: '',
    password: '',
    passwordConfirmation: ''
  }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters long')
      .required('Password is required'),
    passwordConfirmation: Yup.string().required(
      'Password confirmation is required'
    )
  }),
  handleSubmit: (values, { setSubmitting, setFieldError }) => {
    // Ensure that password matches password confirmation.
    if (values.password !== values.passwordConfirmation) {
      setSubmitting(false);
      setFieldError('password', 'Password must match password confirmation');
      return;
    }

    convertFormFieldNamesForRailsModel($form, 'user', [
      'email',
      'password',
      'passwordConfirmation'
    ]);

    // Programatically trigger the form submission to rails server.
    $form.submit();
  },
  displayName: 'SignUpForm' // helps with React DevTools
})(InnerForm);

export default SignUpForm;
