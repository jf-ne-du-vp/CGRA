/**
 * MyColumn
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyColumn extends CGFobject {
    constructor(scene, slices, height) {
        super(scene);
        this.slices = slices;
        this.height = height;
        this.initBuffers();
    }

    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];

        var ang = 0;
        var alphaAng = 2 * Math.PI / this.slices;

        for (var i = 0; i <= 6 * this.slices; i++) {
            // All vertices have to be declared for a given face
            // even if they are shared with others, as the normals 
            // in each face will be different

            var sa = Math.sin(ang);
            var saa = Math.sin(ang + alphaAng);
            var ca = Math.cos(ang);
            var caa = Math.cos(ang + alphaAng);

            this.vertices.push(0, 0, 0);        //0
            this.vertices.push(ca, 0, -sa);     //1
            this.vertices.push(caa, 0, -saa);   //2

            this.vertices.push(0, this.height, 0);        //3
            this.vertices.push(ca, this.height, -sa);     //4
            this.vertices.push(caa, this.height, -saa);   //5

            // triangle normal computed by cross product of two edges
            var normal = [
                saa - sa,
                0,
                caa - ca
            ];

            // normalization
            var nsize = Math.sqrt(
                normal[0] * normal[0] +
                normal[1] * normal[1] +
                normal[2] * normal[2]
            );

            normal[0] /= nsize;
            normal[1] /= nsize;
            normal[2] /= nsize;

            // push normal once for each vertex of this triangle
            this.normals.push(...normal);
            this.normals.push(...normal);
            this.normals.push(...normal);
            this.normals.push(...normal);
            this.normals.push(...normal);
            this.normals.push(...normal);

            for (var k = 0; k < 50; k++) {
                if (i == k * 6 + 1) {
                    this.indices.push(i, i + 1, i + 4);
                    this.indices.push(i, i + 4, i + 1);
                    this.indices.push(i, i + 4, i + 3);
                    this.indices.push(i, i + 3, i + 4);
                }
            }

            ang += alphaAng;
        }

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }

    updateBuffers(complexity) {
        this.slices = 3 + Math.round(9 * complexity); //complexity varies 0-1, so slices varies 3-12

        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}