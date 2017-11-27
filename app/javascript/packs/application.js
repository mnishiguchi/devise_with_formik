/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

console.log('Hello World from Webpacker');

// Play with lodash in dev console
import _ from 'lodash';
window._ = _;

// https://github.com/renchap/webpacker-react#usage
import WebpackerReact from 'webpacker-react';
import SignUpForm from 'components/users/SignUpForm';

// Register your root components (those you want to load from your HTML) here.
WebpackerReact.setup({
  SignUpForm
});

// https://github.com/rails/webpacker/issues/336#issuecomment-304107330
document.addEventListener('turbolinks:before-cache', () =>
  WebpackerReact.unmountComponents()
);
