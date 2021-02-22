/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
import '@polymer/app-layout/app-layout.js';
import '@polymer/paper-card/paper-card.js';
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import '@polymer/app-route/app-location.js';
class MyContacts extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
        .my-contact-card{
            width:100%;
            height:500px;
        }
        .my-contact-header{
            width:100%;
            height:auto;
        }
        .my-contact-map{
            width:100%;
            height:auto;
            display:flex;
        }
        .my-contact-card{
            margin-top:1px;
            margin-bottom:1px;
        }
        .feedback-form{
            width:100%;
        }
        #map-iframe{
            justify-content:center;
        }
        .my-contact-form{
            padding:10px;
            
        }
        .paper-input{
            padding:20px;
        }
        .address{
            padding:10px;
        }
        #my-contact{
            height:auto;
        }
        #map-card{
            width:100%;
            border:1px solid black;
        }
        .my-contact-map{
            width:80%;
            margin:auto;
        }
        #map-iframe{
            width:100%;
        }
        #display-flex{
            display:flex
        }
        @media only screen and (max-width: 600px) {
            #display-flex{
                display:block;
            }


      </style>

      <app-location route="{{route}}"></app-location>

    <!----------------------------- ----------------------   card sample material design ------------------------------------------------>
        <div id="my-contact" class="">
            <paper-card class="my-contact-card" heading="">
            <div>
                <paper-card class="my-contact-header my-contact-card" heading="">
                    <div class="address">
                        <h4>Contact-info:</h4>
                        <h4>Address: Government Hospital
                        Suffren St, White Town, Puducherry, 605001</h4>
                        <h4>Email : govthospital@gmail.com</h4>
                    </div>
                </paper-card>
            </div>    

                <div id="display-flex">
                    <div id="map-card">
                        <iframe id="map-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62456.78076787741!2d79.7785084050112!3d11.936456756595375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53622ba5394007%3A0x8085b0460c546c61!2sGovernment%20Hospital!5e0!3m2!1sen!2sin!4v1613738009690!5m2!1sen!2sin" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                    <div class="feedback-form">
                    <paper-card class="my-contact-form my-contact-card" heading="Feedback ">
                        <paper-input always-float-label label="Name" required auto-validate error-message="fill Name!"></paper-input>
                        <paper-input always-float-label label="Email" required auto-validate error-message="fill Email!"></paper-input>
                        <paper-input always-float-label label="Message" required auto-validate error-message="fill Message!"></paper-input>
                        <div>.</div>
                        <paper-button  toggles raised class="red" on-click="navigateToView3" >Send</paper-button>

                    </paper-card>
                    </div>
                </div>




            </paper-card>
        </div>  
        
        
        

    <!-----------------------------------------------------end card sample material design -------------------------------------------------->

 
    `;
  }



 

}

window.customElements.define('my-contacts', MyContacts);
