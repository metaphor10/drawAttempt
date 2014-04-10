var decoderSize=3;

function letterGameMain(){
	var str="myCanvas";
	//Creating all the buttons for the menu using the dom function
	this.arrayOfBlocks=[];
	this.isSelecting=false;
	
	var me=this;
	me.numberOfCurrentBit=0;
	me.nameOfCurrnetType="";
	
	
	
	
	this.canvas=document.getElementById("draw");
	
	console.log(style1);
	var menu=createMenu(this);
	
	addHandler(document.getElementById("draw"),"mouseup",method(this,"canvasMouseUp"));
	addHandler(document.getElementById("draw"),"mousemove",method(this,"canvasMouseMove"));
	addHandler(document.getElementById("draw"),"mousedown",method(this,"canvasMouseDown"));
	
	
	
	
	
	
	document.getElementById("place").appendChild(menu);
	
	this.canvasMouseUp=function(event){
		var rect=canvas.getBoundingClientRect();
		console.log(event.clientX-rect.left,"mouse up ",event.clientY-rect.top);
	};
	this.canvasMouseMove=function(event){
		var rect=canvas.getBoundingClientRect();
		//console.log(event.clientX-rect.left," mouse move",event.clientY-rect.top);
	};
	this.canvasMouseDown=function(event){
		var rect=canvas.getBoundingClientRect();
		if (isSelecting)
		{
				if(typeof arrayOfBlocks[0]!="undefined")
	{
		console.log("insode isSelecting");
		for (var i=0;i<me.arrayOfBlocks.length;i++)
		{
			
			me.arrayOfBlocks[i].doSelect(event.clientX-rect.left,event.clientY-rect.top);
		}
		
		
	}
		}else
		{
			
		console.log(event.clientX-rect.left,"mouse down ",event.clientY-rect.top);
		var temp=new Block(me.nameOfCurrnetType,me.numberOfCurrentBit);
		temp.place(event.clientX-rect.left,event.clientY-rect.top);
		console.log("xcoor2"+temp.xcoor2);
		me.arrayOfBlocks.push(temp);
		
		drawCircuit();
		}
		
	};
	this.andButton=function(){
		me.nameOfCurrnetType="combinational-and";
		me.numberOfCurrentBit=1;
		
		
		
	};
	this.deleteButton=function(){
		me.canvas.width=canvas.width;
		me.arrayOfBlocks=new Array();
		
		drawCircuit();
	};
	this.massSelect=function(){
		this.isSelecting=true;
	};
	this.drawCircuit=function(){
		
		me.canvas.width=me.canvas.width;
		console.log(me.arrayOfBlocks.length);
		if(typeof arrayOfBlocks[0]!="undefined")
	{
		
		for (var i=0;i<me.arrayOfBlocks.length;i++)
		{
			
			me.arrayOfBlocks[i].drawPiece(me.canvas);
		}
		
		
	}
	console.log("finished with drawcircuit");
	};
	this.registerButton=function()
	{
		me.nameOfCurrnetType="register";
		me.numberOfCurrentBit=1;
	};
	this.flagButton=function(){
		me.nameOfCurrnetType="flag";
		me.numberOfCurrentBit=1;
	};
	this.lookUpTableButton=function(){
		me.nameOfCurrnetType="lookup table";
		me.numberOfCurrentBit=1;
	};
	this.registerFileButton=function(){
		me.nameOfCurrnetType="register file";
		me.numberOfCurrentBit=1;
	};
	this.memoryButton=function(){
		me.nameOfCurrnetType="memory";
		me.numberOfCurrentBit=1;
	};
	this.aLUButton=function(){
		me.nameOfCurrnetType="ALU";
		me.numberOfCurrentBit=1;
	};
	this.extenderButton=function(){
		me.nameOfCurrnetType="extender";
		me.numberOfCurrentBit=1;
	};
	this.constantButton=function()
	{
		me.nameOfCurrnetType="constant";
		me.numberOfCurrentBit=1;
	};
	this.inputPinButton=function()
	{
		me.nameOfCurrnetType="input pin";
		me.numberOfCurrentBit=1;
	};
	this.outputPinButton=function()
	{
		me.nameOfCurrnetType="output pin";
		me.numberOfCurrentBit=1;
	};
	this.nandButton=function(){
		me.nameOfCurrnetType="combinational-nand";
		me.numberOfCurrentBit=1;
	};


}



function createMenu(me){
	var closeButton = dom("BUTTON",{"class":"btn btn-lg btn-success","style":"width:100px"} , "Close"); 
	addHandler(closeButton, "click", method( me, ""));
	var loadButton = dom("BUTTON", {"style":"width:100px"}, "Load"); 
	addHandler(loadButton, "click", method( me, "")); 
	var saveButton = dom("BUTTON", {"style":"width:100px"}, "Save"); 
	addHandler(saveButton, "click", method( me, "")); 
	
	var undoButton = dom("BUTTON", {"style":"width:100px"}, "Undo"); 
	addHandler(undoButton, "click", method( me, "")); 
	var unselectAll = dom("BUTTON", {"style":"width:100px"}, "Unselect All"); 
	addHandler(unselectAll, "click", method( me, ""));
	var massSelect = dom("BUTTON", {"style":"width:100px"}, "Mass Select"); 
	addHandler(massSelect, "click", method( me, "massSelect"));
	var duplicateSelection = dom("BUTTON", {"style":"width:100px"}, "Duplicate"); 
	addHandler(duplicateSelection, "click", method( me, ""));   
	var deleteSelection = dom("BUTTON", {"style":"width:100px"}, "Delete"); 
	addHandler(deleteSelection, "click", method( me, "deleteButton")); 
	var verifyIfWorks = dom("BUTTON", {"style":"width:100px"}, "Verify"); 
	addHandler(verifyIfWorks, "click", method( me, "")); 
	var zoomIn = dom("BUTTON", {"style":"width:100px"}, "Zoom In"); 
	addHandler(zoomIn, "click", method( me, "")); 
	var zoomOut = dom("BUTTON", {"style":"width:100px"}, "Zoom Out"); 
	addHandler(zoomOut, "click", method( me, "")); 
	var controlPath = dom("BUTTON", {"style":"width:100px"}, "Control"); 
	addHandler(controlPath, "click", method( me, "")); 
	var simulateCircuit = dom("BUTTON", {"style":"width:100px"}, "Simulate"); 
	addHandler(simulateCircuit, "click", method( me, "")); 
	var simulateCircuit = dom("BUTTON", {"style":"width:100px"}, "Simulate"); 
	addHandler(simulateCircuit, "click", method( me, ""));
	var busButton = dom("BUTTON", {"style":"width:100px"}, "Bus"); 
	addHandler(busButton, "click", method( me, ""));
	var joinerButton = dom("BUTTON", {"style":"width:100px"}, "Joiner"); 
	addHandler(joinerButton, "click", method( me, ""));
	var splitterButton = dom("BUTTON", {"style":"width:100px"}, "Splitter"); 
	addHandler(splitterButton, "click", method( me, ""));
	
	var registerButton1 = dom("BUTTON", {"style":"width:100px"}, "Register"); 
	addHandler(registerButton1, "click", method( me, "registerButton"));
	var flagButton = dom("BUTTON", {"style":"width:100px"}, "Flag"); 
	addHandler(flagButton, "click", method( me, "flagButton"));
	var registerFileButton = dom("BUTTON", {"style":"width:100px"}, "Register File"); 
	addHandler(registerFileButton, "click", method( me, "registerFileButton"));
	var memoryButton = dom("BUTTON", {"style":"width:100px"}, "Memory"); 
	addHandler(memoryButton, "click", method( me, "memoryButton"));
	var portsButton = dom("BUTTON", {"style":"width:100px"}, "ports"); 
	addHandler(portsButton, "click", method( me, ""));
	var multiplexor = dom("BUTTON", {"style":"width:100px"}, "Multiplexor");
	addHandler(multiplexor, "click", method( me, ""));
	var decoderButton = dom("BUTTON", {"style":"width:100px"}, "Decoder");
	addHandler(decoderButton, "click", method( me, "decoderButton"));
	var ALUButton = dom("BUTTON", {"style":"width:100px"}, "ALU");
	addHandler(ALUButton, "click", method( me, "aLUButton"));
	var extenderButton = dom("BUTTON", {"style":"width:100px"}, "Extender");
	addHandler(extenderButton, "click", method( me, "extenderButton"));
	var constantButton = dom("BUTTON", {"style":"width:100px"}, "Constant");
	addHandler(constantButton, "click", method( me, "constantButton"));
	var lookUpTable = dom("BUTTON", {"class":"btn btn-lg btn-success","style":"width:100px"}, "Lookup Table");
	addHandler(lookUpTable, "click", method( me, "lookUpTableButton"));
	var inputPin = dom("BUTTON", {"style":"width:100px"}, "Input Pin");
	addHandler(inputPin, "click", method( me, "inputPinButton"));
	var outputPin = dom("BUTTON", {"style":"width:100px"}, "Input Pin");
	addHandler(outputPin, "click", method( me, "outputPinButton"));
	var componentContorl = dom("BUTTON", {"style":"width:100px"}, "Control");
	addHandler(componentContorl, "click", method( me, ""));
	var moduleButton = dom("BUTTON", {"style":"width:100px"}, "Module");
	addHandler(moduleButton, "click", method( me, ""));
	var labelButton = dom("BUTTON", {"style":"width:100px"}, "Label");
	addHandler(labelButton, "click", method( me, ""));
	var adderButton = dom("BUTTON", {"style":"width:100px"}, "Adder");
	addHandler(adderButton, "click", method( me, ""));
	var negateButton = dom("BUTTON", {"style":"width:100px"}, "negate");
	addHandler(negateButton, "click", method( me, ""));
	var incrementButton = dom("BUTTON", {"style":"width:100px"}, "Increment");
	addHandler(incrementButton, "click", method( me, ""));
	var decrementButton = dom("BUTTON", {"style":"width:100px"}, "Decrement");
	addHandler(decrementButton, "click", method( me, ""));
	var andButton = dom("BUTTON", {"style":"width:100px"}, "And");
	addHandler(andButton, "click", method( me, "andButton"));
	var nandButton = dom("BUTTON", {"style":"width:100px"}, "Nand");
	addHandler(nandButton, "click", method( me, "nandButton"));
	var norButton = dom("BUTTON", {"style":"width:100px"}, "Nor");
	addHandler(norButton, "click", method( me, ""));
	var notButton = dom("BUTTON", {"style":"width:100px"}, "Not");
	addHandler(notButton, "click", method( me, ""));
	var xorButton = dom("BUTTON", {"style":"width:100px"}, "Xor");
	addHandler(xorButton, "click", method( me, ""));
	var equalToButton = dom("BUTTON", {"style":"width:100px"}, "Equal-to");
	addHandler(equalToButton, "click", method( me, ""));
	var lessThenButton = dom("BUTTON", {"style":"width:100px"}, "Less-then");
	addHandler(lessThenButton, "click", method( me, ""));
	var shiftLeftButton = dom("BUTTON", {"style":"width:100px"}, "Shift-left");
	addHandler(shiftLeftButton, "click", method( me, ""));
	var shiftRightButton = dom("BUTTON", {"style":"width:100px"}, "Shift-right");
	addHandler(shiftRightButton, "click", method( me, ""));
	var menue=dom("DIV",{"id":"menue","style":"float:left"},closeButton,dom("BR"),loadButton,dom("BR"),saveButton,dom("BR"),undoButton,dom("BR"),unselectAll,dom("BR"),massSelect,dom("BR"),duplicateSelection,dom("BR"),deleteSelection,dom("BR"),verifyIfWorks,dom("BR"),zoomIn,dom("BR"),zoomOut,dom("BR"),controlPath,dom("BR"),simulateCircuit,dom("P",null,"Place a New"),dom("BR"),busButton,dom("BR"),joinerButton,dom("BR"),splitterButton,dom("BR"),registerButton1,dom("BR"),flagButton,dom("BR"),registerFileButton,dom("BR"),memoryButton,dom("BR"),portsButton,dom("BR"),multiplexor,dom("BR"),decoderButton,dom("BR"),ALUButton,dom("BR"),extenderButton,dom("BR"),constantButton,dom("BR"),lookUpTable,dom("BR"),inputPin,dom("BR"),outputPin,dom("BR"),componentContorl,dom("BR"),moduleButton,dom("BR"),labelButton,dom("p",null,"Combinational"),dom("BR"),adderButton,dom("BR"),negateButton,dom("BR"),incrementButton,dom("BR"),decrementButton,dom("BR"),andButton,dom("BR"),nandButton,dom("BR"),norButton,dom("BR"),notButton,dom("BR"),xorButton,dom("BR"),equalToButton,dom("BR"),lessThenButton,dom("BR"),shiftLeftButton,dom("BR"),shiftRightButton);
	return menue;
}

function Part(){
	
	this.name;
	this.description;
	this.xcoor;
	this.ycoor;
	this.xccor2;
	this.ycoor2;
	this.selectedfield=false;
	this.highlighted-false;
	this.value;
	this.type="";
	this.bits;
	
}
Part.prototype.getInputBlocks = function(){
	
	return;
};
Part.prototype.setValue=function(value1){
	
};
Part.prototype.getValue=function(){
	return;
};

function Block(type1,bits1){
	Part.call(this);
	this.type=type1;
	this.bits=bits1;
	this.XSIZE=40;
	this.YSIZE=30;
	
	this.place=function(x,y,x2,y2){
		console.log(x2);
		if (x2!=undefined&&y2!=undefined)
		{
			console.log("inside x2 and y2 !undefined");
			this.xcoor=x;
			this.ycoor=y;
			this.xcoor2=x2;
			this.ycoor2=y2;
		}else
		{
			this.xcoor=x;
			this.ycoor=y;
			if(this.type==("register")||this.type==("lookup table")||this.type==("ALU")||this.type==("adder")||this.type==("register file")||this.type==("memory")||this.type==("ports"))
			{
				this.xcoor2=x+this.XSIZE;
				this.ycoor2=y+this.YSIZE;
			}else if(this.type==("decoder"))
			{
				this.xcoor2=x+this.XSIZE;
				this.ycoor2=y+this.YSIZE/2;
				if(Math.pow(2,this.bits)*decoderSize>this.XSIZE)
				{
					this.xcoor2=Math.pow(2,this.bits)*decoderSize;
				}
			}else if(this.type==("flag")||this.type==("constant"))
			{
				this.xcoor2=x+this.XSIZE/2;
				this.ycoor2=y+this.YSIZE/2;
			}else if(this.type==("splitter")||this.type==("joiner"))
			{
				this.xcoor2=x+this.XSIZE;
				this.ycoor2=y+this.YSIZE/3;
			}else if(this.type==("input pin")||this.type==("output pin"))
			{
				this.xcoor2=x+this.XSIZE/3;
				this.ycoor2=y+this.YSIZE/3;
			}else if(this.type==("combinational-not")||this.type==("combinational-negate"))
			{
				this.xcoor2=x+this.XSIZE/2;
				this.ycoor2=y+this.YSIZE/2;
			}else 
			{
				console.log("inside else ");
				this.xcoor2=x+this.XSIZE;
				this.ycoor2=y+(this.YSIZE/2);
				
			}
		}
	};
	
}
Block.prototype=new Part();
Block.prototype.constructor=Block;
Block.prototype.drawPiece=function(canvasOfThePage){
	
	console.log(this.type=="combinational-and");
	var ctx=canvasOfThePage.getContext("2d");
	
	if (this.type==("register"))
	{
		ctx.beginPath();
		ctx.rect(this.xcoor,this.ycoor,this.xcoor2-this.xcoor,this.ycoor2-this.ycoor);
		ctx.closePath();
		ctx.stroke();
		ctx.fillStyle="rgb(200,200,255)";
		ctx.fill();
		
		
	}else if (this.type==("label"))
	{
		
	}else if (this.type==("flag"))
	{
		ctx.strokeStyle="black";
		ctx.beginPath();
		ctx.rect(this.xcoor,this.ycoor,this.xcoor2-this.xcoor,this.ycoor2-this.ycoor);
		ctx.closePath();
		ctx.stroke();
		ctx.fillStyle="white";
		ctx.fill();
		if (this.getValue()!=0)
		{
			
			drawLine(ctx,this.xcoor+(this.xcoor2-this.xcoor)/3,this.ycoor+2,this.xcoor+(this.xcoor2-this.xcoor)/3,this.ycoor2-2);
			ctx.strokeStyle="red";
			
			drawLine(ctx,this.xcoor+(this.xcoor2-this.xcoor)/3,this.ycoor+2,this.xcoor2-2,(this.ycoor+this.ycoor2)/2);
			drawLine(ctx,this.xcoor+(this.xcoor2-this.xcoor)/3,(this.ycoor+this.ycoor2)/2,this.xcoor2-2,(this.ycoor+this.ycoor2)/2);
			
		}else
		{
			drawLine(ctx,this.xcoor+2,this.ycoor+(this.ycoor2-this.ycoor)/3,this.xcoor2-2,this.ycoor+(this.ycoor2-this.ycoor)/3);
			ctx.strokeStyle="red";
			drawLine(ctx,this.xcoor2-2,this.ycoor+(this.ycoor2-this.ycoor)/3,(this.xcoor+this.xcoor2)/2,this.ycoor2-2);
			drawLine(ctx,(this.xcoor+this.xcoor2)/2,this.ycoor+(this.ycoor2-this.ycoor)/3,(this.xcoor+this.xcoor2)/2,this.ycoor2-2);
		}
	}else if(this.type==("lookup table"))
	{
		ctx.beginPath();
		ctx.rect(this.xcoor,this.ycoor,(this.xcoor2-this.xcoor),(this.ycoor2-this.ycoor));
		ctx.closePath();
		ctx.stroke();
		ctx.fillStyle="white";
		ctx.fill();
		drawLine(ctx,this.xcoor+5,this.ycoor+(this.ycoor2-this.ycoor)/4,this.xcoor+(this.xcoor2-this.xcoor)-5,this.ycoor+(this.ycoor2-this.ycoor)/4);
		drawLine(ctx,this.xcoor+(this.xcoor2-this.xcoor)/2,this.ycoor+(this.ycoor2-this.ycoor)/4,this.xcoor+(this.xcoor2-this.xcoor)/2,this.ycoor+(this.ycoor2-this.ycoor)-(this.ycoor2-this.ycoor)/4);
	}else if(this.type==("ALU")||this.type==("adder")||this.type==("combinational-adder")||this.type==("combinational-less-than")||this.type==("combinational-equal-to")||this.type==("combinational-shift-left")||this.type==("combinational-shift-right"))
	{
		var x=this.xcoor+(this.xcoor2-this.xcoor)/2;
		var y=this.ycoor+(this.ycoor2-this.ycoor)/2;
		drawLine(ctx,x-(this.xcoor2-this.xcoor)/2,y-(this.ycoor2-this.ycoor)/2,x-(this.xcoor2-this.xcoor)/2+(this.xcoor2-this.xcoor)/5,y+(this.ycoor2-this.ycoor)/2);	//left
		drawLine(ctx,x+(this.xcoor2-this.xcoor)/2,y-(this.ycoor2-this.ycoor)/2,x+(this.xcoor2-this.xcoor)/2-(this.xcoor2-this.xcoor)/5,y+(this.ycoor2-this.ycoor)/2);	//right
		drawLine(ctx,x-(this.xcoor2-this.xcoor)/2+(this.xcoor2-this.xcoor)/5,y+(this.ycoor2-this.ycoor)/2,x+(this.xcoor2-this.xcoor)/2-(this.xcoor2-this.xcoor)/5,y+(this.ycoor2-this.ycoor)/2);	//bottom
		drawLine(ctx,x-(this.xcoor2-this.xcoor)/8,y-(this.ycoor2-this.ycoor)/2,x,y-(this.ycoor2-this.ycoor)/3);		//left notch
		drawLine(ctx,x+(this.xcoor2-this.xcoor)/8,y-(this.ycoor2-this.ycoor)/2,x,y-(this.ycoor2-this.ycoor)/3);		//right notch
		drawLine(ctx,x-(this.xcoor2-this.xcoor)/2,y-(this.ycoor2-this.ycoor)/2,x-(this.xcoor2-this.xcoor)/8,y-(this.ycoor2-this.ycoor)/2);	//left top
		drawLine(ctx,x+(this.xcoor2-this.xcoor)/2,y-(this.ycoor2-this.ycoor)/2,x+(this.xcoor2-this.xcoor)/8,y-(this.ycoor2-this.ycoor)/2);	//right top
	}else if(this.type==("memory")||this.type==("ports")||this.type==("register file"))
	{
		ctx.beginPath();
		ctx.rect(this.xcoor,this.ycoor,(this.xcoor2-this.xcoor),(this.ycoor2-this.ycoor));
		ctx.closePath();
		if(this.type=="register file")
		{
			ctx.fillStyle="rgb(200,200,255)";
		}else if(this.type=="memory")
		{
			ctx.fillStyle="rgb(255,200,255)";
		}else if(this.type=="ports")
		{
			ctx.fillStyle="rgb(200,255,220)";
		}
		ctx.fill();
		drawLine(ctx,this.xcoor,this.ycoor+(this.ycoor2-this.ycoor)/3,this.xcoor+(this.xcoor2-this.xcoor),this.ycoor+(this.ycoor2-this.ycoor)/3);
		drawLine(ctx,this.xcoor,this.ycoor+2*(this.ycoor2-this.ycoor)/3,this.xcoor+(this.xcoor2-this.xcoor),this.ycoor+2*(this.ycoor2-this.ycoor)/3);
		
	}else if (this.type==("extender")||this.type=="inhibitor")
	{
		drawEllipse(ctx,this.xcoor,this.ycoor,(this.xcoor2-this.xcoor),(this.ycoor2-this.ycoor));
	}else if (this.type==("joiner"))
	{
		drawLine(ctx,this.xcoor,this.ycoor,(this.xcoor+this.xcoor2)/2,this.ycoor2);
		drawLine(ctx,this.xcoor,this.ycoor,this.xcoor2,this.ycoor);
		drawLine(ctx,this.xcoor2,this.ycoor,(this.xcoor+this.xcoor2)/2,this.ycoor2);
	}else if(this.type==("splitter"))
	{
		drawLine(ctx,this.xcoor,this.ycoor2,(this.xcoor+this.xcoor2)/2,this.ycoor);
		drawLine(ctx,this.xcoor,this.ycoor2,this.xcoor2,this.ycoor2);
		drawLine(ctx,this.xcoor2,this.ycoor2,(this.xcoor+this.xcoor2)/2,this.ycoor);
	}else if(this.type==("multiplexor")||this.type==("data_multiplexor"))
	{
		drawLine(ctx,this.xcoor,this.ycoor,this.xcoor+(this.xcoor2-this.xcoor),this.ycoor);
		drawLine(ctx,this.xcoor+(this.xcoor2-this.xcoor)/5,this.ycoor+(this.ycoor2-this.ycoor),this.xcoor+(this.xcoor2-this.xcoor)-(this.xcoor2-this.xcoor)/5,this.ycoor+(this.ycoor2-this.ycoor));
		drawLine(ctx,this.xcoor,this.ycoor,this.xcoor+(this.xcoor2-this.xcoor)/5,this.ycoor+(this.ycoor2-this.ycoor));
		drawLine(ctx,this.xcoor+(this.xcoor2-this.xcoor),this.ycoor,this.xcoor+(this.xcoor2-this.xcoor)-(this.xcoor2-this.xcoor)/5,this.ycoor+(this.ycoor2-this.ycoor));
	}else if(this.type==("decoder"))
	{
		drawLine(ctx,this.xcoor,this.ycoor+(this.ycoor2-4-this.ycoor),this.xcoor+(this.xcoor2-this.xcoor),this.ycoor+(this.ycoor2-4-this.ycoor));
		drawLine(ctx,this.xcoor+(this.xcoor2-this.xcoor)/5,this.ycoor,this.xcoor+(this.xcoor2-this.xcoor)-(this.xcoor2-this.xcoor)/5,this.ycoor);
		drawLine(ctx,this.xcoor,this.ycoor+(this.ycoor2-4-this.ycoor),this.xcoor+(this.xcoor2-this.xcoor)/5,this.ycoor);
		drawLine(ctx,this.xcoor+(this.xcoor2-this.xcoor),this.ycoor+(this.ycoor2-4-this.ycoor),this.xcoor+(this.xcoor2-this.xcoor)-(this.xcoor2-this.xcoor)/5,this.ycoor);
		for (var i=0;i<Math.pow(2,this.bits);i++)
		{
			drawLine(ctx,this.xcoor+i*decodersize,this.ycoor2,this.xcoor+i*decodersize,this.ycoor2-4);
		}
	}else if(this.type==("constant"))
	{
		drawEllipse(g,this.xcoor,this.ycoor,(this.xcoor2-this.xcoor),(this.ycoor2-this.ycoor));
	}else if(this.type==("input pin"))
	{
		drawLine(ctx,(this.xcoor+this.xcoor2)/2,this.ycoor2-(this.ycoor2-this.ycoor)/3,(this.xcoor+this.xcoor2)/2,this.ycoor2);
		drawEllipse(ctx,this.xcoor,this.ycoor,this.xcoor2-this.xcoor,2*(this.ycoor2-this.ycoor)/3);
		if (this.getValue()==0)
		{
			ctx.fillStyle="red";
		}else
		{
			ctx.fillStyle="green";
		}
		ctx.fill();
	}else if(this.type==("output pin"))
	{
		drawLine(ctx,this.xcoor,this.ycoor,this.xcoor2,this.ycoor);
		drawLine(ctx,(this.xcoor+this.xcoor2)/2,this.ycoor+(this.ycoor2-this.ycoor)/3,(this.xcoor+this.xcoor2)/2,this.ycoor);
		drawOval(ctx,this.xcoor,this.ycoor+(this.ycoor2-this.ycoor)/3,this.xcoor2-this.xcoor,2*(this.ycoor2-this.ycoor)/3);
		if(this.getValue==0)
		{
			ctx.fillStyle="red";
		}else
		{
			ctx.fillStyle="green";
		}
		fillEllipse(ctx,this.xcoor,this.ycoor+(this.ycoor2-this.ycoor)/3,this.xcoor2-this.xcoor,2*(this.ycoor2-this.ycoor)/3);
	}else if(this.type==("combinational-and"))
	{
		console.log("inside and");
		
		ctx.beginPath();
		ctx.arc(this.xcoor+(this.ycoor2-this.ycoor),this.ycoor,(this.ycoor2-this.ycoor),0*Math.PI,1*Math.PI,false);
		
		ctx.closePath();
		console.log(this.xcoor2,this.ycoor2);
		
		ctx.stroke();
		
		
		
	}else if(this.type==("combinational-nand"))
	{
		console.log("inside nand");
		ctx.beginPath();
		ctx.arc(this.xcoor+(this.ycoor2-this.ycoor),this.ycoor,((this.ycoor2)-this.ycoor),0*Math.PI,1*Math.PI,false);
		ctx.closePath();
		ctx.stroke();
		
		drawEllipse(ctx,this.xcoor+(this.xcoor2-this.xcoor)/2-6,this.ycoor2,4,4);
	}else if(this.type==("combinational-nor"))
	{
		
	}else if(this.type==("combinational-not"))
	{
		drawEllipse(ctx,this.xcoor+(this.xcoor2-this.xcoor)/2-2,this.ycoor2-4,4,4);
		drawLine(ctx,this.xcoor,this.ycoor,this.xcoor2,this.ycoor);
		drawLine(ctx,this.xcoor,this.ycoor,(this.xcoor+this.xcoor2)/2,this.ycoor2-4);
		drawLine(ctx,(this.xcoor+this.xcoor2)/2,this.ycoor2-4,this.xcoor2,this.ycoor);
	}else if(this.type==("combinational-or"))
	{
		
	}else if(this.type==("combinational-xor"))
	{
		
	}
	
	
	
};
Block.prototype.doSelect=function(x,y){
	console.log("insode do selest"+x+" "+y+" "+this.xcoor+" "+this.ycoor+ " " +this.xcoor2+ " "+ this.ycoor2);
	if (x>=this.xcoor&&y>=this.ycoor&&x<=this.xcoor2&&y<=this.ycoor2)
	{
		console.log("is an and object");
	}
};
Block.prototype.getValue=function(){
	return 0;
};


