/**
 * MyNest
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyNest extends CGFobject {
    //constructor(scene, trunkHeight, trunkRadius, treeTopHeight, treeTopRadius, trunkTexture, treeTopTexture) {
    constructor(scene, slices) {
        super(scene);
        this.slices = slices;
        this.initObjects();
        this.initMaterials(scene);
    }

    initObjects() {
        this.wall = new MyQuad(this.scene);
    }

    initMaterials(scene) {
        /*this.wallSide = new CGFappearance(scene);
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
        this.wallFront.setTextureWrap('REPEAT', 'REPEAT');*/


    }


    display() {
      this.scene.scale(1.5, 1.5, 1.5);
      this.scene.translate(-8, 2, -1);

      this.scene.pushMatrix();
      this.scene.rotate(Math.PI/2, 1, 0, 0);
      this.wall.display();
      this.scene.popMatrix();

      this.scene.pushMatrix();
      this.scene.translate(0, 0.5, 0.5);
      this.wall.display();
      this.scene.popMatrix();

      this.scene.pushMatrix();
      this.scene.translate(0, 0.5, -0.5);
      this.wall.display();
      this.scene.popMatrix();

      this.scene.pushMatrix();
      this.scene.translate(0.5, 0.5, 0);
      this.scene.rotate(Math.PI/2, 0, 1, 0);
      this.wall.display();
      this.scene.popMatrix();

      this.scene.pushMatrix();
      this.scene.translate(-0.5, 0.5, 0);
      this.scene.rotate(Math.PI/2, 0, 1, 0);
      this.wall.display();
      this.scene.popMatrix();
    }

    enableNormalViz(){
        this.wall.enableNormalViz();
    }


    updateBuffers(complexity){
    }

    disableNormalViz(){
        this.wall.disableNormalViz();
    }

}
