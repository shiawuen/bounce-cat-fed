var game = {};

var logo

game.create = function () {
  logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');

  this.game.physics.enable(logo, Phaser.Physics.ARCADE);

  logo.anchor.setTo(0.5, 0.5);
  logo.body.collideWorldBounds = true;
  logo.body.bounce.setTo(0.8, 0.8);
};

game.update = function () {
  var body = logo.body
  var coords = game.input
  var targetCoords = logo.position

  // only move when you click
  if (game.input.mousePointer.isDown) {
    //  400 is the speed it will move towards the mouse
    game.physics.arcade.moveToPointer(logo, -400);

    //  if it's overlapping the mouse, don't move any more
    // if (Phaser.Rectangle.contains(body, coords.x, coords.y))
      // body.velocity.setTo(0, 0);
  }
  else {
    // body.velocity.setTo(0, 0);
  }
}

module.exports = game;
