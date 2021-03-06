// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require semantic_ui
//= require_tree .

window.App || (window.App = {});

// Page-specific JavaScript
class Page {
  constructor() {
    this.controller = document.body.dataset.controller;
    this.action = document.body.dataset.action;
  }
}

document.addEventListener('turbolinks:load', function() {
  window.App.page = new Page();
});
