/**
 * MyBranch
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyBranch extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initObjects();
		this.initMaterials();
    }

    initObjects() {
        this.branch = new MyCylinder(this.scene, 10);
    }

    initMaterials() {
        this.materials = [];

        var mat = new CGFappearance(this.scene);
        mat.setAmbient(1.0, 1.0, 1.0, 1.0);
        mat.setSpecular(1.0, 1.0, 1.0, 1.0);
        mat.setDiffuse(0.36, 0.25, 0.2, 1.0);
        mat.setShininess(10.0);
        this.materials.push(mat);

    }

    display() {
        this.materials[0].apply();
        this.branch.display();
    }
}
