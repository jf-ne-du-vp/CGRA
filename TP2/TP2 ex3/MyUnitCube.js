/**
 * MyUnitCube
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			0.5,-0.5,0.5,		//0
			0.5,-0.5,-0.5,		//1
			-0.5,-0.5,-0.5,		//2
			-0.5,-0.5,0.5,		//3
			0.5,0.5,0.5, 		//4
			0.5,0.5,-0.5,		//5
			-0.5,0.5,-0.5,		//6
			-0.5,0.5,0.5,		//7
		];

		//Counter-clockwise reference of vertices
		this.indices = [
		  //face x positive
		  0,1,5,
		  5,4,0,

		  //face z negative
		  2,6,5,
		  5,1,2,

		  //face x negative
		  7,6,2,
		  2,3,7,

		  //face z positive
		  0,4,7,
		  7,3,0,

	      //face y positive
		  4,5,6,
		  6,7,4,

		  //face y negative
		  2,1,0,
		  0,3,2
		];
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}