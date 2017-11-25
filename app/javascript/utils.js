import humps from 'humps';

// https://github.com/domchristie/humps
export const camelizeKeys = object => humps.camelizeKeys(object);
export const underscoreKeys = object => humps.decamelizeKeys(object);
export const camelize = string => humps.camelize(string);
export const underscore = string => humps.decamelize(string);

export const csrfToken = () => {
  const meta = document.querySelector('meta[name="csrf-token"]');
  return meta && meta.content;
};

// Convert the field names to rails-conpatible ones.
// e.g. input[name='email'] => input[name='user[email]']
export const convertFormFieldNamesForRailsModel = ($form, modelName, fieldNames) => {
  fieldNames.forEach(fieldName => {
    try {
      const railsFieldName = `${modelName}[${underscore(fieldName)}]`;
      $form.querySelector(`input[name='${fieldName}']`).name = railsFieldName;
    } catch (error) {
      /* Ignore error. Check rails log. */
    }
  });
};
