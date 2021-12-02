function getMessages() {
  let messageContainer = $("#messages")
  messageContainer.html('')
  var messageTemplate = Handlebars.compile(
				$('#messageTemplate').html());

    $.ajax('/data/messages', {
					success: function(data){
            console.log('data: ', data)
						messageContainer.append(messageTemplate(data))
					}
				});

}
