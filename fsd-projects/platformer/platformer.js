$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(125, 610, 50, 40, "red");
    createPlatform(325, 610, 50, 40, "red");
    createPlatform(525, 610, 50, 40, "red");
    createPlatform(725, 610, 50, 40, "red");
    createPlatform(925, 610, 50, 40, "red");
    createPlatform(1125, 610, 50, 40, "red");
    createPlatform(1325, 610, 50, 40, "red");
    createPlatform(225, 480, 50, 40, "red");
    createPlatform(425, 480, 50, 40, "red");
    createPlatform(625, 480, 50, 40, "red");
    createPlatform(825, 480, 50, 40, "red");
    createPlatform(1025, 480, 50, 40, "red");
    createPlatform(1225, 480, 50, 40, "red");
    createPlatform(100, 370, 70, 40, "blue");
    createPlatform(320, 370, 470, 40, "blue");
    createPlatform(920, 370, 370, 40, "blue");
    createPlatform(1000, 330, 290, 40, "yellow");
    createPlatform(1080, 290, 210, 40, "blue");
    createPlatform(1180, 250, 110, 40, "yellow");
    createPlatform(1230, 210, 60, 40, "blue");

    // TODO 3 - Create Collectables
    createCollectable("steve", 828, 420);
    createCollectable("database", 540, 320);
    createCollectable("diamond", 1250, 110);

    // TODO 4 - Create Cannons
    createCannon("right", 750, 2000);
    createCannon("right", 510, 2000);
    createCannon("top", 550, 700);
    createCannon("top", 685, 700);
    createCannon("left", 90, 900);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
