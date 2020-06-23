import fs from 'fs';
var controller = {};

// 获取除index外的controller
const getController = () => {
  let dir = __dirname;
  let files = fs.readdirSync(dir);
  let index = files.indexOf('index.js');
  files.splice(index, 1);
  files = files.forEach((item) => {
    controller = Object.assign(controller, require('./' + item));
  });
};
getController();

export default controller;
