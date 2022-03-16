class NPC{
    constructor(x,y,w,h,img){
        this.x=x;
        this.y=y;
        this.width=w;
        this.height=h;

        this.npc=createSprite(x,y,w,h);
        this.npc.addImage(img);
        this.npc.scale=1.2;
    }
    show(){
        this.npc.visible=true;
    }
    hide(){
        this.npc.visible=false;
    }
    talk(){
        if(this.npc.isTouching(player) && keyWentUp("space") && apple === false){
            maxTalk1.show();
            var message1 = `
            You don't have an apple. If you give me one I'll give you the key
            <br><div class="click">click here</div>
            `;
            maxTalk1.html(message1);
            maxTalk1.mousePressed(()=>{
                maxTalk1.hide();
            })
        } else if(this.npc.isTouching(player) && keyWentUp("space") && apple === true){
            maxTalk2.show();
            var message2 = `
            Wow you have an apple. Here take the key
            <br><div class="click2">click here</div>
            `;
            maxTalk2.html(message2);
            apple =false;
            key=true;
            keyIcon.visible=true;
            maxTalk2.mousePressed(()=>{
                maxTalk2.hide();
            })
        }
    }
    display(){
        p2.bounceOff(this.npc);
        this.npc.visible=true;
    }
}