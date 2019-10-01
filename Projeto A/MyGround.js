/**
 * MyGround
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyGround extends CGFobject {
	constructor(scene) {
        super(scene); 
        this.initObjects();
        this.initMaterials();
    }
    
	initObjects() {
        this.quad = new MyQuad(this.scene);
    }

    initMaterials() {
        this.materials = [];
       
        
            this.materialGrass = new CGFappearance(this.scene);
            this.relva.setAmbient(1.0, 1.0, 1.0, 1.0);
            this.relva.setSpecular(1.0, 1.0, 1.0, 1.0);
            this.relva.setDiffuse(1.0, 1.0, 1.0, 1.0);
            this.relva.setShininess(10.0);
            this.relva.loadTexture('images/relva.png');
            this.relva.setTextureWrap('REPEAT', 'REPEAT');
            

        }
    

    display() {
     
        this.scene.pushMatrix();
        this.scene.translate(0, 0, 0);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.materials.relva();
        this.quad.display();
        this.scene.popMatrix();

    }
}