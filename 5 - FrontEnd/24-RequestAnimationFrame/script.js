const canvas = document.getElementById("cv");
const context = cv.getContext("2d");

const pos = [150, 150];
const speed = [40, 60];
const size = 300;

let lastTime;

function draw(time)
{
    if(!lastTime)
    {
        lastTime = time;
    }

    const elapsedTimes = (time - lastTime)/1000;
    lastTime = time;
    //console.log(elapsedTime);

    context.fillStyle = "rgb(205, 220, 12)";
    context.clearRect(0, 0 ,size, size)
    context.beginPath();
    pos[0] += elapsedTimes * speed[0];
    pos[1] += elapsedTimes * speed[1];

    pos[0] = pos[0] >= size ? pos[0] % size : pos[0];
    pos[1] = pos[1] >= size ? pos[1] % size : pos[1];

    context.arc(pos[0], pos[1], 50, 0, 2*Math.PI, true);
    context.fill();
    requestAnimationFrame(draw);
}
requestAnimationFrame(draw);
