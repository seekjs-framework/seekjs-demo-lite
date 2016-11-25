/**
 * Created by likaituan on 15/8/9.
 */

seekjs.config({
    ns:{
        "js.": "/js/",
        "css.": {
            path: "/css/",
            type: ".css"
        }
    }
});

require("css.tag");
require("css.class");

var app = require("sys.app");

app.viewEx = require("js.view");
app.pipeEx = require("js.pipe");

app.config({
    page: `/pages/`
});

app.init("home");
