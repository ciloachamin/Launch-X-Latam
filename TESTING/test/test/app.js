let expect = require("chai").expect;
let converter= require("../app.js")

describe("Color Code Converter", function(){
    describe("RGB to HEX conversion",function(){
        it("converts basic color", function(){
            let redHex = converter.rgbToHex(255,0,0);
            let greenHex =converter.rgbToHex(0,255,0);
            let blueHex =converter.rgbToHex(0,0,255);

            expect(redHex).to.equal("ff0000");
            expect(greenHex).to.equal("00ff00");
            expect(blueHex).to.equal("0000ff");
            
        });

    });

    describe("HEX to RGB conversion",function(){
        if("converts basic color", function(){
            let redRgb = converter.hexToRgb("ff0000");
            let greenRgb =converter.hexToRgb("00ff00");
            let blueRgb =converter.hexToRgb("0000ff");

            expect(redRgb).to.deep.equal([255,0,0]);
            expect(greenRgb).to.deep.equal([0,255,0]);
            expect(blueRgb).to.deep.equal([0,0,255]);
        });
    });
});