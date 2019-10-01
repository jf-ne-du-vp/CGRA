/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeQuad extends CGFobject {
	constructor(scene) {
        super(scene); 
        this.initObjects();
        this.initMaterials(scene);
    }
    
	initObjects() {
        this.quad = new MyQuad(this.scene);
    }

    initMaterials(scene) {
        this.birdFeathersTexture = new CGFappearance(scene);
        this.birdFeathersTexture.setAmbient(0.1, 0.1, 0.1, 1.0);
        this.birdFeathersTexture.setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.birdFeathersTexture.setSpecular(0.0, 0.0, 0.0, 1.0);
        this.birdFeathersTexture.setShininess(1.0);
        this.birdFeathersTexture.loadTexture('images/feathers.jpg');
        this.birdFeathersTexture.setTextureWrap('REPEAT', 'REPEAT');
    }

    display() {
        this.scene.pushMatrix();
        this.scene.translate(0.5,0.5, 0);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
       // this.birdFeathersTexture.apply();
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.5, 0.5, 0);
        this.scene.rotate(-Math.PI/2, 0, 1, 0);
        //this.birdFeathersTexture.apply();
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 1, 0);
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        //this.birdFeathersTexture.apply();
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0, 0);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        //this.birdFeathersTexture.apply();
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, 0.5);
        //this.birdFeathersTexture.apply();
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, -0.5);
        this.scene.rotate(Math.PI, 0, 1, 0);
        //this.birdFeathersTexture.apply();
        this.quad.display();
        this.scene.popMatrix();
    }
}