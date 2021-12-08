const gh = require("gh-pages");

gh.publish("dist", () => console.log("done"));