/* eslint-disable linebreak-style */
class FooterBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
            *{
                margin:0;
                padding:0;
                box-sizing:border-box;
            }
            :host{
                position:absolute;
                bottom:0;
                left:0;
                right:0;
                display: block;
                background-color: #F2789F;
                text-transform: uppercase;
                font-family: sans-serif;
                color: white;
                text-align: center;
            }
        </style>

        <h3>
            &copy; Copyright 2021 Movie List All Right Reserved
        </h3>
        
        `;
  }
}

customElements.define("footer-bar", FooterBar);
