    $(document).ready(function() {
        // $('#menu').slicknav();
        $(".js--services-section").waypoint(function(direction){
            if(direction == "down"){
                $("nav").addClass("sticky");
            }else{
                $("nav").removeClass("sticky");
            }
        });
        var mixer = mixitup('.filter-container');
    });