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
        this.enableTextures(true);
        this.setUpdatePeriod(50);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.lightning = new MyLightning(this);
        this.plane = new Plane(this, 32);
        this.house = new MyHouse(this, 20);
        this.bird = new MyBird(this, 10);
        this.cubemap = new MyCubeMap(this);
        this.terrain = new MyTerrain(this);
        this.treeBranch = new MyTreeBranch(this);
        this.nest = new MyNest(this);

        //Initialize Materials
        this.cube = new CGFappearance(this);
        this.cube.setAmbient(1, 1, 1, 1);
        this.cube.setDiffuse(1, 1, 1, 1);
        this.cube.setSpecular(1, 1, 1, 1);
        this.cube.setShininess(10);
        this.cube.loadTexture('images/skybox.png');
        this.cube.setTextureWrap('REPEAT', 'REPEAT');

        //Creates the tree
        this.axiom = "X";
        this.ruleF = "FF";
        this.ruleX = "F[-X][X]F[-X]+FX";
        this.ruleX1 = "F[-X][X]F[-X]+X";
        this.ruleX2 = "F[-X][X]+X";
        this.ruleX3 = "F[+X]-X";
        this.ruleX4 = "F[/X][X]F[\\X]+X";
        this.ruleX5 = "F[\X][X]/X";
        this.ruleX6 = "F[/X]\X";
        this.ruleX7 = "F[^X][X]F[&X]^X";
        this.ruleX8 = "F[^X]&X";
        this.ruleX9 = " F[&X]^X";
        this.angle = 25.0;
        this.iterations = 3;
        this.scaleFactor = 0.5;
        this.tree = new MyLSPlant(this);

        this.doGenerate = function () {
            this.tree.generate(
                this.axiom,
                {
                    "F": [ this.ruleF ],
                    "X": [ this.ruleX1, this.ruleX2, this.ruleX3, this.ruleX4, this.ruleX5, this.ruleX6, this.ruleX7, this.ruleX8, this.ruleX9 ]
                },
                this.angle,
                this.iterations,
                this.scaleFactor
            );
            this.lightning.generate(
                this.axiom,
                {
                    "F": [ this.ruleF ],
                    "X": [ this.ruleX ]
                },
                this.angle,
                this.iterations,
                this.scaleFactor
            );

        }

        this.doGenerate();

        //To animation related to time
        this.timeFactor = 0;

        this.accelerationFactor = 0.1;
        this.turnFactor = Math.PI/8;

        //Objects connected to MyInterface
        this.birdScaleFactor = 1.0;
        this.sceneScaleFactor = 1.0;
        this.speedFactor = 1.0;
    }

    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }

    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(45, 45, 45), vec3.fromValues(0, 0, 0));
    }

    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }

    checkKeys() {
      var text="Keys pressed: ";
      var keysPressed=false;
      this.LPressed = false;
      // Check for key codes e.g. in https://keycode.info/
      if (this.gui.isKeyPressed("KeyW")) {
          text+=" W ";
          keysPressed=true;
          this.bird.accelaration(this.accelerationFactor);
      }
      if (this.gui.isKeyPressed("KeyS")) {
          text+=" S ";
          keysPressed=true;
          this.bird.accelaration(-this.accelerationFactor);
      }
      if (this.gui.isKeyPressed("KeyA")) {
          text+=" A ";
          keysPressed=true;
          this.bird.turn(this.turnFactor * this.speedFactor);
      }
      if (this.gui.isKeyPressed("KeyD")) {
          text+=" D ";
          keysPressed=true;
          this.bird.turn(-this.turnFactor * this.speedFactor);
      }
      if (this.gui.isKeyPressed("KeyR")) {
          text+=" R ";
          keysPressed=true;
          this.bird.reset();
      }
      if (this.gui.isKeyPressed("KeyL")) {
          text+=" L ";
          keysPressed=true;
          this.LPressed = true;
      }
      if (keysPressed)
          console.log(text);
    }

    update(t){
      this.checkKeys();
      this.bird.update(this.speedFactor);
      this.timeFactor = t * 2 * Math.PI /1000;
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

      this.scale(this.sceneScaleFactor,this.sceneScaleFactor,this.sceneScaleFactor);

      // ---- BEGIN Primitive drawing section
      //Draws the lightning
      if(this.LPressed = true)
      {
      this.pushMatrix();
      this.scale(2, 2, 2);
      this.translate(0, 10, 0);
      this.rotate(Math.PI, 0, 0, 1);
      this.lightning.display();
      this.popMatrix();
      }


      this.pushMatrix();
      this.rotate(-0.5*Math.PI, 1, 0, 0);
      this.scale(60, 60, 1);
      this.terrain.display();
      //this.plane.display();
      this.popMatrix();

      //Draws the house
      this.pushMatrix();
      this.scale(0.5,0.5,0.5);
      this.translate(10.0, 5.0, -14);
      this.house.display();
      this.popMatrix();

      //Draws the bird
      this.pushMatrix();
      this.translate(0.0, 10.0, 0.0);
      this.scale(this.birdScaleFactor, this.birdScaleFactor, this.birdScaleFactor);
      this.bird.display(this.timeFactor*this.speedFactor);
      this.popMatrix();
      // ---- END Primitive drawing section

      this.pushMatrix();
      this.scale(1,1,1);
      this.cube.apply();
      this.cubemap.display();
      this.popMatrix();

      //Draws the trees in the scene
      this.pushMatrix();
      this.translate(-6, 3, 7);
      this.tree.display();
      this.popMatrix();

      this.pushMatrix();
      this.translate(-3.5, 3, 8);
      this.tree.display();
      this.popMatrix();

      this.pushMatrix();
      this.translate(-6.5, 3, 10);
      this.tree.display();
      this.popMatrix();

      this.pushMatrix();
      this.translate(-3, 3, 10);
      this.tree.display();
      this.popMatrix();

      //Draws the branchs

      this.pushMatrix();
      this.scale(0.3, 0.3, 0.3);
      this.translate(45, 11, 30);
      this.treeBranch.display();
      this.popMatrix();

      this.pushMatrix();
      this.scale(0.3, 0.3, 0.3);
      this.translate(35, 10, -15);
      this.treeBranch.display();
      this.popMatrix();

      this.pushMatrix();
      this.scale(0.3, 0.3, 0.3);
      this.translate(-30, 10, -15);
      this.treeBranch.display();
      this.popMatrix();

      this.pushMatrix();
      this.scale(0.3, 0.3, 0.3);
      this.translate(10, 10, -50);
      this.treeBranch.display();
      this.popMatrix();

      //Draws the nest
      this.nest.display();
    }
}
