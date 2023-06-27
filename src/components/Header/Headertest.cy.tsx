import React from "react";
import Headertest from "./Headertest";

describe("<Headertest />", () => {
    it("renders", () => {
    // see: //on.cypress.io/mounting-react
        cy.mount(<Headertest />);
    });
});
