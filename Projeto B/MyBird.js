/**
 * MyBird
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyBird extends CGFobject {
    //constructor(scene, trunkHeight, trunkRadius, treeTopHeight, treeTopRadius, trunkTexture, treeTopTexture) {
    constructor(scene, slices) {
        super(scene);
        this.slices = slices;
        this.initObjects();
        this.initMaterials(scene);
    }

    initObjects() {
        this.body = new MyUnitCubeQuad(this.scene);
        this.nose = new MyPyramid(this.scene, 4);
        this.eye = new MyCylinder(this.scene, 10);
        this.wing = new MyQuad(this.scene);
        this.wingCorner = new MyTriangle(this.scene);
        this.tail = new MyCone(this.scene);

        this.x = 0.0;
        this.y = 0.0;
        this.z = 0.0;
        this.birdSpeed  = 0.0;
        this.birdOrientation = 0.0;
    }

    initMaterials(scene) {
        this.birdFeathersTexture = new CGFappearance(scene);
        this.birdFeathersTexture.setAmbient(0.1, 0.1, 0.1, 1.0);
        this.birdFeathersTexture.setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.birdFeathersTexture.setSpecular(0.0, 0.0, 0.0, 1.0);
        this.birdFeathersTexture.setShininess(1.0);
        this.birdFeathersTexture.loadTexture('images/feathers.jpg');
        this.birdFeathersTexture.setTextureWrap('REPEAT', 'REPEAT');

        //cylinder missing texcoords
        this.birdEyeTexture = new CGFappearance(scene);
        this.birdEyeTexture.setAmbient(0.1, 0.1, 0.1, 1.0);
        this.birdEyeTexture.setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.birdEyeTexture.setSpecular(0.0, 0.0, 0.0, 1.0);
        this.birdEyeTexture.setShininess(1.0);
        this.birdEyeTexture.loadTexture('images/blue.png');
        this.birdEyeTexture.setTextureWrap('REPEAT', 'REPEAT');

        this.birdNoseTexture = new CGFappearance(scene);
        this.birdNoseTexture.setAmbient(0.1, 0.1, 0.1, 1.0);
        this.birdNoseTexture.setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.birdNoseTexture.setSpecular(0.0, 0.0, 0.0, 1.0);
        this.birdNoseTexture.setShininess(1.0);
        this.birdNoseTexture.loadTexture('images/yellow.png');
        this.birdNoseTexture.setTextureWrap('REPEAT', 'REPEAT');

    }

//Cobrir olhos
//Pesquisar Voxel Bird

    display(t) {
      this.scene.pushMatrix();
        //responsible for the up and down movement of the bird as whole
        this.scene.translate(0, Math.cos(t)/2, 0);
        //responsible for the fly around movement of the bird
        this.scene.translate(this.x, this.y, this.z);
        this.scene.rotate(this.birdOrientation, 0, 1, 0);
        //Creates the body of the bird
        this.scene.rotate(3*Math.PI/2, 0, 1, 0);
        this.birdFeathersTexture.apply();
        this.body.display();

        this.scene.pushMatrix();
        this.scene.translate(0.6, 0.6, 0);
        this.body.display();
        this.scene.popMatrix();

        //Creates the nose of the bird
        //this.birdNoseTexture.apply();
        this.scene.pushMatrix();
        this.scene.translate(1.1, 1.1, 0);
        this.scene.rotate(-Math.PI/2, 0, 0, 1);
        this.scene.scale(1/5, 1/5, 1/5);
        this.birdNoseTexture.apply();
        this.nose.display();
        this.scene.popMatrix();

        //Creates the eyes of the bird
        //this.birdEyeTexture.apply();
        this.scene.pushMatrix();
        this.scene.translate(0.8, 1.3,-0.5);
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.scene.scale(1/7, 1/7, 1/7);
        this.eye.display();
        this.scene.popMatrix();

        //this.birdEyeTexture.apply();
        this.scene.pushMatrix();
        this.scene.translate(0.8, 1.3, 0.5 + 1/7);
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.scene.scale(1/7, 1/7, 1/7);
        this.eye.display();
        this.scene.popMatrix()

        //Creates the left wing (relation to the bird)
        this.birdFeathersTexture.apply();
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI / 8 * Math.sin(t), 0, 0, 1);
        this.scene.translate(0, 0.6, -1 + 1/6);
        this.scene.rotate(Math.PI/12, 1, 0, 0);
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.scene.scale(1/1.5, 1/1.5, 1/1.5);
        this.wing.display();
        this.scene.popMatrix();

        //Creates the right wing (relation to the bird)
        this.birdFeathersTexture.apply();
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI / 8 * Math.sin(t), 0, 0, 1);
        this.scene.translate(0, 0.6, 1 - 1/6);
        this.scene.rotate(-Math.PI/12, 1, 0, 0);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.scale(1/1.5, 1/1.5, 1/1.5);
        this.wing.display();
        this.scene.popMatrix()

        //É preciso rever as escalas e ângulos porque não está perfeito!

        //Creates the left wing corner (relation to the bird)
        this.birdFeathersTexture.apply();
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI / 8 * Math.sin(t), 0, 0, 1);
        this.scene.translate(0, 0, -1/1.5 + 0.01);
        this.scene.translate(0, 0.173/2, 0);
        this.scene.translate(0, 0.6, 0);
        this.scene.translate(0, 0, -0.5);
        this.scene.rotate(-Math.PI/4, 0, 1, 0);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.scale(1/1.5, 1/1.5, 1/1.5);
        this.scene.scale(1/3, 1/3, 1/3);
        this.wingCorner.display();
        this.scene.popMatrix();

        //Creates the right wing corner (relation to the bird)
        //this.birdFeathersTexture.apply();
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI / 8 * Math.sin(t), 0, 0, 1);
        this.scene.translate(0, 0, 1/1.5 - 0.01);
        this.scene.translate(0, 0.173/2, 0);
        this.scene.translate(0, 0.6, 0);
        this.scene.translate(0, 0, 0.5);
        this.scene.rotate(Math.PI - Math.PI/4, 0, 1, 0);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.scale(1/1.5, 1/1.5, 1/1.5);
        this.scene.scale(1/3, 1/3, 1/3);
        this.wingCorner.display();
        this.scene.popMatrix();

        //Creates the tail of the bird
        this.scene.pushMatrix();
        this.scene.translate(-1, 0.5, 0);
        this.scene.rotate(-Math.PI/2, 0, 0, 1);
        this.scene.scale(1/2, 1/2, 1/2);
        this.tail.display();
        this.scene.popMatrix();


        this.scene.popMatrix();
    }

    enableNormalViz(){
        this.body.enableNormalViz();
        this.nose.enableNormalViz();
        this.eye.enableNormalViz();
        this.wing.enableNormalViz();
        this.wingCorner.enableNormalViz();
        this.tail.enableNormalViz();
    }


    updateBuffers(complexity){
    }

    disableNormalViz(){
        this.body.disableNormalViz();
        this.nose.disableNormalViz();
        this.eye.disableNormalViz();
        this.wing.disableNormalViz();
        this.wingCorner.disableNormalViz();
        this.tail.disableNormalViz();
    }

    reset() {
            this.x  = 0.0;
            this.y = 0.0;
            this.z = 0.0;
            this.birdSpeed  = 0.0;
            this.birdOrientation = 0.0;
        }

        turn(v){
            this.birdOrientation += v;
        }

        accelaration(v){
            this.birdSpeed += v;
        }

        update(speedFactor){
        this.x = this.x + this.birdSpeed * Math.sin(this.birdOrientation) * speedFactor;
        this.z = this.z + this.birdSpeed * Math.cos(this.birdOrientation) * speedFactor;
        }

}
