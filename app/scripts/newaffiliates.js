  function showValues() {
    var fields = $( ":input" ).serializeArray();
    $( "#results" ).empty();
    jQuery.each( fields, function( i, field ) {
      $( "#results" ).append( field.value + " " );
    });
  }
 
  $( ":checkbox, :radio" ).click( showValues );
  $( "select" ).change( showValues );
  showValues();

  $(function() {
  
    $("form").on("submit", function(e) {
      e.preventDefault();
      var newaffiliatedata = $(this).serializeArray();
       var affiliateformresults = _.pluck(newaffiliatedata, "value");
      console.log(helloRandom);
    $(".container").append(affiliateformresults);
      
    });
});
