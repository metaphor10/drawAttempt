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
