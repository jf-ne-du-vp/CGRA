/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
	constructor(scene) {
        super(scene);
        this.initObjects();
	}
	initObjects(scene) {
        this.diamond = new MyDiamond(this.scene);
        this.parallelogram = new MyParallelogram(this.scene);
        this.segtrianglebig = new MysegTriangleBig(this.scene);
        this.segtrianglesmall = new MysegTriangleSmall(this.scene);
        this.triangle = new MyTriangle(this.scene);
        this.trianglebig = new MyTriangleBig(this.scene);
        this.trianglesmall = new MyTriangleSmall(this.scene);
	}
    display() {
        this.scene.pushMatrix();
        this.scene.translate(Math.sqrt(8)/2, 0, 0);
        this.scene.rotate(-3*Math.PI/4,0,0,1);
        this.triangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(-3*Math.PI/4,0,0,1);
        this.scene.translate(2,0,0);
        this.trianglebig.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.45,-0.45,0,0);
        this.scene.rotate(Math.PI/4,0,0,1);
        this.trianglesmall.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/4,0,0,1);
        this.scene.translate(0,-2,0);
        this.segtrianglebig.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(Math.sqrt(8)*0.75,-0.71,0);
        this.scene.rotate(-3*Math.PI/4,0,0,1);
        this.segtrianglesmall.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(Math.sqrt(8),(-Math.sqrt(8))/2,0);
        this.scene.rotate(-3*Math.PI/4,0,0,1);
        this.scene.scale(1,-1,1);
        this.parallelogram.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate((Math.sqrt(8)/2)*0.75,(Math.sqrt(2)+1)*0.85,0);
        this.diamond.display();
        this.scene.popMatrix();

	}
}