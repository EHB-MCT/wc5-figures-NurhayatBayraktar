"use strict";
import Figure from "./Figure.js";

export default class Circle extends Figure{
    constructor(radius){
        super("Circle");
        this._radius = radius;
    }

    get diameter(){
        return this._radius *2;
    }

    get area(){
        //oppervlakte
        return this._radius*(this._radius * Math.PI);
    }

    get circumference(){
        //omtrek
        return (this._radius * Math.PI)*2;
    }
    
    get htmlString(){
        document.getElementById("results").innerHTML = "";    

        const string =  `<div class="result">
        <div class="figure circle" style="width: DIAMETERpx; height: DIAMETERpx;"></div>
        <div class="infoBox">
          <h3>${this._name}</h3>
          <dl>
            <dt>Radius</dt>
            <dd>${this._radius} px</dd>
      
            <dt>Diameter</dt>
            <dd>${this._diameter} px</dd>
      
            <dt>Area</dt>
            <dd>${this._area} px</dd>
      
            <dt>Circumference</dt>
            <dd>${this._circumference} px</dd>
          </dl>
        </div>
      </div>`;

      document.getElementById("results").innerHTML += string;
    }
}