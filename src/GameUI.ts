/**
 * 游戏场景初始化
 */
class GameUI extends egret.Sprite{

    public constructor(){
        super();
        this.count=new egret.TextField();
        this.goal=new egret.TextField;
        this.addChild(this.count);
        this.addChild(this.goal);
        this.createBlock();
    }

    /**
     *  shijian
     */
    public count:egret.TextField;

    /**
     * 分数
     */
    public goal:egret.TextField;

    /**
     * 下次显示方快
     */
    public block:egret.Shape;

    private createBlock():void {
        //生成黄色主场景
        var layout=new egret.Shape();
        this.addChild(layout);
        layout.graphics.beginFill(0xFFC125,1);
        layout.graphics.drawRect(50,100,300,500);
        layout.graphics.endFill();
    }

    public loadCount(countnum:Number){
        this.count.size=15;
        this.count.x=351;
        this.count.y=300;
        this.count.width=100;
        this.count.height=100;
        this.count.textAlign = "center";
        this.count.text="时间:"+countnum;
    }

    public loadGoals(goalsnum:Number){
        this.goal.size=15;
        this.goal.x=351;
        this.goal.y=350;
        this.goal.width=100;
        this.goal.height=100;
        this.goal.textAlign = "center";
        this.goal.text="分数:"+goalsnum;
    }

}
