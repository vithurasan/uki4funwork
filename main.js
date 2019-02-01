//Initiate Soundcloud Client id
SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});
//Create a jQuery Function to using .ready to run the upcoming functions in order
$(document).ready(function() {
//Within that stream Soundcloud using this code.
   SC.stream('/tracks/441489267',function(sound){

   //Within SC.stream Write jQuery Function to start Song
     $('#start').click(function(e) {
                e.preventDefault();
                sound.start();
              });
  //Write jQuery Function to stop Song
     $('#stop').click(function(e) {
                e.preventDefault();
                sound.stop();
              });

   });
});
