/**
 * MyTreeGroupPatch
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTreeGroupPatch extends CGFobject {
    //constructor(scene, trunkHeight, trunkRadius, treeTopHeight, treeTopRadius, trunkTexture, treeTopTexture) {
    constructor(scene,  trunkHeight, trunkRadius, treeTopHeight, treeTopRadius, trunkTexture, treeTopTexture) {
        super(scene);
        this.trunkHeight = trunkHeight;
        this.trunkRadius = trunkRadius;
        this.treeTopHeight = treeTopHeight;
        this.treeTopRadius = treeTopRadius;
        this.trunkTexture = trunkTexture;
        this.treeTopTexture = treeTopTexture;
        this.initObjects();
    }

    initObjects() {
        this.tree = new MyTree(this.scene, this.trunkHeight, this.trunkRadius, this.treeTopHeight, this.treeTopRadius, this.trunkTexture, this.treeTopTexture);
    }

    display() {
        this.tree.display();
        
        this.scene.pushMatrix();
        this.scene.translate(0, 0, 2.8);
        this.tree.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0, 6);
        this.tree.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(3, 0, 0.5);
        this.tree.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(3, 0, 3.7);
        this.tree.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(3, 0, 5.9);
        this.tree.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(6, 0, 0.2);
        this.tree.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(6, 0, 3.2);
        this.tree.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(6, 0, 6.1);
        this.tree.display();
        this.scene.popMatrix();

    }

    enableNormalViz(){
        this.tree.enableNormalViz();
    }


    updateBuffers(complexity){
    }

    disableNormalViz(){
        this.tree.disableNormalViz();
    }

}