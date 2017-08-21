// window._ = require('lodash');

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

window.$ = window.jQuery = require('jquery')

require('bootstrap-sass')
require('bootstrap-datetime-picker')
require('blueimp-file-upload')

// require vendor plugins
require('./vendors/aim.js')
require('./vendors/jquery.iframe.transport')

require('./components/backend-datepicker')
require('./components/backend-sidebar')
require('./components/backend-media')

