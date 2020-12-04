$(function(){
  const loading =$('.loading');

  $(window).on('load',function(){
    loading.remove();
  })
   $(window).on('pageshow',function(){
      $('html,body').css({'overflow-x':'hidden','overflow-y':'visible'});
      $('body').css('overflow','visible');
  })
  $('.carousel').carousel({
  	interval:3000
  });
  // animatescroll플러그인
  $('.container-xl .navbar a').click(function(){
    $('#top').animatescroll({padding:100,easing:'easeInQuad'});
  })
  $('.navbar li:nth-child(1) a').click(function(){
    $('#about3ce').animatescroll({padding:100,easing:'easeInQuad'});
  })
  $('.navbar li:nth-child(2) a').click(function(){
    $('#best').animatescroll({padding:100,easing:'easeInQuad'});
  })
  $('.navbar li:nth-child(3) a').click(function(){
    $('#new').animatescroll({padding:100,easing:'easeInQuad'});
  })
  $('.navbar li:nth-child(4) a').click(function(){
    $('#video').animatescroll({padding:100,easing:'easeInQuad'});
  })
  $('.navbar li:nth-child(5) a').click(function(){
    $('#review').animatescroll({padding:100,easing:'easeInQuad'});
  })
  $('.navbar li:nth-child(6) a').click(function(){
    $('#store').animatescroll({padding:100,easing:'easeInQuad'});
  })

   //nav slide
  // $('#new .nav li:nth-child(1) a').click(function(){
  //   $('#edition').show();
  // })
  // $('#new .nav li:nth-child(2) a').click(function(){
  //   $('#face').show();
  // })
  // $('#new .nav li:nth-child(3) a').click(function(){
  //   $('#lip').show();
  // })
  // $('#new .nav li:nth-child(4) a').click(function(){
  //   $('#eye').show();
  // })

  $('.wp1').waypoint(function(direction){
        if(direction==='down'){
          $('.wp1').addClass('animate__animated animate__fadeInUp');
      }
  },{
      offset:'90%'
  })
  $('.wp1').waypoint(function(direction){
      if(direction==='up'){
          $('.wp1').removeClass('animate__animated animate__fadeInUp');
      }
  },{
       offset:'50%'
  })

  $('.wp2').waypoint(function(direction){
      if(direction==='down'){
          $('.wp2').addClass('animate__animated animate__fadeInDown');
      }
  },{
      offset:'50%'
  })
  $('.wp2').waypoint(function(direction){
      if(direction==='up'){
          $('.wp2').removeClass('animate__animated animate__fadeInDown');
      }
  },{
      offset:'50%'
  })
  $('.wp3').waypoint(function(direction){
      if(direction==='down'){
          $('.wp3').addClass('animate__animated animate__fadeInLeft');
      }
  },{
      offset:'50%'
  })
  $('.wp3').waypoint(function(direction){
      if(direction==='up'){
          $('.wp3').removeClass('animate__animated animate__fadeInLeft');
      }
  },{
      offset:'50%'
  })
  $('.wp4').waypoint(function(direction){
      if(direction==='down'){
          $('.wp4').addClass('animate__animated animate__fadeInRight');
      }
  },{
      offset:'50%'
  })
  $('.wp4').waypoint(function(direction){
      if(direction==='up'){
          $('.wp4').removeClass('animate__animated animate__fadeInRight');
      }
  },{
       offset:'50%'
  })

  $('.wp5').waypoint(function(direction){
      if(direction==='down'){
          $('.wp5').addClass('animate__animated animate__fadeIn');
      }
  },{
      offset:'80%'
  })
  $('.wp5').waypoint(function(direction){
      if(direction==='up'){
          $('.wp5').removeClass('animate__animated animate__fadeIn');
      }
  },{
      offset:'50%'
    })
  
})