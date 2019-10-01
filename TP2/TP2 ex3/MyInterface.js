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
        
        var obj = this;

        //Checkbox element in GUI
        this.gui.add(this.scene, 'displayAxis').name('Display Axis');

        //Slider element in GUI
        this.gui.add(this.scene, 'scaleFactor', 0.1, 5).name('Scale Factor');

        /*//checkbox Triangle
        this.gui.add(this.scene,'displayTriangle').name('Display Triangle');

        //checkbox Diamond
        this.gui.add(this.scene,'displayDiamond').name('Display Diamond');

        //checkbox Parallelogram
        this.gui.add(this.scene,'displayParallelogram').name('Display Parallelogram');

        //checkbox MyTriangleSmall
        this.gui.add(this.scene,'displayTriangleSmall').name('Display MyTringleSmall');

        //checkbox MyTriangleBig
        this.gui.add(this.scene,'displayTriangleBig').name('Display MyTriangleBig');

        //checkbox MysegTriangleBig
        this.gui.add(this.scene,'displaysegTriangleBig').name('Display MysegTriangleBig');

         //checkbox MysegTriangleSmall
         this.gui.add(this.scene,'displaysegTriangleSmall').name('Display MysegTringleSmall');*/

        //checkbox MyTangram
        this.gui.add(this.scene,'displayTangram').name('Display Tangram');

        //checkbox MyUnitCube
        this.gui.add(this.scene,'displayUnitCube').name('Display UnitCube');


        return true;
    }
}