var monster, mImg
var princess, hero,hero1, princessImg, heroImg,heroClimb,heroImg2, heroIdle1, heroIdle2
var fireball, fireballImg, iceball,iceball2, iceballImg, iceballGroup
var vladder1, vladder2, vladder3, vladder4,vladder5,vladder6,vladder7,vladder8,vladder9, vladderIMG,ladderGroup;
var hladder1,hladder2,hladder3,hladder4,hladder5,hladder1_IMG,hladder2_IMG
var bgImg,BG
var score=0;
var life1,life2,life3,lifeImg,brokenLImg
var deathCount=0


function preload(){
    mImg = loadAnimation("m4.png","m5.png","m6.png","m7.png","m8.png","m9.png","m10.png","m11.png","m12.png")
    lifeImg = loadImage("hearts.png")
    iceballImg = loadImage("ice.png")
    brokenLImg = loadImage("broken heart.png")
    heroImg =  loadAnimation("hero_walking_1.png","hero_walking-idle_2.png","hero_walking_2.png")
    heroImg2 =  loadAnimation("hero_walking_3.png","hero_walking-idle_1.png","hero_waling_4.png")
    heroIdle1= loadImage("hero_walking-idle_2.png")

    heroClimb =  loadAnimation("climbing1.png","climbing2.png","climbing3.png")
    vladderIMG= loadImage("ladder.png")
    hladder1_IMG= loadImage("platform1.png")
    hladder2_IMG= loadImage("platform2.png")
    fireballImg= loadImage("fire1.png")
    princessImg =  loadAnimation("princess1.png","princess2.png","princess3.png","princess4.png")
    bgImg = loadImage("bg.png")
    
 
   
}


function setup(){
createCanvas(800 , 700)



BG= createSprite(400,450)
BG.addImage(bgImg)
BG.scale=2

fireball = createSprite(475,150) 
fireball.addAnimation("fire",fireballImg)
fireball.scale=.45

/*iceball = createSprite(685,590) 
iceball.addAnimation("ice",iceballImg)
iceball.scale=.35*/


monster = createSprite(450,137) 
monster.addAnimation("angry",mImg)
monster.scale=1.3
//monster.debug=true
monster.setCollider("rectangle", 0,0,20,50)

monster.depth=fireball.depth
monster.depth++



life1 = createSprite(625,50)
life1.addImage("angry",lifeImg)
life1.scale=0.1

life2 = createSprite(650,50)
life2.addImage("angry",lifeImg)
life2.scale=0.1

life3 = createSprite(675,50)
life3.addImage("angry",lifeImg)
life3.scale=0.1

princess= createSprite(460,50)
princess.addAnimation("crying",princessImg);

vladder1=createSprite(680,600);
vladder1.addImage(vladderIMG);
vladder1.visible=false;
//vladder1.debug=true
vladder1.setCollider("rectangle",0,-20,20,100)

vladder2=createSprite(405,500);
vladder2.addImage(vladderIMG);
vladder2.visible=false;
//vladder2.debug=true
vladder2.setCollider("rectangle",0,-20,20,100)


vladder3=createSprite(210,500);
vladder3.addImage(vladderIMG);
vladder3.visible=false;
//vladder3.debug=true
vladder3.setCollider("rectangle",0,-20,20,100)

vladder4=createSprite(675,400);
vladder4.addImage(vladderIMG);
vladder4.visible=false;
//vladder4.debug=true
vladder4.setCollider("rectangle",0,-20,20,100)

vladder5=createSprite(460,400);
vladder5.addImage(vladderIMG);
vladder5.visible=false;
//vladder5.debug=true
vladder5.setCollider("rectangle",0,-20,20,100)

vladder6=createSprite(335,320);
vladder6.addImage(vladderIMG);
vladder6.visible=false;
//vladder6.debug=true
vladder6.setCollider("rectangle",0,-20,20,100)

vladder7=createSprite(210,320);
vladder7.addImage(vladderIMG);
vladder7.visible=false;
//vladder7.debug=true
vladder7.setCollider("rectangle",0,-20,20,100)

vladder8=createSprite(680,220);
vladder8.addImage(vladderIMG);
vladder8.visible=false;
//vladder8.debug=true
vladder8.setCollider("rectangle",0,-20,20,100)

vladder9=createSprite(340,125);
vladder9.addImage(vladderIMG);
vladder9.visible=false;
//vladder9.debug=true
vladder9.setCollider("rectangle",0,-20,70,100)



hero = createSprite(185,625)
hero.addAnimation("Idle",heroIdle1)
//hero.scale=1
hero.addAnimation("walk",heroImg)  
hero.addAnimation("left",heroImg2)
hero.addAnimation("climb",heroClimb)
hero.setCollider("circle",0,0,15)
//hero.debug=true
 
iceballGroup= new Group()

}

function draw(){
background(170)
strokeWeight(15)
fill("red")
textSize(15)
    text("Death Count : "+ deathCount, 50, 50)

    
    
blueball()
heromove()
 
if(iceballGroup.isTouching(monster)){
    deathCount=deathCount+1
    iceballGroup.destroyEach()}
    
if(deathCount===3){
    fill(0)
    textSize(40)
     text("YAHHOO!!! - The Monster is Dead",100,500)   
        monster.destroy()
     
    }
    drawSprites()
}


function heromove(){
    if(keyDown("RIGHT_ARROW")){
        hero.changeAnimation("walk",heroImg)
        hero.x= hero.x+5
        //hero.y=625
//hero.destroy()
    }
    
    if(keyDown("LEFT_ARROW")){
        //hero2 = createSprite(hero1.x,hero1.y,10,10)
        hero.changeAnimation("left",heroImg2)
        hero.x= hero.x-5
     }


if(hero.isTouching(vladder1) || hero.isTouching(vladder2)|| hero.isTouching(vladder3) || hero.isTouching(vladder4) || hero.isTouching(vladder5) || hero.isTouching(vladder6)|| hero.isTouching(vladder7)|| hero.isTouching(vladder8)|| hero.isTouching(vladder9) ){

    if(keyDown("UP_ARROW")){
        hero.changeAnimation("climb",heroClimb)
        hero.y= hero.y-5
        //fireball.x=Math.round(random(100,500))
        //fireball.y=Math.round(random(150,600))
        fireball.velocityX=2
            fireball.velocityY=2
         fireball.x=Math.round(random(2,-2))

            }


    if(keyDown("DOWN_ARROW")){
        hero.changeAnimation("climb",heroClimb)
        hero.y= hero.y+5
    }
}

}
//kya karen uskay liye - what to do for it
// seekhnaa - learn
// wo bhi - that too
// haan - yes
//karo - do
// jaldi - quick
//kya- what
//karen - do
// uskay  liye- for it


/*function blueball(){
    iceball2 = createSprite(hero.x+15,hero.y) 
    iceball2.addAnimation("ice",iceballImg)
    iceball2.scale=.35

    
    
        iceball2.velocityX=7
    
   if(iceball2.y = monster.y){
            deathCount=deathCount+1
            iceball2.remove()
        }



}*/
function blueball(){
    iceball = createSprite(hero.x-15,hero.y) 
    iceball.addImage(iceballImg)
    iceball.scale=.35
    //iceball.velocityX=-7
    iceball.setCollider("circle",0,0,30)
    iceball.visible=false
iceballGroup.add(iceball)
    monster.depth=iceball.depth
    monster.depth++

    if(keyDown("E")){
        iceball.visible=true
            iceball.velocityX=7 
                
    }
    
    if(keyDown("Q")){
        iceball.visible=true
        iceball.velocityX=-7
        
    }
 
    
        
    }

    
