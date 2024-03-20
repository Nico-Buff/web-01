import template from "./card.component.html";
import { Component } from "../../../scripts/component"; 

/* class CardComponent constructor */
export class CardComponent extends Component {
    constructor(id){
      super(template)
       // is this card flipped?
      this._flipped = false;

      // has the matching card has been discovered already?
      this.matched = false;
        
      this._elt = document.createElement("div");
      this._elt.innerHTML = this.template;
      this._elt = this._elt.firstElementChild;
      this._id = id;

      this._imageElt = this.getElement().querySelector(".card-wrapper");
      this._imageElt.querySelector("img.front-face").src =
        CARDS_IMAGE[this._id + 1];
      this._imageElt.querySelector("img.back-face").src = CARDS_IMAGE[0];
    }

    /* method CardComponent.flip */
    flip(){
      this._imageElt.classList.toggle("flip");
      this._flipped = !this._flipped;
    }

    /* method CardComponent.equals */
    equals(card){
      return card._id === this._id;
    }

    get flipped(){
      return this._flipped
    }

    /* method CardComponent.getElement */
    getElement(){
      return this._elt;
    }
  }

  export const CARDS_IMAGE = [
    "/src/app/components/game/card/assets/back.png",
    "/src/app/components/game/card/assets/card-0.png",
    "/src/app/components/game/card/assets/card-1.png",
    "/src/app/components/game/card/assets/card-2.png",
    "/src/app/components/game/card/assets/card-3.png",
    "/src/app/components/game/card/assets/card-4.png",
    "/src/app/components/game/card/assets/card-5.png",
    "/src/app/components/game/card/assets/card-6.png",
    "/src/app/components/game/card/assets/card-7.png",
    "/src/app/components/game/card/assets/card-8.png",
    "/src/app/components/game/card/assets/card-9.png",
  ];