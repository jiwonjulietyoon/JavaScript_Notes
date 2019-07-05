



$(document).ready(function(){
    // var towerMidWidth = $(".towerMid").width();
    // $(".towerTri").css({
    //     "borderBottomWidth": towerMidWidth,
    //     "borderLeftWidth": towerMidWidth / 2,
    //     "borderRightWidth": towerMidWidth / 2,
    // });
    var castleSideWidth = $(".sideBd").width();
    $(".sideShield").css({
        "borderTopWidth": castleSideWidth * 0.2,
        "borderRightWidth": castleSideWidth * 0.4,
        "borderBottomWidth": castleSideWidth * 0.6,
    });
    
    
    $(window).resize(function(){
        // var towerMidWidth = $(".towerMid").width()
        // $(".towerTri").css({
        //     "borderBottomWidth": towerMidWidth,
        //     "borderLeftWidth": towerMidWidth / 2,
        //     "borderRightWidth": towerMidWidth / 2,
        // });
        var castleSideWidth = $(".sideBd").width();
        $(".sideShield").css({
            "borderTopWidth": castleSideWidth * 0.2,
            "borderRightWidth": castleSideWidth * 0.4,
            "borderBottomWidth": castleSideWidth * 0.6,
        });
    });
});

// window.addEventListener("load", function(){
// 	var delay = 0;
// 	var nodes = document.querySelectorAll(".animate");
// 	for(var i=0; i<nodes.length; i++){
// 		var words = nodes[i].innerText.split(" ");
// 		nodes[i].innerHTML = "";
//         for(var i2=0; i2<words.length; i2++){
//                     var item = document.createElement("span");
//                     item.innerText = words[i2];
//                     var calc = (delay+((nodes.length + i2)/3));
//             item.style.animationDelay = calc+"s";
//                     nodes[i].appendChild(item);
//         }
//     }
// });