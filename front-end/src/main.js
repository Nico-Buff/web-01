import { Router } from "./app/scripts/router.js";
import { WelcomeComponent } from "./app/components/welcome/welcome.component";
import { GameComponent } from "./app/components/game/game.component";
import { ScoreComponent } from "./app/components/score/score.component";
import { NavbarComponent } from "./app/components/navbar/navbar.component";
import { FooterComponent } from "./app/components/footer/footer.component.js";

customElements.define("my-footer", FooterComponent);
customElements.define("my-navbar", NavbarComponent);

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
