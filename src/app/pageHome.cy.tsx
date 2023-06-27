import React from "react";
import Home from "./page";

describe("<Home />", () => {
    it("renders", () => {
    // see: //on.cypress.io/mounting-react
        cy.mount(<Home />);
    });
});
