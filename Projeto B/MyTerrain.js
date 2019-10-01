/**
* MyTerrain
* @constructor
*/
class MyTerrain extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers();
    }
    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords = [];

        this.plane = new Plane(this.scene, 32)

        this.shader = new CGFshader(this.scene.gl, "shaders/terrain.vert", "shaders/terrain.frag");

        this.terrainMap = new CGFtexture(this.scene, "images/heightmap.jpg");
        this.terrainTex = new CGFtexture(this.scene, "images/terrain.jpg");
        this.altimetry = new CGFtexture(this.scene, "images/altimetry.png");
        
        this.shader.setUniformsValues({ uSampler3: 1});
        this.shader.setUniformsValues({ uSampler2: 1 });
        this.shader.setUniformsValues({ uSampler: 1 });

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
    
    display() {
        this.scene.setActiveShader(this.shader);

        this.altimetry.bind(2);
        this.terrainMap.bind(1);
        this.terrainTex.bind(0);

		this.plane.display();

		// restore default shader (will be needed for drawing the axis in next frame)
		this.scene.setActiveShader(this.scene.defaultShader);
	}
}