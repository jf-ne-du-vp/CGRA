/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeQuad extends CGFobject {
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
        this.materialIDs = {
            'side': 0, 
            'top': 1, 
            'bottom': 2 };
        
        for (let index = 0; index < 3; index++) {
            var mat1 = new CGFappearance(this.scene);
            mat1.setAmbient(1.0, 1.0, 1.0, 1.0);
            mat1.setSpecular(1.0, 1.0, 1.0, 1.0);
            mat1.setDiffuse(1.0, 1.0, 1.0, 1.0);
            mat1.setShininess(10.0);
            mat1.loadTexture('images/mineSide.jpg');
            mat1.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
            this.materials.push(mat1);

            var mat2 = new CGFappearance(this.scene);
            mat2.setAmbient(1.0, 1.0, 1.0, 1.0);
            mat2.setSpecular(1.0, 1.0, 1.0, 1.0);
            mat2.setDiffuse(1.0, 1.0, 1.0, 1.0);
            mat2.setShininess(10.0);
            mat2.loadTexture('images/mineSide.jpg');
            mat2.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
            this.materials.push(mat2);

            var mat3 = new CGFappearance(this.scene);
            mat3.setAmbient(1.0, 1.0, 1.0, 1.0);
            mat3.setSpecular(1.0, 1.0, 1.0, 1.0);
            mat3.setDiffuse(1.0, 1.0, 1.0, 1.0);
            mat3.setShininess(10.0);
            mat3.loadTexture('images/mineTop.jpg');
            mat3.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
            this.materials.push(mat3);
        }
    }

    display() {
        this.scene.pushMatrix();
        this.scene.translate(0.5,0.5, 0);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.materials[this.materialIDs["side"]].apply();
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.5, 0.5, 0);
        this.scene.rotate(-Math.PI/2, 0, 1, 0);
        this.materials[this.materialIDs["side"]].apply();
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 1, 0);
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.materials[this.materialIDs["top"]].apply();
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0, 0);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.materials[this.materialIDs["bottom"]].apply();
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, 0.5);
        this.materials[this.materialIDs["side"]].apply();
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, -0.5);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.materials[this.materialIDs["side"]].apply();
        this.quad.display();
        this.scene.popMatrix();
    }
}