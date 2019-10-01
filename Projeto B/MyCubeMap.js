/**
 * MyCubeMap
 * @constructor
 * @param scene - Reference to MyScene object
 */

var a = 30.0;
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