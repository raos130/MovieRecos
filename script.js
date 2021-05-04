$( document ).ready(function() {
    console.log( "ready!" );

    $( 'h3' ).click(function() {
      $('h3' ).addClass('clicked-once');
      $( 'h3' ).addClass('active');
      $( ".hindu2, .hindu3, .hindu4" ).removeClass('active');
      $('.clicked-once:not(.active)').addClass('hide');
    });

        });
