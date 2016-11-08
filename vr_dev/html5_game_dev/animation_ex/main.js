


var canvas = null;
var context = null;
var ctx = null;
var frameRate = 1000/30;
var frame = 0;
var assets = ['/media/img/gamedev/robowalk/robowalk00.png',
    '/media/img/gamedev/robowalk/robowalk01.png',
    '/media/img/gamedev/robowalk/robowalk02.png',
    '/media/img/gamedev/robowalk/robowalk03.png',
    '/media/img/gamedev/robowalk/robowalk04.png',
    '/media/img/gamedev/robowalk/robowalk05.png',
    '/media/img/gamedev/robowalk/robowalk06.png',
    '/media/img/gamedev/robowalk/robowalk07.png',
    '/media/img/gamedev/robowalk/robowalk08.png',
    '/media/img/gamedev/robowalk/robowalk09.png',
    '/media/img/gamedev/robowalk/robowalk10.png',
    '/media/img/gamedev/robowalk/robowalk11.png',
    '/media/img/gamedev/robowalk/robowalk12.png',
    '/media/img/gamedev/robowalk/robowalk13.png',
    '/media/img/gamedev/robowalk/robowalk14.png',
    '/media/img/gamedev/robowalk/robowalk15.png',
    '/media/img/gamedev/robowalk/robowalk16.png',
    '/media/img/gamedev/robowalk/robowalk17.png',
    '/media/img/gamedev/robowalk/robowalk18.png'
];
var frames = [];

var onImageLoad = function(){
    console.log("IMAGE!!!");
};

var setup = function() {
    canvas = document.createElement('canvas');
    context = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight

    for (var i = 0; i < assets.length; i++) {
        frames.push(new Image());
        frames[i].onload = onImageLoad;
        frames[i].src = assets[i];

        setInterval(animate, frameRate);
    }
};

var animate = function(){
    context.clearRect(0,0, canvas.width, canvas.height)
    context.drawImage(frames[frame], 192, 192);
    frame = (frame + 1) % frames.length;
};

setup();

