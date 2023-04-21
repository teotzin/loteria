
var loteria = function(gameLoteria,groupLoteria){
};

loteria.prototype = {
  preload: function() {
    console.log('loteria board');
    
  },

  create: function() {
    gameLoteria.stage.backgroundColor = "#ffffff";
    gameLoteria.load.image("loteria", "../images/cards/cartaCoinci.png");
    // card = this.game.add.group(); // card containing image and border
    // cardBorder = card.create(0, 0, 'border');
    // cardImage = card.create(cardBorder.x+30, cardBorder.y+32, 'loteria', 'card_' + cardNumber + '.png');
    console.log('imageboard in phaser: ' + imageBoard);

    groupLoteria = gameLoteria.add.group();
    //groupLoteria.createMultiple(1, 'loteria', imageBoard, true);
    groupLoteria.createMultiple(1, 'loteria', imageBoard, true, index => {
      return imageBoard[index];
    });
    groupLoteria.align(4, 4, 210, 330);
    groupLoteria.scale.set(.9, .9);
    groupLoteria.alive=true;

    window.addEventListener('message', function(event) 
   {
    var message = event.data;
    if(message.type === 'cardNumber') 
    {
      var iIndex = 0;
      groupLoteria.forEach(function(sprite) {
      //console.log('message.data: ' + message.data);
      //var image = gameLoteria.cache.getKeys(Phaser.Cache.IMAGE).find(function(key) { return gameLoteria.cache.getImage(key).name === sprite.key; });
      //console.log('sprite.key: ' + image);
      
            
      console.log('IMAGE: ' + imageBoard[iIndex]);  
      console.log('card_'+message.data+'.png');
      if(imageBoard[iIndex] === 'card_'+message.data+'.png')
       {
        console.log('!!!!!SUSTITUYENDO.!!!!!!!!!!!!!!!!: ' + imageBoard[iIndex]);  
        sprite.loadTexture('loteria', 'cartaCoinci.png');
       }
      iIndex++;
      });
    }
  });
}};