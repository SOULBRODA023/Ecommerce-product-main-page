
    //Event to activate hamburger menu
  $(".hamburger").on("click" , function(){
    if($(".Main__menu").css("display", "none")){
        $(".Main__menu").fadeIn("slow")
     
        }
  })
  //Event to close the menu when it's activated
   $(".close").on("click" , function(){
    if( $(".Main__menu").show()){
    $(".Main__menu").fadeOut("slow") 
    $("body").css("opacity", "1")
    ;}
   })

   
 let currentImageIndex = 0;
 const totalImages = $('.product').length;

 // Function to show the current image
 function showImage() {
   $('.product').hide();
   $('.product').eq(currentImageIndex).show();
 }

 // Event listener for the "next" button click
 $('.next').on("click",function() {
   currentImageIndex = (currentImageIndex + 1) % totalImages;
   showImage();
 });

 // Event listener for the "previous" button click
 $('.previous').on ("click", function() {
   currentImageIndex = (currentImageIndex - 1) % totalImages;
   showImage();
 });

 // Show the initial image
 showImage();
  
 
 
   let amountValue = 0 ;
   const price = 125.0; // The base price for each item

   // Update the .calc section with the initial values
   updateCalculation();
 
 
   // Function to update the .calc section with the latest values
   function updateCalculation() {
     $("#amountValue").text(amountValue);
     const total = (amountValue * price).toFixed(2); // Calculate the total amount
     $("#total").text(total);
   }
   
   //Event to increase the number of product that can be gotten.
   $("#plus").on("click", function(){
        if($(".amount").text(0)){
            amountValue++;
            $(".amount").text(amountValue)
            updateCalculation()
        }
        //Event to limit the number of shoes gotten to 10
        if( $(".amount").text() == 11){
            amountValue= 10 % 1;
            $(".amount").text(amountValue);
            alert("You have reached your limit") ``

        }
   })
  
      //Event for decrement in number of shoes gotten
   $("#minus").on("click", function(){
    if($(".amount").text() > 0){
        amountValue--;
        $(".amount").text(amountValue)
        updateCalculation()
        
    }
    })
     //Event to activate indicator
    $(".add_btn").on("click", function(){
    if( $(".indicator__text").text() == "" && $(".indicator").hide()){
        $(".indicator").show()
     $(".indicator__text").text(amountValue);
    }
    else{
        $(".indicator__text").text(amountValue);
    }
    if(amountValue>0){
      $(".basketchild").hide()
      $(".buy").show()
      }
    if(amountValue === 0){
      $(".buy").hide()
      $(".basketchild").show()
    }
    
 })

 //Every Feature you notice while you are on using the cart button
$(".cart").on("click", function cart(){
  if($(".basket").css("display", "none")){
    $(".basket").show()
    $(".basket").animate({opacity:1}, "slow");}
})
// Assuming you have some logic to set the amountValue variable

if (amountValue > 0) {
  $(".basketchild").hide();
  $(".buy").show();
} else {
  $(".buy").hide();
  $(".basketchild").show();
}


$(".cart").on("click",function() {
  $(".basket").toggleClass("show-cart");
});

// When .close-modal is clicked, hide the cartContent
$(".cartContent .close-modal").on("click",function() {
  $(".basket").removeClass("show-cart");
});

// When clicking anywhere outside the cartContent, hide it
$(document).on("click",function(event) {
  if (!$(event.target).closest(".basket").length && !$(event.target).closest(".cart").length) {
    $(".basket").removeClass("show-cart");
  }})

// Open respective modal when a small image is clicked
$(".small__images img").on("click",function() {
  const imageIndex = $(this).index() + 1;
  $(`#modal${imageIndex}`).css("display", "flex");
});

// Close respective modal when close button or outside of the modal is clicked
$('[id^="close-modal"]').on("click",function(event) {
  const modalIndex = $(this).attr("id").slice(-1);
  $(`#modal${modalIndex}`).css("display", "none");
});






     

