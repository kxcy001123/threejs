import { initThree } from "./example/chapter1/chapter1_1";
initThree();

if (module.hot) {
  module.hot.accept("./example/chapter1/chapter1_1", app => {
    console.log(app);
    initThree();
  });
}
