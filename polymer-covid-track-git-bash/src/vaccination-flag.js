/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */


import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-button/paper-button.js';
import 'dile-date-without-calendar/dile-date-without-calendar';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-radio-button/paper-radio-button.js';
import '@polymer/paper-checkbox/paper-checkbox.js';

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import '@polymer/app-route/app-location.js';
class VaccinationFlag extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
        #vaccination{
            width:100%;
            height:auto;
        }
        #vaccination{
          width:100%;
          height:1000px;
          padding:15px;
          background: linear-gradient( 45deg, #d8e4e8, transparent);
          margin:0 auto;
        }
        #vaccination   div{
          padding-bottom:10px;
          padding-top:10px;
        }
        
      </style>
      <app-location route="{{route}}"></app-location>

    <paper-card id="vaccination" heading="Vaccinationation flag"> 
      <paper-input always-float-label label="Name" required auto-validate error-message="fill Name"></paper-input>
      <paper-input always-float-label label="Aadhar No:(Id proof)" required auto-validate error-message="fill Aadhar number!"></paper-input>
      <div class="col-sm ">
        <label>Date of birth</label>
        <dile-date-without-calendar  value="1977-11-15"></dile-date-without-calendar>
      </div>
      <div>
        <label>Vaccination-Flag</label>
        <paper-radio-button checked>Vaccinated</paper-radio-button>
        <paper-radio-button unchecked>Not-vaccinated</paper-radio-button>
      </div>
      <div>
      <paper-input always-float-label label="Reason" required auto-validate error-message="fill Reason!"></paper-input>
      </div>
      <div>
      <paper-button toggles raised class="green">Submit</paper-button>
      </div>  
      <paper-card> 

    `;
  }
 

}

window.customElements.define('vaccination-flag', VaccinationFlag);
