

class Main extends egret.DisplayObjectContainer{

    /**
     * 加载游戏开始按钮
     */
    private startView:StartUI;

    /**
     * 游戏初始化场景
     */
    private gameView:GameUI;

    /**
     * 游戏计时器
     * 初始值为0
     */
    private countnum=0;

    /**
     * 当前方块类型
     * 共6种类型为0-5
     */
    private blockType;

    /**
     * 游戏分数
     *
     */
    private goalnum=0;

    /**
     * 容器数组
     */
    private conarr:number[][];

    public constructor() {
        super();
        //初始化容器
        //for(var n=0;n<30;n++){
        //    for(var k=0;k<50;k++){
        //        this.conarr[n][k]=0;
        //        console.log(this.conarr);
        //    }
        //}
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }

    private onAddToStage(event:egret.Event){

        //初始化Resource资源加载库
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE,this.onConfigComplete,this);
        RES.loadConfig("resource/resource.json","resource/");
    }
    private onConfigComplete(e:egret.Event){
        this.startView=new StartUI();
        this.startView.touchEnabled = true;//设置容器是否响应Touch交互
        this.stage.addChild(this.startView);
        this.startView.addEventListener(egret.TouchEvent.TOUCH_TAP,this.loadGame,this);
    }

    /**
     * 进入游戏去掉开始按钮，注销侦听器
     * @param e
     */
    private loadGame(e:egret.Event){
        this.stage.removeChild(this.startView);
        e.target.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.loadGame,this);
        this.initGame();
    }

    /**
     * 游戏初始化，生成主场景
     */
    private initGame(){
        this.gameView=new GameUI();
        this.stage.addChild(this.gameView);
        //加载时间
        this.gameView.loadGoals(this.goalnum);
        //创建计时器
        var timer:egret.Timer=new egret.Timer(500);
        timer.addEventListener(egret.TimerEvent.TIMER,this.timerFunc,this);
        timer.start();
    }
    private timerFunc(){
        this.countnum++;
        //alert(this.conarr[20][40]);
        this.gameView.loadCount(this.countnum);
    }
}


