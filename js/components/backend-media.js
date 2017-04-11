/*jslint unparam: true */
/*global window, $ */
$(function () {
  'use strict';
  // Change this to the location of your server-side upload handler:
  var url = '/backend/upload';

  $('#fileupload').fileupload({
    url: url,
    dataType: 'json',
    done: function (e, data) {
      $.each(data.result.files, function (index, file) {
        var str = '<tr><td>' + file.name + '</td><td><img src="' + file.thumbnailUrl + '" class="img-responsive" /></td><td>' + file.mimes + '</td></tr><input type="hidden" name="media[]" value="' + file.name +'*' +file.mimes+' " />';
        $(str).appendTo('table.fileuploaded')
      });
    },
    progressall: function (e, data) {
      var progress = parseInt(data.loaded / data.total * 100, 10);
      $('#progress .progress-bar').css(
        'width',
        progress + '%'
      );
    }
  }).prop('disabled', !$.support.fileInput)
      .parent().addClass($.support.fileInput ? undefined : 'disabled');
});
