$('.btn').click(function() {
  
  $('.text').text('loading . . .');
  
  $.ajax({
    type:"GET",
    //url:"https://api.meetup.com/2/cities",
	url:"http://192.168.0.17/api/values/",
    //readTextFile("/json/person.json",
	success: function(data) {
      $('.text').text(JSON.stringify(data));
	  //$('.text').text(data);
    },
    dataType: 'json',
	//dataType: 'text',
  });
  
});