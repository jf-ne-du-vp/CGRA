/**
 * MyHouse
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyHouse extends CGFobject {
    //constructor(scene, trunkHeight, trunkRadius, treeTopHeight, treeTopRadius, trunkTexture, treeTopTexture) {
    constructor(scene, slices) {
        super(scene);
        this.slices = slices;
        this.initObjects();
        this.initMaterials(scene);
    }

    initObjects() {
        this.column = new MyPrism(this.scene, this.slices, 10);
        this.walls = new MyUnitCubeQuad(this.scene);
        this.roof = new MyPyramid(this.scene, 4);
    }

    initMaterials(scene) {
        this.wallSide = new CGFappearance(scene);
        this.wallSide.setAmbient(0.1, 0.1, 0.1, 1.0);
        this.wallSide.setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.wallSide.setSpecular(0.0, 0.0, 0.0, 1.0);
        this.wallSide.setShininess(1.0);
        this.wallSide.loadTexture('images/wallside.jpg');
        this.wallSide.setTextureWrap('REPEAT', 'REPEAT');

        this.wallFront = new CGFappearance(scene);
        this.wallFront.setAmbient(0.1, 0.1, 0.1, 1.0);
        this.wallFront.setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.wallFront.setSpecular(0.0, 0.0, 0.0, 1.0);
        this.wallFront.setShininess(1.0);
        this.wallFront.loadTexture('images/roof.jpg');
        this.wallFront.setTextureWrap('REPEAT', 'REPEAT');


    }


    display() {
        this.scene.pushMatrix();

        this.scene.scale(4,4,4);
        this.scene.translate(-3,0,-3);

        this.scene.pushMatrix();
        this.scene.scale(1/10,1/10,1/10);
        this.scene.translate(7, 0, 7);
        this.column.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(1/10,1/10,1/10);
        this.scene.translate(-7, 0, 7);
        this.column.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(1/10,1/10,1/10);
        this.scene.translate(7, 0, -7);
        this.column.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(1/10,1/10,1/10);
        this.scene.translate(-7, 0, -7);
        this.column.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,1,0);
        this.scene.scale(1.5,1.5,1.5);
        this.scene.rotate(Math.PI/4,0,1,0);
        this.wallFront.apply();
        this.roof.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.wallSide.apply();
        this.scene.translate(0, 0, 0);
        this.walls.display();
        this.scene.popMatrix();

        this.scene.popMatrix();
    }

    enableNormalViz(){
        this.column.enableNormalViz();
        this.walls.enableNormalViz();
        this.roof.enableNormalViz();
    }


    updateBuffers(complexity){
    }

    disableNormalViz(){
        this.column.disableNormalViz();
        this.walls.disableNormalViz();
        this.roof.disableNormalViz();
    }

}
