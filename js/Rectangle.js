"use strict";

import Figure from "./Figure.js";

export default class Rectangle extends Figure{
    constructor(width,height,name){
        super(name);
        this._name = "Rectangle";
        this._width = width;
        this._height = height;
    }

    get area(){
        //oppervlakte
    return this._width * this._height;
    }

    get circumference(){
        //omtrek
        return (this._width * this._height)*2;
    }

    get htmlString(){
        document.getElementById("results").innerHTML = "";    

        const string =  `<div class="result">
        <div class="figure rectangle" style="width: WIDTHpx; height: HEIGHTpx;"></div>
        <div class="infoBox">
          <h3>${this._name}</h3>
          <dl>
            <dt>Height</dt>
            <dd>${this._height}px</dd>
      
            <dt>Width</dt>
            <dd>${this._width} px</dd>
      
            <dt>Area</dt>
            <dd>${this.area} px</dd>
      
            <dt>Circumference</dt>
            <dd>${this.circumference} px</dd>
          </dl>
        </div>
      </div>`;

      document.getElementById("results").innerHTML += string;
    }
}