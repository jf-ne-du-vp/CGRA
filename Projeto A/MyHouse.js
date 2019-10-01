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
        this.initMaterials();
    }

    initObjects() {
        this.column = new MyPrism(this.scene, this.slices, 10);
        this.walls = new MyUnitCubeQuad(this.scene);
        this.roof = new MyPyramid(this.scene, 4);
    }

    initMaterials() {
        this.materials = [];
        this.materialIDs = {
            'roof': 0
        };

            var mat = new CGFappearance(this.scene);
            mat.setAmbient(1.0, 1.0, 1.0, 1.0);
            mat.setSpecular(1.0, 1.0, 1.0, 1.0);
            mat.setDiffuse(1.0, 1.0, 1.0, 1.0);
            mat.setShininess(10.0);
            mat.loadTexture('roof.jpg');
            mat.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
            this.materials.push(mat);

    }


    display() {
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

        this.walls.display();

        this.scene.pushMatrix();
        this.scene.translate(0,1,0);
        this.scene.scale(1.5,1.5,1.5);
        this.scene.rotate(Math.PI/4,0,1,0);
        this.materials[this.materialIDs["roof"]].apply();
        this.roof.display();
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