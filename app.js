	
	$(document).ready(function(){
	    $(".slidedownimg").click(function(){
	        $("#links").show(1000);

	    });
	    $(".slidedownimg").click(function(){
	    $('#show').remove();
	    });
	 });

$(function() {
 $('#backdiv').backstretch([
      "images/back.jpg"
    , "images/back1.jpg"
    , "images/back2.jpg"
    ,  "images/back3.png"
    ,  "images/back4.jpg"
    ,  "images/back5.jpg"
    ,  "images/back6.jpg"
    ,  "images/back7.jpg"
    ,  "images/back8.jpg"
    , 
  ], {duration: 3000, fade: 750});

});
$(function() {
	var dataRef = new Firebase("https://myschedulerapp.firebaseIO.com");
	var notesdata = dataRef.child('notes');
	$('#nbtns').click(function() {
		 var title = $('#notetext').val();
	     var text = $('#details').val();
	     var color = document.getElementById("myColor").value;

	      if(text == "" || title == ""){
	     	alert("All fields must be filled");
	     }else{
	     notesdata.push({title: title, text: text,color:color});
	     $('#notetext').val('');
	     $('#details').val('');
	     }
	});

	notesdata.on('child_added', function(snapshot) {
        var message = snapshot.val();
        displayChatMessage(message.title, message.text, message.color);
      });
      
      
      function displayChatMessage(title, text,color) {
      	 

      	$('<div />').text(text).css({"background-color":color,
      								"margin-bottom":"20px"}).addClass("important").addClass("imp").addClass("neon").prepend($('<p>').text(title).addClass("titlefont")).prepend("<a id='delete' href='#' style='float:right;'><span class='glyphicon glyphicon-trash'></span></a>").css({"width":"250px",
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
		
	$('#lbtns').click(function() {
		var listvar = $('#newlist').val();
		var licolor = document.getElementById("listColor").value;
		 if(listvar == ""){
	     	alert("All fields must be filled");
	     }else{
          listdata.push({listvar:listvar,listcolor:licolor});

          $('#newlist').val('');
	}
});

	listdata.on('child_added', function(snapshot) {
        var msg = snapshot.val();
        displayChatMessage(msg.listvar,msg.licolor);
        donelist(msg.listvar)
      });
		


	function displayChatMessage(listvar,licolor) {
		var i = 0;
        $('#listtable').append("<script>function canci(){document.getElementById('text0').style.text-decoration='line-through';}</script><tr><td><input type= 'checkbox' onchange='canci()' onclick='donelist()' id ='mycheckbox'></td><td><small id='text"+i+"'>"+listvar+"</small></td><td><a id ='del' style='cursor:pointer;'><span class='glyphicon glyphicon-trash'></span></a></td></tr>");
++i;
      };

      function donelist(listvar)
      {
      		if (mycheckbox.checked) {
      			listvar.strike();
      		};
      }
     
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
	     var startdate = $('#stattime').val();
	     var enddate = $('#endate').val();
	     var endtime = $('#entime').val();
	      if(schedule == "" || location == ""|| description == ""|| startdate == ""|| startdate == ""|| enddate == ""|| endtime == ""){
	     	alert("All fields must be filled");
	     }else{
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
	     
	     }
	});
	reminderdata.on('child_added', function(snapshot) {
        var rd = snapshot.val();
        displayChatMessage(rd.schedule,rd.location,rd.description,rd.startdate,  rd.starttime, rd.enddate,rd.endtime);
      });

      function displayChatMessage(schedule,location,description,startdate, starttime,enddate,endtime) {

      	 $('#myTable').append("<tr><td>"+schedule+"</td><td>"+location+"</td><td>"+description+"</td><td>"+startdate+"</td><td>"+starttime+"</td><td>"+enddate+"</td><td>"+endtime+"</td><td><a id ='del' style='cursor:pointer;'><span class='glyphicon glyphicon-trash'></span></a></td</tr>");
      	
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
});

$(function() {
	var dataRef = new Firebase("https://myschedulerapp.firebaseIO.com");
	var lecturedata = dataRef.child('lecturetimetable')
	$('#tbtns').click(function() {
		 var day = $('#day').val();
		 var course = $('#course').val();
		 var time = $('#time').val();
		 var venue = $('#venue').val();
	       if(day == "" || course == ""|| time == ""|| venue == ""){
	     	alert("All fields must be filled");
	     }else{
	     lecturedata.push({day:day,
	     					course:course,
	     					time: time, 
		     				venue: venue});

	     $('#day').val('');
	     $('#course').val('');
	     $('#time').val('');
	     $('#venue').val('');
	   }
   
	});
	lecturedata.on('child_added', function(snaps) {
        var lrd = snaps.val();
        displayChatMessage(lrd.day,lrd.course,lrd.time,lrd.venue);
      });

      function displayChatMessage(day,course,time,venue) {

      	 $('#lectureTable').append("<tr><td>"+day+"</td><td>"+course+"</td><td>"+time+"</td><td>"+venue+"</td><td><a id ='del' style='cursor:pointer;'><span class='glyphicon glyphicon-trash'></span></a></td</tr>");
      	
      };

    
      $('#tbtnc').click(function(snapshot){
      	 
	     $('#day').val('');
	     $('#course').val('');
	     $('#time').val('');
	     $('#venue').val('');
	   
      });
});

$(function() {
	var dataRef = new Firebase("https://myschedulerapp.firebaseIO.com");
	var testandexamdata = dataRef.child('testandexamdata')
	$('#ebtns').click(function() {
		var topt =document.getElementById('topt').value;
		 var tday = $('#tday').val();
		 var tcourse = $('#tcourse').val();
		 var ttime = $('#ttime').val();
		 var tvenue = $('#tvenue').val();
	     if(tday == "" || tcourse == ""|| ttime == ""|| tvenue == ""){
	     	alert("All fields must be filled");
	     }else{
	     testandexamdata.push({tday:tday,
	     					topt:topt,
	     					tcourse:tcourse,
	     					ttime: ttime, 
		     				tvenue: tvenue});
	     $('#topt').val('');
	     $('#tday').val('');
	     $('#tcourse').val('');
	     $('#ttime').val('');
	     $('#tvenue').val('');
	   }
   
	});
	testandexamdata.on('child_added', function(snapsh) {
        var tlrd = snapsh.val();
        displayChatMessage(tlrd.tday,tlrd.topt,tlrd.tcourse,tlrd.ttime,tlrd.tvenue);
      });

      function displayChatMessage(tday,topt,tcourse,ttime,tvenue) {

      	 $('#testTable').append("<tr><td>"+tday+"</td><td>"+tcourse+"</td><td>"+ttime+"</td><td>"+tvenue+"</td><td>"+topt+"</td><td><a id ='del' style='cursor:pointer;'><span class='glyphicon glyphicon-trash'></span></a></td</tr>");
      	
      };

    
      $('#ebtnc').click(function(snapshot){
      	 $('#topt').val('');
	     $('#tday').val('');
	     $('#tcourse').val('');
	     $('#ttime').val('');
	     $('#tvenue').val('');
	   
      });
});
