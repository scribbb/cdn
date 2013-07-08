$(document).pjax('a', '#pjax-container');
  $('#loading').hide();
  $(document).on('pjax:send', function() {
    $('#loading').show();
    $('#pjax-container').fadeTo('fast', 0.5)
  })
  $(document).on('pjax:complete', function() {
    $('#loading').hide();
    $('#pjax-container').fadeTo('fast', 1)
  })
  $(document).on('pjax:timeout', function(event) {
  event.preventDefault()
})
function DisableButton(button){
  button.disabled = true;
  button.value = 'Loading';
  button.form.submit();
}
