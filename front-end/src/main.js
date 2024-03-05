import { Router } from "./app/scripts/router.js";
import { WelcomeComponent } from "./app/scripts/welcome";
import { GameComponent } from "./app/scripts/game";
import { ScoreComponent } from "./app/scripts/score";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./app/styles/style.css";

const outlet = document.querySelector("#content-outlet");
const router = new Router(outlet);
router
  .register("", {
    component: WelcomeComponent,
  })
  .register("welcome", {
    component: WelcomeComponent,
  })
  .register("game", {
    component: GameComponent,
  })
  .register("score", {
    component: ScoreComponent,
  });
