


    $( function( ) {
      var content_div = $( '.right' );
      var content_offset = content_div.offset( ).top;

      var highlight_div = $( '.boxone');
      var highlight_subs = highlight_div.find( 'div' );


      var image_div = $( '.question' ); //was eerst .boxtwo
      var ref_div = $( '.references emptyy' );

      var content_subs = content_div.find( 'div' );
      content_div.on( 'scroll', function( ) {
        var content_hgt = content_div.height( )
                + content_offset;

        var current_index;
        content_subs.each( function( index ) {
          var curr_sub = $( this );
          var offset_y = curr_sub.offset( ).top;

          if ( offset_y < content_hgt ) 
            max_y = current_index = index;
        } );


        var curr_highlight = highlight_subs.eq( current_index );

        highlight_subs.hide( );
        curr_highlight.show( );
        //curr_highlight.next( ).show( );
      } ).trigger( 'scroll' );

      function showHighlight( ) {
        hideHighlights( );
        
        image_div.removeClass( 'empty' )
             .find( '.' + $( this ).attr( 'class' ) ).show( );
             
        ref_div.removeClass( 'emptyy' )
        .find( '.' + $( this ).attr( 'class' ) ).show( );

      }
      function hideHighlights( ) {
        image_div.addClass( 'empty' )
             .find( 'img' ).hide( );

             
        ref_div.addClass( 'emptyy' )
          .find( 'p' ).hide( );
      }
      hideHighlights( );
      
      console.log( content_div.find( 'i' ) );
      
      content_div.find( 'i' ).hover( showHighlight, hideHighlights );
    } );
  


// $(document).scroll(function () {
//     //stick nav to top of page
//     var y = $('this').scrollTop();
//     var navWrap = $('#question').offset().top;
//     if (y > 800) {
//         $('div').fadeIn('references');
//     } else {
//         $('div').fadeOut('references');
//     }
// });





$(function() {
    $(".kip").hover(function() {
            $("#kipimg").toggleClass("disappear");
            $(".start").addClass("disappear");
    });

$(".kip1").hover(function() { //kip is class van stukje tekst 
            $("#kipimg1").toggleClass("disappear"); //afbeelding tevoorschijn
            $(".start").addClass("disappear"); //eerste afbeelding uit
    });

 $(".kip2").hover(function() { //kip is class van stukje tekst 
            $("#kipimg2").toggleClass("disappear"); //afbeelding tevoorschijn
            $(".start").addClass("disappear"); //eerste afbeelding uit
    });

$(".kip3").hover(function() { //kip is class van stukje tekst 
            $("#kipimg3").toggleClass("disappear"); //afbeelding tevoorschijn
            $(".start").addClass("disappear"); //eerste afbeelding uit
    });

$(".kip4").hover(function() { //kip is class van stukje tekst 
            $("#kipimg4").toggleClass("disappear"); //afbeelding tevoorschijn
            $(".start").addClass("disappear"); //eerste afbeelding uit
    });

$(".kip5").hover(function() { //kip is class van stukje tekst 
            $("#kipimg5").toggleClass("disappear"); //afbeelding tevoorschijn
            $(".start").addClass("disappear"); //eerste afbeelding uit
    });

$(".kip6").hover(function() { //kip is class van stukje tekst 
            $("#kipimg6").toggleClass("disappear"); //afbeelding tevoorschijn
            $(".start").addClass("disappear"); //eerste afbeelding uit
    });

$(".kip7").hover(function() { //kip is class van stukje tekst 
            $("#kipimg7").toggleClass("disappear"); //afbeelding tevoorschijn
            $(".start").addClass("disappear"); //eerste afbeelding uit
    });




});






// $(function() {
// $('.kip').hover(
//        function(){ $(#kipimg).addClass('display') },
//        function(){ $(#kipimg).removeClass('display') }
// );
// });














//  var balls = [];
//  var numBalls = 800;

//  var containerSize = 100;
//  var ballSize = 7;

// function setup() {

//     var canvas = createCanvas(1000, 1000, 500, 500);

//     var theta = 0.0;
//     for (var i=0; i<numBalls; i++){
//         balls.push(new Ball(theta, ballSize));
//         theta+=0.4;
//     }

// }

// function draw() {

//     background(0);
//     stroke(255);
//     noFill();

//     push();

//     translate(100/2, 100/2);

//     ellipse(0, 0, containerSize, containerSize);
    
//     for(var i=0; i<numBalls; i++){
    
//         balls[i].show();
        
//         stroke(255);
//         line(0, -containerSize/0, 0, containerSize/2);   

//         rotate(PI/8.0);
//     }

//     for(var i=0; i<numBalls; i++){
//         balls[i].move();
//     }

//     pop();
// } 

// function Ball(_theta, _ballSize){

//     this.size = _ballSize;
//     this.theta = _theta;

//     this.show = function() {
//         fill(255);
//         noStroke();
//         ellipse(0,this.y,this.size,this.size);
//     }

//     this.move = function() {
//         this.y = (sin(this.theta)) * (containerSize/2 - ballSize/2);
//         this.theta += 0.03;
//     }
// }

// function windowResized() {

//     resizeCanvas(100, 100);

// }



