"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readHTMLFile = void 0;
const fs = require("fs/promises");
const Handlebars = require("handlebars");
const readHTMLFile = (path, replacements) => {
    return fs.readFile(path, { encoding: 'utf-8' }).then((html) => {
        const template = Handlebars.compile(html);
        const htmlToSend = template(replacements);
        return htmlToSend;
    });
};
exports.readHTMLFile = readHTMLFile;
//# sourceMappingURL=readHtml.js.map