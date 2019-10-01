/**
* MyInterface
* @constructor
*/
class MyInterface extends CGFinterface {
    constructor() {
        super();
    }

    init(application) {
        // call CGFinterface init
        super.init(application);
        // init GUI. For more information on the methods, check:
        // http://workshop.chromeexperiments.com/examples/gui
        this.gui = new dat.GUI();

        this.gui.add(this.scene, 'displayTree').name('Display Tree');
        this.gui.add(this.scene, 'displayHouse').name('Display House');
        this.gui.add(this.scene, 'displayHill').name('Display Hill');
        this.gui.add(this.scene, 'displayTreeGroupPatch').name('Display TreeGroupPatch');
        this.gui.add(this.scene, 'displayTreeRowPatch').name('Display TreeRowPatch');
        this.gui.add(this.scene, 'scaleFactor', 0.1, 5).name('Scale Factor');
        this.gui.add(this.scene, 'show_textures').name('Show textures');
        var obj = this;

        return true;
    }
}