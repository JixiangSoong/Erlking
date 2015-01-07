/**
 * this is a class to make block object
 */
class StartUI extends egret.Sprite{

    public constructor(){
        super();
        this.createBlock();
    }
    private textField:egret.TextField;

    private createBlock():void {
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.y = 300;
        this.textField.width = 480;
        this.textField.height = 100;
        this.textField.textAlign = "center";
        this.textField.text="开始游戏";
    }

}
