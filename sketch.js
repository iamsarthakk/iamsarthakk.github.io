let x = 0;
let y = 100;
let s = 1;
let str1,str2;
let i=0;

function setup() {

    str1 = "Hello!<br/>I'm Sarthak";
    str2 = "";
    h = createElement('h1',str2);
    h.style('font-size','128px');
    h.style('color',255,0,0);
}

function draw() {

    if(i<str1.length){
        str2 = str2+str1[i];
        i++;
        h.html(str2);
    }

    if(x>200){
        s = -1;
       }
    else if(x<0){
        s = 1;
    }
       x = x+s;

}
