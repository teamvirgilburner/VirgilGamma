import React from "react";
import { PopupButton } from "react-calendly";

import "./plugins.css";


function CalendlyButton() {
  return (
    <div>
      <PopupButton className = 'consultation-button'
        url="https://calendly.com/jack-kxje/30min?month=2024-05"
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById("root")}
        text="Want to learn more? Schedule a call with our team"
      />
    </div>
  );
}

export default CalendlyButton;