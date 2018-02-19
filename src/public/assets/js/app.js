//frontend app

(function() {
  $(document).ready(function() {
    var base = $('base').text();
    alert(base);


    $('.moveButton').click(function() {
        var movimiento=$(this).data('move');
        $.ajax({
          type: 'post',
          dataType: 'json',
          url: base + '/action',
          data: { move: movimiento },
        })
        .done(function(data) {
          console.log("success");
          console.log(data);
          alert(data.result);
        })
        .fail(function() {
          console.log("error");
        })
        .always(function() {
          console.log("complete");
        });
    });



  });
})();

//1. If the document is ready we show and alert
//2. We see if .moveButton (Objets de tell dataType) receive and action (click)
// that changes the url (calling again routes=> execute actionCtrl.postAction)
