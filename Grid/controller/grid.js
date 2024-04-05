const Controller = require("../../../src/controller.js");
const fs = require("fs")
class grid extends Controller {
    constructor(config, socket, models ,io, name) {
        super(config, socket, models,   io, name);
        this.views = {}
        console.log("grid")
    }

}
module.exports = grid;