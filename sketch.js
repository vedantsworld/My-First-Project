var box
function setup() {
  createCanvas(400, 400);
  box = createSprite(200, 200, 20, 20)
}

function draw() {
  background(30);
  if (keyDown('right')) {
    box.x = box.x + 10
  }

  if (keyDown('left')) {
    box.x = box.x - 10
  }

  if (keyDown('up')) {
    box.y = box.y - 10
  }

  if (keyDown('down')) {
    box.y = box.y + 10
  }
  drawSprites()
}




