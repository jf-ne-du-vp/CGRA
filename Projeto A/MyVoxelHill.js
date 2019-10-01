/**
 * MyVoxelHill
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyVoxelHill extends CGFobject {
    //constructor(scene, trunkHeight, trunkRadius, treeTopHeight, treeTopRadius, trunkTexture, treeTopTexture) {
    constructor(scene, levels) {
        super(scene);
        this.levels = levels;
        this.initObjects();
    }

    initObjects() {
        this.cube = new MyUnitCubeQuad(this.scene);
    }


    display() {
        let side = this.levels * 2 - 1;

        for(var index = 0; index < this.levels; index++) {
            this.scene.pushMatrix();
            for (var i = 0; i < side; i++) {
                this.scene.pushMatrix();
                for (var j = 0; j < side; j++) {
                    this.cube.display();
                    this.scene.translate(0,0,1);
                }
                this.scene.popMatrix();
                this.scene.translate(1,0,0);
            }
            this.scene.popMatrix();
            this.scene.translate(1, 1, 1);
            side = side - 2;
        }
      }

    enableNormalViz(){
        this.cube.enableNormalViz();
    }


    updateBuffers(complexity){
    }

    disableNormalViz(){
        this.cube.disableNormalViz();
    }

}