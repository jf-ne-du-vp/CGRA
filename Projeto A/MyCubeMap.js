/**
 * MyCubeMap
 * @constructor
 * @param scene - Reference to MyScene object
 */
/*class MyCubeMap extends CGFobject {
	constructor(scene) {
        super(scene); 
        this.quad = new MyQuad(this.scene);
        this.initMaterials();
    }
    
	initMaterials() {
    this.materialBack = new CGFappearance(this.scene);
    this.materialBack.setAmbient(2, 2, 2, 1);
    this.materialBack.loadTexture('images/roof.jpg');
    this.materialBack.setTextureWrap('REPEAT', 'REPEAT');

    this.materialFront = new CGFappearance(this.scene);
    this.materialFront.setAmbient(2, 2, 2, 1);
    this.materialFront.loadTexture('images/wall.jpg');
    this.materialFront.setTextureWrap('REPEAT', 'REPEAT');

    this.materialLeft = new CGFappearance(this.scene);
    this.materialLeft.setAmbient(2, 2, 2, 1);
    this.materialLeft.loadTexture('images/roof.jpg');
    this.materialLeft.setTextureWrap('REPEAT', 'REPEAT');

    this.materialRight = new CGFappearance(this.scene);
    this.materialRight.setAmbient(2, 2, 2, 1);
    this.materialRight.loadTexture('images/roof.jpg');
    this.materialRight.setTextureWrap('REPEAT', 'REPEAT');
      
    this.materialRoof = new CGFappearance(this.scene);
    this.materialRoof.setAmbient(2, 2, 2, 1);
    this.materialRoof.loadTexture('images/wall.jpg');
    this.materialRoof.setTextureWrap('REPEAT', 'REPEAT');

    this.materialBottom = new CGFappearance(this.scene);
    this.materialBottom.setAmbient(2, 2, 2, 1);
    this.materialBottom.loadTexture('images/wall.jpg');
    this.materialBottom.setTextureWrap('REPEAT', 'REPEAT');
    }


display(){

    this.scene.pushMatrix();

    this.scene.scale(50,50,50);

    //Top
    this.materialRight.apply();
    this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
    this.scene.pushMatrix();
    this.scene.translate(0, 0, 0.5);
    this.scene.rotate(Math.PI, 0, 0, 1);
    this.scene.rotate(Math.PI, 1, 0, 0);
    this.quad.display();
    this.scene.popMatrix();

    //Sides
    this.materialBottom.apply();
    this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
    this.scene.pushMatrix();
    this.scene.translate(0, -0.5, 0);
    this.scene.rotate(Math.PI/2, 1, 0, 0);
    this.scene.rotate(Math.PI, 1, 0, 0);
    this.quad.display();
    this.scene.popMatrix();

    this.materialBack.apply();
    this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
    this.scene.pushMatrix();
    this.scene.rotate(Math.PI/2, 1, 0, 0);
    this.scene.rotate(Math.PI/2, 0, 0, 1);
    this.scene.translate(0, -0.5, 0);
    this.scene.rotate(Math.PI/2, 1, 0, 0);
    this.scene.rotate(Math.PI, 1, 0, 0);
    this.quad.display();
    this.scene.popMatrix();

    this.materialRoof.apply();
    this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
    this.scene.pushMatrix();
    this.scene.rotate(Math.PI, 0, 0, 1);
    this.scene.translate(0, -0.5, 0);
    this.scene.rotate(Math.PI/2, 1, 0, 0);
    this.scene.rotate(Math.PI, 1, 0, 0);
    this.quad.display();
    this.scene.popMatrix();

    this.materialFront.apply();
    this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
    this.scene.pushMatrix();
    this.scene.rotate(Math.PI/2, 1, 0, 0);
    this.scene.rotate(Math.PI*3/2, 0, 0, 1);
    this.scene.translate(0, -0.5, 0);
    this.scene.rotate(Math.PI/2, 1, 0, 0);
    this.scene.rotate(Math.PI, 1, 0, 0);
    this.quad.display();
    this.scene.popMatrix();

    //Bot
    this.materialLeft.apply();
    this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
    this.scene.pushMatrix();
    this.scene.rotate(Math.PI, 1, 0, 0);
    this.scene.translate(0, 0, 0.5);
    this.scene.rotate(Math.PI, 1, 0, 0);
    this.quad.display();
    this.scene.popMatrix();

    this.scene.popMatrix();

  }
}*/

/**
 * MyCubeMap
 * @constructor
 * @param scene - Reference to MyScene object
 */

var a = 30;
class MyCubeMap extends CGFobject
{
    constructor(scene)
    {
        super(scene);
        this.initBuffers();
    }
    initBuffers()
    {
        this.vertices = 
        [
           -a, -a,   a,	      //0
            a, -a,   a,	      //1
           -a,  a,   a,	      //2
            a,  a,   a,    	  //3
           -a, -a,  -a,       //4
            a, -a,  -a,       //5
           -a,  a,  -a,       //6
            a,  a,  -a,       //7

           -a, -a,   a,	      //0
            a, -a,   a,	      //1
           -a,  a,   a,	      //2
            a,  a,   a,    	  //3
           -a, -a,  -a,       //4
            a, -a,  -a,       //5
           -a,  a,  -a,       //6
            a,  a,  -a,       //7

           -a, -a,   a,	      //0
            a, -a,   a,	      //1
           -a,  a,   a,	      //2
            a,  a,   a,    	  //3
           -a, -a,  -a,       //4
            a, -a,  -a,       //5
           -a,  a,  -a,       //6
            a,  a,  -a,       //7
        ];
        
        //Counter-clockwise reference of vertices
        this.indices = 
        [
             4, 1,   5,          //Face A
             4, 0,   1,
             3, 2,   6,          //Face B
             7, 3,   6,
            11, 9,  10,          //Face C
             9, 8,  10,
            23, 21, 19,          //Face D
            21, 17, 19,
            14, 13, 15,          //Face E
            14, 12, 13,
            18, 20, 22,          //Face F
            18, 16, 20,
            
            
        ];
        
        this.normals = 
        [
          1, 1,-1,
         -1, 1,-1,
          1,-1,-1,
         -1,-1,-1, 
          1, 1, 1,
         -1, 1, 1,
          1,-1, 1,
         -1,-1, 1,

          1, 1,-1,
         -1, 1,-1,
          1,-1,-1,
         -1,-1,-1, 
          1, 1, 1,
         -1, 1, 1,
          1,-1, 1,
         -1,-1, 1,
         
          1, 1,-1,
         -1, 1,-1,
          1,-1,-1,
         -1,-1,-1, 
          1, 1, 1,
         -1, 1, 1,
          1,-1, 1,
         -1,-1, 1,
        ];

        
        this.texCoords =
        [
            1/4,    1,       //0
            2/4,    1,       //1
            1/4,    0,       //2
            2/4,    0,       //3
            1/4,  2/3,       //4
            2/4,  2/3,       //5
            1/4,  1/3,       //6
            2/4,  1/3,       //7
            1,    2/3,       //0
            3/4,  2/3,       //1
            1,    1/3,       //2
            3/4,  1/3,       //3
            1/4,  2/3,       //4
            2/4,  2/3,       //5
            1/4,  1/3,       //6
            2/4,  1/3,       //7
              0,  2/3,       //0
            3/4,  2/3,       //1
              0,  1/3,       //2
            3/4,  1/3,       //3
            1/4,  2/3,       //4
            2/4,  2/3,       //5
            1/4,  1/3,       //6
            2/4,  1/3,       //7 

        ];
        
        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
    enableNormalViz()
    {
    }
}