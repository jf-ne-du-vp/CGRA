/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.prism = new MyPrism(this, 10);
        this.cylinder = new MyCylinder(this, 10);
        this.cone = new MyCone(this, 10, 1);
        this.tree = new MyTree(this,2, 1, 2, 1.5, 'images/trunktexture.png', 'images/treetoptexture.png');
        this.house = new MyHouse(this, 10);
        this.hill = new MyVoxelHill(this, 3);
        this.cubemap = new MyCubeMap(this);
        this.quad = new MyQuad(this);
        this.treeGroupPatch = new MyTreeGroupPatch(this,2, 1, 2, 1.5, 'images/trunktexture.png', 'images/treetoptexture.png');
        this.treeRowPatch = new MyTreeRowPatch(this, 2, 1, 2, 1.5, 'images/trunktexture.png', 'images/treetoptexture.png');

        //Objects connected to MyInterface
        this.objects = [this.prism, this.cylinder];

        //Initialize Materials
        this.cube = new CGFappearance(this);
        this.cube.setAmbient(1, 1, 1, 1);
        this.cube.setDiffuse(1, 1, 1, 1);
        this.cube.setSpecular(1, 1, 1, 1);
        this.cube.setShininess(10);
        this.cube.loadTexture('images/skybox.png');
        this.cube.setTextureWrap('REPEAT', 'REPEAT');

        this.ground = new CGFappearance(this);
        this.ground.setAmbient(1, 1, 1, 1);
        this.ground.setDiffuse(1, 1, 1, 1);
        this.ground.setSpecular(1, 1, 1, 1);
        this.ground.setShininess(10);
        this.ground.loadTexture('images/relva.png');
        this.ground.setTextureWrap('REPEAT', 'REPEAT');

        
        this.displayTree = false;
        this.displayHouse = false;
        this.displayHill = false;
        this.displayTreeGroupPatch = false;
        this.displayTreeRowPatch = false;
        
        

        this.show_textures = true;
        this.scaleFactor = 0.5;
    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(15, 15, 15), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();

        // Draw axis
        this.axis.display();

        //Apply default appearance
        this.setDefaultAppearance();

        this.scale(this.scaleFactor, this.scaleFactor, this.scaleFactor);

        this.enableTextures(this.show_textures);

        // ---- BEGIN Primitive drawing section
        if(this.displayPrism)
            this.prism.display();

        if(this.displayCylinder)
            this.cylinder.display();

        if(this.displayTree)
            this.tree.display();

        if(this.displayCone)
            this.cone.display();

        if(this.displayHouse)
           this.house.display();

        if(this.displayHill)
            this.hill.display();

                this.pushMatrix();
                this.scale(1,1,1);
                this.cube.apply();
                this.cubemap.display();
                this.popMatrix();


        this.pushMatrix();
        this.rotate(-Math.PI/2, 1, 0, 0);
        this.scale(60,60,60);
        this.ground.apply();
        this.quad.display();
        this.popMatrix();



        if(this.displayTreeGroupPatch)
            this.treeGroupPatch.display();

        if(this.displayTreeRowPatch)
            this.treeRowPatch.display();
            
        // ---- END Primitive drawing section
    }
}