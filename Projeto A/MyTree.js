    
/**
 * MyTree
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTree extends CGFobject {
	constructor(scene, trunkHeight, trunkRadius, treeTopHeight, treeTopRadius, trunkTexture, treeTopTexture ) {
        super(scene);
        this.trunkHeight = trunkHeight;
        this.trunkRadius = trunkRadius;
        this.treeTopHeight = treeTopHeight;
        this.treeTopRadius = treeTopRadius;
        this.trunkTexture = trunkTexture;
        this.treeTopTexture = treeTopTexture;
        this.initObjects();
        this.initMaterials();
    }

	initObjects() {
        //Initializing the objcts
        this.cone = new MyCone(this.scene, 10, 1);
        this.cylinder = new MyCylinder(this.scene, 5);
    }

    initMaterials()
    {
        //Trunk Material
       this.trunkMaterial = new CGFtexture(this.scene, this.trunkMaterial);
       this.trunkMaterial = new CGFappearance(this.scene);
       this.trunkMaterial.setAmbient(1, 1, 1, 1.0);
       this.trunkMaterial.setDiffuse(1, 1, 1, 1.0);
       this.trunkMaterial.setSpecular(0, 0, 0, 1.0);
       this.trunkMaterial.setShininess(10.0);
       this.trunkMaterial.loadTexture(this.trunkMaterial);
       this.trunkMaterial.setTextureWrap('REPEAT', 'REPEAT');

       //TreeTop Material
       this.treeTopMterial = new CGFtexture(this.scene, this.treeTopMaterial);
       this.treeTopMaterial = new CGFappearance(this.scene);
       this.treeTopMaterial.setAmbient(1, 1, 1, 1.0);
       this.treeTopMaterial.setDiffuse(1, 1, 1, 1.0);
       this.treeTopMaterial.setSpecular(1, 1, 1, 1.0);
       this.treeTopMaterial.setShininess(10.0);
       this.treeTopMaterial.loadTexture(this.treeTopMaterial);
       this.treeTopMaterial.setTextureWrap('REPEAT','REPEAT');
    }

	display () {

            this.scene.pushMatrix();
            this.treeTopMaterial.apply();
            this.scene.translate(0, this.trunkHeight, 0);
            this.scene.scale(this.treeTopRadius, this.treeTopHeight,this.treeTopRadius);
            this.cone.display();
            this.scene.popMatrix();
        

            this.scene.pushMatrix();
            this.trunkMaterial.apply();
            this.scene.scale(this.trunkRadius, this.trunkHeight,this.trunkRadius);
            this.cylinder.display();
            this.scene.popMatrix();

    }
    
    enableNormalViz() {
        this.cone.enableNormalViz(); 
        this.cylinder.enableNormalViz();
    }

    updateBuffers(complexity){
    }
    
    disableNormalViz() {
        this.cone.disableNormalViz(); 
        this.cylinder.disableNormalViz();
    }   
}
