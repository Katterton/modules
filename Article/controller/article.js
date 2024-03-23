const Controller = require("../../../src/controller.js");
const fs = require("fs")
class article extends Controller {
    constructor(config, socket, models ,io, name) {
        super(config, socket, models,   io, name);
        this.views = {}
        console.log("article")
    }

}
module.exports = article;