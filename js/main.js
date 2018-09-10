$('.slider').slick({
  autoplay:false,
  arrows: true,
  slidesToShow: 1,
});

new WOW().init();

$('.order').click(function() {  
  scrollTo('.s5',100)
})
$('.watchCourses').click(function(e) {  
  e.preventDefault()
  scrollTo('.s6',0)
})
$('.sky').click(function(e) {
  $('.sky').removeClass('active');
  $(this).addClass('active')  
  scrollTo('.answer',-100)
})

$('.my-card .descr').each(function() {
  var color = $(this).data('color')
    $(this).find('.price').css('color',color)
    $(this).find('.btn').css('background-color',color)
})


function scrollTo(blok,offsetTop) {
 $('html, body').animate({scrollTop: $(blok).offset().top+offsetTop}, 1000);
  return false;
}

$('.sky').click(function() {
  var self = $(this)
  $('.answer').animate({'opacity':0},500,function(){
    $('.answer').text(self.data('text')).animate({'opacity':1},500);
  })
})

$(".sendToMail").click(function (e) {
  e.preventDefault();
  var data = {};
  var name = $(this).closest('.form-wrapper').find(".clientName").val();
  var phone = $(this).closest('.form-wrapper').find(".clientPhone").val();

  if(name==""||phone=="") {
    $(".error").show();
    return;
  }
  data.setFrom = 'element.almaty@gmail.com';
  data.addAddress = 'element.almaty@gmail.com';
  data.subject = 'Письмо с сайта';
  data.username = "element.almaty@gmail.com";
  data.password = "element2017";
  data.msg = "Пришла завяка с сайта от "+name+" с номером "+phone;
  $.ajax({
    type: 'POST',
    url: './phpmailer/mailer.php',
    data: data,
    success: function(data) {
      console.log(data)
     $('.afterSended').removeClass('d-none')
   },
   error: function(xhr, status, error) {
   }
 });

  $(".congrats").show();
  return false;
});