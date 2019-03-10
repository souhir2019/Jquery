$("#bold").click(function(){
    $("#txt").css("font-weight", "bold");
    });
    
    $("#italic").click(function(){
        $("#txt").css("font-style", "italic");

    });
    
    
    
    $("#underline").click(function(){
        $("#txt").css("text-decoration", "underline");

    });
    
    
    
    
       $("#Font").change(function(){
           $("#txt").css("font-family", $("#Font").val());
       });
    
       $("#Size").change(function(){
        $("#txt").css("font-size", $("#Size").val() + "px");
    });
    $("#txt").css("background-color", "yellow");
