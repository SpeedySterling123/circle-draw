Canvas.addEventLister("mousedown", my_mousedown);

function my_mousedown(e)

{
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    mouseEvent="mouseDown";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent="mouseUP";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    
}