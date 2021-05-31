$(document).ready(function(){
 	$('#ContactModalOpen').click(function() {
        $('#ContactModal').modal('show');
      });
      $('#ContactModalClose').click(function() {
        $('#ContactModal').modal('hide');
      });
      $('#ContactModal1Open').click(function() {
        $('#ContactModal1').modal('show');
      });
      $('#ContactModal1Close').click(function() {
        $('#ContactModal1').modal('hide');
      });
     $('#appointmentModalOpen').click(function() {
        $('#appointmentModal').modal('show');
      });
      $('#appointmentModalClose').click(function() {
        $('#appointmentModal').modal('hide');
      });
      $('#appointmentModalOpen1').click(function() {
        $('#appointmentModal').modal('show');
      });
      $('#appointmentModalClose1').click(function() {
        $('#appointmentModal').modal('hide');
      });
      $('#appointmentModalOpen2').click(function() {
        $('#appointmentModal').modal('show');
      });
      $('#appointmentModalClose2').click(function() {
        $('#appointmentModal').modal('hide');
      });
      $(".menu-icon").on("click", function() {
                  $("nav ul").toggleClass("showing");
            });
      $('#FeedbackModalOpen').click(function() {
        $('#FeedbackModal').modal('show');
      });
      $('#FeedbackModalClose').click(function() {
        $('#FeedbackModal').modal('hide');
      });
      $('#LoginModalOpen').click(function() {
        $('#LoginModal').modal('show');
      });
      $('#LoginModalClose').click(function() {
        $('#LoginModal').modal('hide');
      });
      $('#submit').click(function() {
        $('#myAlert').show('fade');

        set(function () {
          $('#myAlert').hide('fade');
        },6000)
      });
      $('#linkClose').click(function() {
        $('#myAlert').hide('fade');
      });
    });
  $(window).on("scroll", function() {
            if($(window).scrollTop()) {
                  $('nav').addClass('black');
            }

            else {
                  $('nav').removeClass('black');
            }
      })
 
      
  
  