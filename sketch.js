var canvas;
var bgcolor;
var h1;
var x = 0;
var y = 100;
var s = 1;
var button;
var slider;
var bot;
var str1,str2;
var i=0;
var dropzone;

function setup() {
    bgcolor = color(200);
    
    str1 = "Hello!<br/>I'm sarthak";
    str2 = "";
    
    dropzone = select('#dropzone');
    dropzone.dragOver(highlight);
    dropzone.dragLeave(unhighlight);
    dropzone.drop(gotFile,unhighlight);
    
    canvas = createCanvas(200,200);
    h1 = createElement('h1','Waiting....');
    bot = createButton("=_=");
    slider = createSlider(10,90,30);
    h = createElement('h1',str2);
    
    canvas.position(800,200);
    bot.mousePressed(changeColor);
    slider.position(800,410);   
    bot.style('background-color',0);
    bot.style('color','white');
    bot.style('border-color',0);
    //h.style('font-size','128px');
    //h.child(h1);
}

function gotFile(file){
    createP(file.name+""+file.size);
    var img = createImg(file.data);
    img.size(100,100);
}

function highlight(){
    dropzone.style('background-color',"#ccc");
}

function unhighlight(){
    dropzone.style('background-color',255);
}

function changeBot1(){
    bot.html("+_+");
}

function changeBot2(){
    bot.html("0_0");
}

function changeBot3(){
    bot.html("x_x");
}

function changeColor(){
    bgcolor = random(255);
}

function mousePressed(){
    h1.html("Lets Start then....");
}

function draw() {
    background(bgcolor);
    bot.mouseOver(changeBot1);
    bot.mouseOut(changeBot2);
    bot.mousePressed(changeBot3);
    
    if(i<str1.length){
        str2 = str2+str1[i];
        i++;
        h.html(str2);
    }
    
    fill(255,0,0);
    ellipse(x,y,slider.value(),slider.value());
    
    h1.position(x,y);
    
    
    if(x>200){
        s = -1;
       }
    else if(x<0){
        s = 1;
    }
       x = x+s;
    
}