var canvas;
var axiom = "F";
var sentence = axiom;

var angle;

var rules = [];
rules[0] = {
 a:"F",
 b:"FF+[+F-F-F]-[-F+F+F]"
}

var len = 100;

function generate(){
    len *= 0.5;
    var nextSentence = "";
  for(var i = 0; i < sentence.length; i++){
    var current = sentence.charAt(i);
    var found = false;
    for(var j = 0; j < rules.length; j++){
        if(current === rules[j].a){
            found = true;
            nextSentence += rules[j].b;
            break;
        }
        if(!found){
            nextSentence += current;
        }
    }
  }
  sentence = nextSentence;
  createP(sentence);

  turtle();
}

function turtle(){
    background(51);
    resetMatrix();
    stroke(255);
    translate(width/2,height);
    for(var i = 0; i < sentence.length; i++){
        var current = sentence.charAt(i);

        if(current === "F"){
            line(0,0,0,-len);
            translate(0,-len);
        }else if(current === "+"){
            rotate(angle);
        }else if(current === "-"){
            rotate(-angle);
        }else if(current === "["){
            push();
        }else if(current === "]"){
            pop();
        }
    }
}

function setup(){
 canvas = createCanvas(400,400);
angle = radians(25);
 background(52);
 createP(axiom);
 turtle();
 var button = createButton("generate");
 button.mousePressed(generate);
}