$(function() {
	var dataRef = new Firebase("https://myschedulerapp.firebaseIO.com");
	var notesdata = dataRef.child('notes');
	$('#nbtns').click(function() {
		 var title = $('#notetext').val();
	     var text = $('#details').val();
	     var color = document.getElementById("myColor").value;

	     notesdata.push({title: title, text: text,color:color});
	     $('#notetext').val('');
	     $('#details').val('');
	});
	notesdata.on('child_added', function(snapshot) {
        var message = snapshot.val();
        displayChatMessage(message.title, message.text, message.color);
      });
      
      
      function displayChatMessage(title, text,color) {
      	 

      	$('<div/>').text(text).css({"background-color":color,
      								"margin-bottom":"20px"}).addClass("important").addClass("imp").addClass("neon").prepend($('<p>').text(title).addClass("titlefont")).prepend(title+"<a id='delete' href='#' style='float:right;'>X</a>").css({"width":"250px",
      								 "height":"auto","font-family":"Candara"}).fadeIn(999).slideDown(1000).prependTo($('#messagesDiv'));
        $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
        
      };
      $('#nbtnc').click(function(snapshot){
      	$('#notetext').val('');
	     $('#details').val('');
      });
});

$(function() {
	var dataRef = new Firebase("https://myschedulerapp.firebaseIO.com");
	var listdata = dataRef.child('list');
		
	$('#newlistitem').click(function() {
		var listvar = $('#newlist').val();
		var licolor = document.getElementById("listColor").value;
          listdata.push({messages:listvar,listcolor:licolor});

          $('#newlist').val('');
	});

	listdata.on('child_added', function(snapshot) {
        var message = snapshot.val();
        displayListMessage(message.listvar);
      });


	function displayListMessage(listvar) {
        $('#listtable').append("<tr><td>"+listvar+"</td></tr>");
      };

      $('#lbtnc').click(function(snapshot){
      	$('#newlist').val('');
	   
      });

});

$(function() {
	var dataRef = new Firebase("https://myschedulerapp.firebaseIO.com");
	var reminderdata = dataRef.child('reminders')
	$('#rbtnd').click(function() {
		 var schedule = $('#schedule').val();
		 var location = $('#location').val();
		 var description = $('#description').val();
		 var startdate = $('#statdate').val();
	     var starttime = $('#stattime').val();
	     var enddate = $('#endate').val();
	     var endtime = $('#entime').val();

	     reminderdata.push({schedule:schedule,
	     					location:location,
	     					description:description,
	     					startdate: startdate, 
		     				starttime: starttime,
		     				enddate:enddate,
		     				endtime:endtime});

	     $('#schedule').val('');
	     $('#location').val('');
	     $('#description').val('');
	     $('#statdate').val('');
	     $('#stattime').val('');
	     $('#endate').val('');
	     $('#entime').val('');
	     
	     
	});
	reminderdata.on('child_added', function(snapshot) {
        var rd = snapshot.val();
        displayChatMessage(rd.schedule,rd.location,rd.description,rd.startdate,  rd.starttime, rd.enddate,rd.endtime);
      });

      function displayChatMessage(schedule,location,description,startdate, starttime,enddate,endtime) {

      	 $('#myTable').append("<tr><td>"+schedule+"</td><td>"+location+"</td><td>"+description+"</td><td>"+startdate+"</td><td>"+starttime+"</td><td>"+enddate+"</td><td>"+endtime+"</td><td><p id='countdown' onload='CountDownTimer("+startdate+" "+starttime+","+enddate+" "+endtime+", countdown)'></p></td</tr>");
	};

    
      $('#rbtnc').click(function(snapshot){
      	 $('#schedule').val('');
	     $('#location').val('');
	     $('#description').val('');
	     $('#statdate').val('');
	     $('#stattime').val('');
	     $('#endate').val('');
	     $('#entime').val('');
      });
      
      function CountDownTimer(dt1,dt2, id)
    {
        var end = new Date(dt2);

        var _second = 1000;
        var _minute = _second * 60;
        var _hour = _minute * 60;
        var _day = _hour * 24;
        var timer;

        function showRemaining() {
            var now = new Date(dt1);
            var distance = end - now;
            if (distance < 0) {

                clearInterval(timer);
                document.getElementById(id).innerHTML = 'EXPIRED!';

                return;
            }
            var days = Math.floor(distance / _day);
            var hours = Math.floor((distance % _day) / _hour);
            var minutes = Math.floor((distance % _hour) / _minute);
            var seconds = Math.floor((distance % _minute) / _second);

            document.getElementById(id).innerHTML = days + 'days ';
            document.getElementById(id).innerHTML += hours + 'hrs ';
            document.getElementById(id).innerHTML += minutes + 'mins ';
            document.getElementById(id).innerHTML += seconds + 'secs';
        }
		    timer = setInterval(showRemaining, 1000);
}
});
