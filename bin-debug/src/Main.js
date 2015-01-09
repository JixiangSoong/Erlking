var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.call(this);
        /**
         * 游戏计时器
         * 初始值为0
         */
        this.countnum = 0;
        /**
         * 游戏分数
         *
         */
        this.goalnum = 0;
        //初始化容器
        //for(var n=0;n<30;n++){
        //    for(var k=0;k<50;k++){
        //        this.conarr[n][k]=0;
        //        console.log(this.conarr);
        //    }
        //}
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    Main.prototype.onAddToStage = function (event) {
        //初始化Resource资源加载库
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/resource.json", "resource/");
    };
    Main.prototype.onConfigComplete = function (e) {
        this.startView = new StartUI();
        this.startView.touchEnabled = true; //设置容器是否响应Touch交互
        this.stage.addChild(this.startView);
        this.startView.addEventListener(egret.TouchEvent.TOUCH_TAP, this.loadGame, this);
    };
    /**
     * 进入游戏去掉开始按钮，注销侦听器
     * @param e
     */
    Main.prototype.loadGame = function (e) {
        this.stage.removeChild(this.startView);
        e.target.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.loadGame, this);
        this.initGame();
    };
    /**
     * 游戏初始化，生成主场景
     */
    Main.prototype.initGame = function () {
        this.gameView = new GameUI();
        this.stage.addChild(this.gameView);
        //加载时间
        this.gameView.loadGoals(this.goalnum);
        //创建计时器
        var timer = new egret.Timer(500);
        timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
        timer.start();
    };
    Main.prototype.timerFunc = function () {
        this.countnum++;
        //alert(this.conarr[20][40]);
        this.gameView.loadCount(this.countnum);
    };
    return Main;
})(egret.DisplayObjectContainer);
Main.prototype.__class__ = "Main";
