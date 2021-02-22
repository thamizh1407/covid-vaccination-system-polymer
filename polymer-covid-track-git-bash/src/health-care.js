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

class HealthCare extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }

        #health-card{
            width:100%;
            height:auto;
        }
        #health-card{
            width:100%;
            height:auto;
        }
        #health-card{
          width:100%;
          height:1000px;
          padding:15px;
          background: linear-gradient(
            45deg
            , #d8e4e8, transparent);
        }
        #health-card   div{
          padding-bottom:10px;
          padding-top:10px;
        }
      </style>

      <paper-card id="health-card" heading="Health care slot allotment">
            <paper-input always-float-label label="Location" required auto-validate error-message="fill Location!"></paper-input>
            <div class="col-sm ">
            <label>Date Available</label>
            <dile-date-without-calendar  value="1977-11-15"></dile-date-without-calendar>
            </div>

            <paper-dropdown-menu label="Time slot available" required auto-validate error-message="Allot the time!">
            <paper-listbox slot="dropdown-content" selected="0" required auto-validate>
            <paper-item value=""></paper-item>
            <paper-item>10:30-11:30 AM</paper-item>
            <paper-item>11:30-12:30 Pm</paper-item>
            <paper-item>12:30-01:30 PM</paper-item>
            <paper-item>01:30-02:30 PM</paper-item>
            </paper-listbox>
            </paper-dropdown-menu>
            <div>
                <paper-button toggles raised class="green">Submit</paper-button>
            </div>


     </paper-card>   


    `;
  }
}

window.customElements.define('health-care', HealthCare);
