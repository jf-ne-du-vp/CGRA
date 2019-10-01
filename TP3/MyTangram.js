/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
	constructor(scene) {
        super(scene); 
        this.initObjects();
        this.initMaterials();
    }
    
	initObjects() {
        this.diamond = new MyDiamond(this.scene);
        this.parallelogram = new MyParallelogram(this.scene);
        this.segtrianglebig = new MysegTriangleBig(this.scene);
        this.segtrianglesmall = new MysegTriangleSmall(this.scene);
        this.triangle = new MyTriangle(this.scene);
        this.trianglebig = new MyTriangleBig(this.scene);
        this.trianglesmall = new MyTriangleSmall(this.scene);
    }

    initMaterials(){
        this.materials = [];
        this.materialIDs = {
            'triangle': 0, 
            'parallelogram': 1, 
            'segTriangleSmall': 2, 
            'triangleSmall' : 3, 
            'segTriangleBig': 4,
            'triangleBig': 5,
            'diamond': 6 };

        for (let index = 0; index < 7; index++) {
            var mat = new CGFappearance(this.scene);
            mat.setAmbient(0.0, 0.0, 0.0, 1.0);
            mat.setSpecular(0.8, 0.8, 0.8, 1.0);
            mat.setShininess(10.0);
            this.materials.push(mat);}
    

    this.materials[this.materialIDs["triangle"]].setDiffuse(1,0.608,0.812);
    this.materials[this.materialIDs["parallelogram"]].setDiffuse(1,1,0);
    this.materials[this.materialIDs["segTriangleSmall"]].setDiffuse(1, 0.106, 0.106);
    this.materials[this.materialIDs["triangleSmall"]].setDiffuse(0.588, 0.314, 0.745);
    this.materials[this.materialIDs["segTriangleBig"]].setDiffuse(1, 0.608, 0);
    this.materials[this.materialIDs["triangleBig"]].setDiffuse(0, 0.608, 1);
    this.materials[this.materialIDs["diamond"]].setDiffuse(0, 1, 0,1);

    }

    display() {

        this.scene.pushMatrix();
        this.scene.translate(Math.sqrt(8)/2, 0, 0);
        this.scene.rotate(-3*Math.PI/4,0,0,1);
        this.materials[this.materialIDs["triangle"]].apply();
        this.triangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(Math.sqrt(8),(-Math.sqrt(8))/2,0);
        this.scene.rotate(-3*Math.PI/4,0,0,1);
        this.scene.scale(1,-1,1);
        this.materials[this.materialIDs["parallelogram"]].apply();
        this.parallelogram.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(Math.sqrt(8)*0.75,-0.71,0);
        this.scene.rotate(-3*Math.PI/4,0,0,1);
        this.materials[this.materialIDs["segTriangleSmall"]].apply();
        this.segtrianglesmall.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.45,-0.45,0,0);
        this.scene.rotate(Math.PI/4,0,0,1);
        this.materials[this.materialIDs["triangleSmall"]].apply();
        this.trianglesmall.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/4,0,0,1);
        this.scene.translate(0,-2,0);
        this.materials[this.materialIDs["segTriangleBig"]].apply();
        this.segtrianglebig.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(-3*Math.PI/4,0,0,1);
        this.scene.translate(2,0,0);
        this.materials[this.materialIDs["triangleBig"]].apply();
        this.trianglebig.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate((Math.sqrt(8)/2)*0.75,(Math.sqrt(2)+1)*0.85,0);
        //this.materials[this.materialIDs["diamond"]].apply();
        this.scene.customMaterial.apply();
        this.diamond.display();
        this.scene.popMatrix();
    }
    
        
    enableNormalViz(){
        this.triangle.enableNormalViz();
        this.parallelogram.enableNormalViz();
        this.segtrianglebig.enableNormalViz();
        this.segtrianglesmall.enableNormalViz();
        this.trianglesmall.enableNormalViz();
        this.trianglebig.enableNormalViz();
        this.diamond.enableNormalViz();
    }


    updateBuffers(complexity){
    }

    disableNormalViz(){
        this.triangle.disableNormalViz();
        this.parallelogram.disableNormalViz();
        this.segtrianglebig.disableNormalViz();
        this.segtrianglesmall.disableNormalViz();
        this.trianglesmall.disableNormalViz();
        this.trianglebig.disableNormalViz();
        this.diamond.disableNormalViz();
    }
}