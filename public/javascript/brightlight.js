function brightLightMain(){
    currentColor="red";
    var isPressed=false;
    isTouched=false;
    var heightOfPage=""+(window.innerHeight-100)+"px ";
    var widthOfPage=""+(window.innerWidth-60)+"px ";
    var style1="height:"+heightOfPage;
    var style2="width : "+widthOfPage;
    var menu=createMenu(this);
    var canvasWidth=window.innerWidth-120;
    var canvasWidth1=""+canvasWidth;
    
    var style1="height:"+heightOfPage;
    var style2="width : "+canvasWidth1;
    this.canvas=dom("CANVAS",{"id":"big","style":"float:left","height":heightOfPage,"width":canvasWidth1},"");
    
    addHandler(canvas,"mousemove",method(this,"canvasMouseMove"));
    addHandler(canvas,"mousedown",method(this,"canvasMouseDown"));
    addHandler(canvas,"mouseup",method(this,"canvasMouseUp"));
    
    var container=dom("DIV",{"style":"float:left;"+style1+";"+style2},dom("DIV",{"style":"float:left; overflow:auto ;"+style1},menu),dom("DIV",{"style":"float:right"},canvas));
    document.body.appendChild(container);
    var backgroundImage= new Image;
    backgroundImage.src="images/template_blank.png";
    backgroundImage.onload = function() {
        var context=canvas.getContext("2d");
        context.drawImage(backgroundImage,0,0);
    }
    templates = ["images/template_blank.png", "images/template_rainbow.png", "images/template_bow.png", 
                "images/template_flowers.png", "images/template_ghost.png", "images/template_bear.png", 
                "images/template_captain.png", "images/template_dog.png", "images/template_donatelo.png", 
                "images/template_fire_flower.png", "images/template_green_lantern.png", "images/template_heart.png", 
                "images/template_ironman.png", "images/template_leonardo.png", "images/template_mario.png", 
                "images/template_monkey.png", "images/template_penguin.png", "images/template_puppy.png"];
    templateIndex = 0;
    //startup();
    //document.body.style.background = "#000000";
    document.getElementById(currentColor).style.border = "1px solid #ffffff";
    document.body.style.color="#ffffff";
    document.body.overflow="hidden";
    document.getElementById("arrowright").style.position = "absolute";
    document.getElementById("arrowright").style.top = "40px";
    document.getElementById("arrowright").style.left = "660px";
    document.getElementById("blank").style.position = "absolute";
    document.getElementById("blank").style.top = "40px";
    document.getElementById("blank").style.left = "600px";
    document.getElementById("arrowleft").style.position = "absolute";
    document.getElementById("arrowleft").style.top = "40px";
    document.getElementById("arrowleft").style.left = "540px";

    /*$('body').bind("touchmove", {}, function(event){
          event.preventDefault();
    });*/
    
    this.canvasMouseDown=function(event){
        //event.preventDefault();
        /*var pegImage= new Image();
        pegImage.src="images/peg_"+currentColor+".png";
        pegImage.onload=function(){
            var context=canvas.getContext("2d");
            var rect=canvas.getBoundingClientRect();
            var newX = Math.floor((event.clientX-rect.left)/40)*40;
            var newY = Math.floor((event.clientY-rect.top)/40)*40;
            if (newX<720 && newY<480){
                context.drawImage(pegImage,newX,newY);
            }
        }*/
        isPressed=true;

    };
    this.canvasMouseMove=function(event){
        //var rect=canvas.getBoundingClientRect();
        //console.log(event.clientX-rect.left," mouse move",event.clientY-rect.top);

        if (isPressed)
        {
                var pegImage= new Image();
            pegImage.src="images/peg_"+currentColor+".png";
            pegImage.onload=function(){
                var context=canvas.getContext("2d");
                var rect=canvas.getBoundingClientRect();
                var newX = Math.floor((event.clientX-rect.left)/40)*40;
                var newY = Math.floor((event.clientY-rect.top)/40)*40;
                if (newX<720 && newY<480){
                    context.drawImage(pegImage,newX,newY);
                }
            }
        }
        
    };
    this.canvasMouseUp=function(event){
        /*var rect=canvas.getBoundingClientRect();
        console.log(event.clientX-rect.left,"mouse up ",event.clientY-rect.top);*/
        if (isPressed)
        {
                var pegImage= new Image();
            pegImage.src="images/peg_"+currentColor+".png";
            pegImage.onload=function(){
                var context=canvas.getContext("2d");
                var rect=canvas.getBoundingClientRect();
                var newX = Math.floor((event.clientX-rect.left)/40)*40;
                var newY = Math.floor((event.clientY-rect.top)/40)*40;
                if (newX<720 && newY<480){
                    context.drawImage(pegImage,newX,newY);
                }
            }
        }
        isPressed=false;
    };


    this.selectBlue=function(){
        document.getElementById(currentColor).style.border = "1px solid #000000";
        currentColor="blue";
        document.getElementById(currentColor).style.border = "1px solid #ffffff";
    };
    this.selectRed=function(){
        document.getElementById(currentColor).style.border = "1px solid #000000";
        currentColor="red";
        document.getElementById(currentColor).style.border = "1px solid #ffffff";
    };
    this.selectBrown=function(){
        document.getElementById(currentColor).style.border = "1px solid #000000";
        currentColor="brown";
        document.getElementById(currentColor).style.border = "1px solid #ffffff";
    };
    this.selectOrange=function(){
        document.getElementById(currentColor).style.border = "1px solid #000000";
        currentColor="orange";
        document.getElementById(currentColor).style.border = "1px solid #ffffff";
    };
    this.selectYellow=function(){
        document.getElementById(currentColor).style.border = "1px solid #000000";
        currentColor="yellow";
        document.getElementById(currentColor).style.border = "1px solid #ffffff";
    };
    this.selectGreen=function(){
        document.getElementById(currentColor).style.border = "1px solid #000000";
        currentColor="green";
        document.getElementById(currentColor).style.border = "1px solid #ffffff";
    };
    this.selectPurple=function(){
        document.getElementById(currentColor).style.border = "1px solid #000000";
        currentColor="purple";
        document.getElementById(currentColor).style.border = "1px solid #ffffff";
    };
    this.selectPink=function(){
        document.getElementById(currentColor).style.border = "1px solid #000000";
        currentColor="pink";
        document.getElementById(currentColor).style.border = "1px solid #ffffff";
    };
    this.selectWhite=function(){
        document.getElementById(currentColor).style.border = "1px solid #000000";
        currentColor="white";
        document.getElementById(currentColor).style.border = "1px solid #ffffff";
    };
    this.selectGray=function(){
        document.getElementById(currentColor).style.border = "1px solid #000000";
        currentColor="gray";
        document.getElementById(currentColor).style.border = "1px solid #ffffff";
    };
    this.selectPeach=function(){
        document.getElementById(currentColor).style.border = "1px solid #000000";
        currentColor="peach";
        document.getElementById(currentColor).style.border = "1px solid #ffffff";
    };
    this.selectBlank=function(){
        document.getElementById(currentColor).style.border = "1px solid #000000";
        currentColor="blank";
        document.getElementById(currentColor).style.border = "1px solid #ffffff";
    }
    this.nextTemplate=function(){
        templateIndex = (templateIndex + 1) % templates.length;
        var backgroundImage= new Image;
        backgroundImage.src=templates[templateIndex];
        backgroundImage.onload = function() {
            var context=canvas.getContext("2d");
            context.drawImage(backgroundImage,0,0);
        }
    }
    this.prevTemplate=function(){
        if (templateIndex == 0) {
            templateIndex = templates.length-1;
        }
        else {
            templateIndex = (templateIndex - 1) % templates.length;
        }
        var backgroundImage= new Image;
        backgroundImage.src=templates[templateIndex];
        backgroundImage.onload = function() {
            var context=canvas.getContext("2d");
            context.drawImage(backgroundImage,0,0);
        }
    }
}
function createMenu(me){

    var selectBlue = dom("IMG",{"id":"blue", "src":"images/select_blue.png","style":"width:40px; height:40px"} , "Blue"); 
    addHandler(selectBlue, "click", method( me, "selectBlue"));
    var selectRed = dom("IMG",{"id":"red", "src":"images/select_red.png","style":"width:40px; height:40px"} , "Red"); 
    addHandler(selectRed, "click", method( me, "selectRed"));
    var selectBrown = dom("IMG",{"id":"brown", "src":"images/select_brown.png","style":"width:40px; height:40px"} , "brown"); 
    addHandler(selectBrown, "click", method( me, "selectBrown"));
    var selectOrange = dom("IMG",{"id":"orange", "src":"images/select_orange.png","style":"width:40px; height:40px"} , "orange");
    addHandler(selectOrange, "click", method( me, "selectOrange"));
    var selectYellow = dom("IMG",{"id":"yellow", "src":"images/select_yellow.png","style":"width:40px; height:40px"} , "yellow");
    addHandler(selectYellow, "click", method( me, "selectYellow"));
    var selectGreen = dom("IMG",{"id":"green", "src":"images/select_green.png","style":"width:40px; height:40px"} , "green");
    addHandler(selectGreen, "click", method( me, "selectGreen"));
    var selectPurple = dom("IMG",{"id":"purple", "src":"images/select_purple.png","style":"width:40px; height:40px"} , "purple");
    addHandler(selectPurple, "click", method( me, "selectPurple"));
    var selectPink = dom("IMG",{"id":"pink", "src":"images/select_pink.png","style":"width:40px; height:40px"} , "pink");
    addHandler(selectPink, "click", method( me, "selectPink"));
    var selectWhite = dom("IMG",{"id":"white", "src":"images/select_white.png","style":"width:40px; height:40px"} , "white");
    addHandler(selectWhite, "click", method( me, "selectWhite"));
    var selectGray = dom("IMG",{"id":"gray", "src":"images/select_gray.png","style":"width:40px; height:40px"} , "gray");
    addHandler(selectGray, "click", method( me, "selectGray"));
    var selectPeach = dom("IMG",{"id":"peach", "src":"images/select_peach.png","style":"width:40px; height:40px"} , "peach");
    addHandler(selectPeach, "click", method( me, "selectPeach"));
    var selectBlank = dom("IMG",{"id":"blank", "src":"images/peg_blank.png","style":"width:40px; height:40px"} , "blank");
    addHandler(selectBlank, "click", method( me, "selectBlank"));
    var nextTemplate = dom("IMG", {"id":"arrowright", "src":"images/arrowright.jpg", "style":"width:40px; height:40px"}, "arrowright");
    addHandler(nextTemplate, "click", method( me, "nextTemplate"));
    var prevTemplate = dom("IMG", {"id":"arrowleft", "src":"images/arrowleft.jpg", "style":"width:40px; height:40px"}, "arrowleft");
    addHandler(prevTemplate, "click", method( me, "prevTemplate"));
    

    var menue=dom("DIV",{"id":"menue","style":"float:left"},selectRed,dom("BR"),selectOrange,dom("BR"),selectYellow,dom("BR"),selectGreen,dom("BR"),selectBlue,dom("BR"),selectPurple,dom("BR"),selectPink,dom("BR"),selectBrown,dom("BR"),selectWhite,dom("BR"),selectGray,dom("BR"),selectPeach,dom("BR"),selectBlank,dom("BR"),nextTemplate,dom("BR"),prevTemplate);
    return menue;
}
/*function startup() {
  var el = document.getElementsByTagName("canvas")[0];
  el.addEventListener("touchstart", handleStart, false);
  el.addEventListener("touchend", handleEnd, false);
  
  el.addEventListener("touchmove", handleMove, false);
  log("initialized.");
}*/
/*function handleStart(evt) {
  /*evt.preventDefault();
  log("touchstart.");
  var el = document.getElementsByTagName("canvas")[0];
  var ctx = el.getContext("2d");
  var touches = evt.changedTouches;
        
  for (var i=0; i < touches.length; i++) {
    log("touchstart:"+i+"...");
    ongoingTouches.push(copyTouch(touches[i]));
    var color = colorForTouch(touches[i]);
    ctx.beginPath();
    ctx.arc(touches[i].pageX, touches[i].pageY, 4, 0,2*Math.PI, false);  // a circle at the start
    ctx.fillStyle = color;
    ctx.fill();
    log("touchstart:"+i+".");
  }*/
  /*isTouched=true;
}*/
/*function handleMove(evt) {
  if (isTouched)
  {
          evt.preventDefault();
      var el = document.getElementsByTagName("canvas")[0];
      var ctx = el.getContext("2d");
      var touches = evt.changedTouches;

      for (var i=0; i < touches.length; i++) {
        var color = colorForTouch(touches[i]);
        var idx = ongoingTouchIndexById(touches[i].identifier);

        if(idx >= 0) {
          /*log("continuing touch "+idx);
          ctx.beginPath();
          log("ctx.moveTo("+ongoingTouches[idx].pageX+", "+ongoingTouches[idx].pageY+");");
          ctx.moveTo(ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
          log("ctx.lineTo("+touches[i].pageX+", "+touches[i].pageY+");");
          ctx.lineTo(touches[i].pageX, touches[i].pageY);
          ctx.lineWidth = 4;
          ctx.strokeStyle = color;
          ctx.stroke();

          ongoingTouches.splice(idx, 1, copyTouch(touches[i]));  // swap in the new touch record
          log(".");
        } else {
          log("can't figure out which touch to continue");
        */
          /*  var pegImage= new Image();
            pegImage.src="images/peg_"+currentColor+".png";
            pegImage.onload=function(){
                
                var rect=ctx.getBoundingClientRect();
                var newX = Math.floor((ongoingTouches[idx].clientX-rect.left)/40)*40;
                var newY = Math.floor((ongoingTouches[idx].clientY-rect.top)/40)*40;
                if (newX<720 && newY<480){
                    context.drawImage(pegImage,newX,newY);
                }
            }
             ongoingTouches.splice(idx, 1, copyTouch(touches[i]));
        }
      }  
  }

  
}*/

/*function handleEnd(evt) {
  evt.preventDefault();
  log("touchend/touchleave.");
  var el = document.getElementsByTagName("canvas")[0];
  var ctx = el.getContext("2d");
  var touches = evt.changedTouches;

  for (var i=0; i < touches.length; i++) {
    var color = colorForTouch(touches[i]);
    var idx = ongoingTouchIndexById(touches[i].identifier);

    if(idx >= 0) {/*
      ctx.lineWidth = 4;
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
      ctx.lineTo(touches[i].pageX, touches[i].pageY);
      ctx.fillRect(touches[i].pageX-4, touches[i].pageY-4, 8, 8);  // and a square at the end
      ongoingTouches.splice(idx, 1);  // remove it; we're done
    } else {
      log("can't figure out which touch to end");
    *//*if (isTouched)
        {
                var pegImage= new Image();
            pegImage.src="images/peg_"+currentColor+".png";
            pegImage.onload=function(){
                
                var rect=ctx.getBoundingClientRect();
                var newX = Math.floor((ongoingTouches[idx].clientX-rect.left)/40)*40;
                var newY = Math.floor((ongoingTouches[idx].clientY-rect.top)/40)*40;
                if (newX<720 && newY<480){
                    context.drawImage(pegImage,newX,newY);
                }
            }
        }
        ongoingTouches.splice(idx, 1);
        isTouched=false;

    }
  }
}*/