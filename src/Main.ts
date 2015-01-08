

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
     * 游戏分数
     */
    private countnum:Number=0;

    public constructor() {
        super();
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
        alert("sfd");
        this.gameView=new GameUI();
        this.stage.addChild(this.gameView);
        this.gameView.loadCount(this.countnum);
    }
}


