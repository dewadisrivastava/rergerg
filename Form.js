class Form {

  constructor() {
    this.input = createInput("Name");
    this.input2 = createInput("write correct option no.");
    this.button = createButton('Play');
    this.greeting = createElement('h4');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.input2.hide();
  }

  display(){

  
    var title = createElement('h2')
    title.html("quiz Game");
    title.position(130, 0);

    this.input.position(130, 160);
    this.input2.position(220, 160);
    this.button.position(250, 200);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      player.option=this.input2.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name+"_answer given:"+player.option)
      this.greeting.position(130, 100);

      if(player.option==="2"){
        this.greeting.html("2 is the correct answer" +player.name)
      fill("green")
        this.greeting.position(130, 100);
      }
      else{
        this.greeting.html("incorrect answer" +player.name)
      fill("red")
        this.greeting.position(130, 100);
      }
      
    });

 
    
  }

}
