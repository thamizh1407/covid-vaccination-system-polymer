/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-button/paper-button.js';
import 'dile-date-without-calendar/dile-date-without-calendar';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';


class SlotAllotment extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
        #slot-allotment-card{
          width:100%;
          height:1000px;
          padding:15px;
        }
        #slot-allotment-card   div{
          padding:10px;
          padding-bottom:10px;
          padding-top:10px;
        }
        #slot-allotment-card{
          background: linear-gradient( 
            45deg
             , #d8e4e8, transparent);

        }


      </style>
  <div id="parent-slot">
            <paper-card id="slot-allotment-card" heading="Slot Allotment">
            
            
            <div>
              <paper-input always-float-label label="Name" required auto-validate error-message="fill Name" ></paper-input>
            </div> 

            <div>            
             <paper-input always-float-label label="Aadhar No:(Id proof)" required auto-validate error-message="fill Aadhar Number" ></paper-input>
            </div>


            <div >
            <label>Date Available</label>
            <dile-date-without-calendar  ></dile-date-without-calendar>
            </div>

            <div>
            <paper-dropdown-menu label="Time slot available" required auto-validate error-message="fill Date of birth" >
              <paper-listbox slot="dropdown-content" selected="0"  auto-validate error-message="fill Date of birth">
                <paper-item value="0"></paper-item>
                <paper-item value="2">11:30-12:30 Pm</paper-item>
                <paper-item value="3">12:30-01:30 PM</paper-item>
                <paper-item value="4">01:30-02:30 PM</paper-item>
              </paper-listbox>
            </paper-dropdown-menu>
            </div>

              <div>
                <paper-button toggles raised class="green">Submit</paper-button>
              </div>

          </paper-card>   
  </div>


    `;
  }
}

window.customElements.define('slot-allotment', SlotAllotment);
