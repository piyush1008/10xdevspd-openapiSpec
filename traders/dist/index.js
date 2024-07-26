"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generated_1 = require("./generated");
const main = async () => {
    const getuser = await generated_1.DefaultService.getUsers("1212");
    console.log(getuser);
};
main();
