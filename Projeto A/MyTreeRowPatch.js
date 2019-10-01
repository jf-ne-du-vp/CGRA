/**
 * MyTreeRowPatch
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTreeRowPatch extends CGFobject {
  //constructor(scene, trunkHeight, trunkRadius, treeTopHeight, treeTopRadius, trunkTexture, treeTopTexture) {
  constructor(scene, trunkHeight, trunkRadius, treeTopHeight, treeTopRadius, trunkTexture, treeTopTexture) {
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
      this.scene.translate(3, 0, 0.3);
      this.tree.display();
      this.scene.popMatrix();

      this.scene.pushMatrix();
      this.scene.translate(6, 0, 0);
      this.tree.display();
      this.scene.popMatrix();

      this.scene.pushMatrix();
      this.scene.translate(9, 0, 0.4);
      this.tree.display();
      this.scene.popMatrix();

      this.scene.pushMatrix();
      this.scene.translate(12, 0, 0.1);
      this.tree.display();
      this.scene.popMatrix();

      this.scene.pushMatrix();
      this.scene.translate(15, 0, 0.2);
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
  