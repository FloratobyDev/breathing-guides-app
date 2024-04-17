describe("template spec", () => {
  it("renders the app", () => {
    cy.visit("http://localhost:9000/app");
    cy.get('[data-testid="render-test"]').should("exist");
  });

  it("fetches data from the API", () => {
    cy.visit("http://localhost:9000/app");
    cy.intercept("/api/techniques", { fixture: "techniques.json" }).as(
      "getTechniques"
    );
    cy.wait("@getTechniques").then(({ response }) => {
      console.log("response", response);
      expect(response.statusCode).to.equal(200);
      expect(response.body.techniques).has.length.greaterThan(0);
    });
  });

  it("display selected technique", () => {
    cy.visit("http://localhost:9000/app");
    cy.intercept("/api/techniques", { fixture: "techniques.json" }).as(
      "getTechniques"
    );
    cy.wait("@getTechniques").then(({ response }) => {
      const technique = response.body.techniques[0];
      cy.get('[data-testid="technique-name"]').should(
        "contain",
        technique.technique_name
      );
      cy.get('[data-testid="technique-description"]').should(
        "contain",
        technique.technique_description
      );
    });
  });

  it("displays techniques based on search values", () => {
    cy.visit("http://localhost:9000/app");
    cy.intercept("/api/techniques", { fixture: "techniques.json" }).as(
      "getTechniques"
    );

    cy.wait("@getTechniques").then(({ response }) => {
      cy.get('[data-testid="hamburger-logo"]').click();
      cy.get('[data-testid="sidebar-two"]').find("input").type("box");

      cy.get('[data-testid="techniques-container"]').should(
        "not.contain",
        "4-7-8 Breathing"
      );
      cy.get('[data-testid="techniques-container"]').should(
        "contain",
        "Box Breathing"
      );
    });
  });

  it("displays techniques based on filter values(Purpose)", () => {
    cy.visit("http://localhost:9000/app");
    cy.intercept("/api/techniques", { fixture: "techniques.json" }).as(
      "getTechniques"
    );

    cy.wait("@getTechniques").then(({ response }) => {
      cy.get('[data-testid="hamburger-logo"]').click();

      const sidebarElement = cy.get('[data-testid="sidebar-two"]');

      sidebarElement.find('[data-testid="By Purpose"]').click();
      sidebarElement.find("p").contains("relaxation").click();

      const techniques = ["Deep Breathing", "Guided Visualization", "4-7-8"];

      techniques.forEach((technique) => {
        cy.get('[data-testid="techniques-container"]').should(
          "contain",
          technique
        );
      });
    });
  });

  it("displays techniques based on filter values(Difficulty)", () => {
    cy.visit("http://localhost:9000/app");
    cy.intercept("/api/techniques", { fixture: "techniques.json" }).as(
      "getTechniques"
    );

    cy.wait("@getTechniques").then(({ response }) => {
      cy.get('[data-testid="hamburger-logo"]').click();

      const sidebarElement = cy.get('[data-testid="sidebar-two"]');

      sidebarElement.find('[data-testid="By Difficulty"]').click();
      sidebarElement.find("p").contains("medium").click();

      const techniques = ["Equal Breathing", "Ujjayi Breathing"];

      techniques.forEach((technique) => {
        cy.get('[data-testid="techniques-container"]').should(
          "contain",
          technique
        );
      });
    });
  });

  it("displays techniques based on filter values(Duration)", () => {
    cy.visit("http://localhost:9000/app");
    cy.intercept("/api/techniques", { fixture: "techniques.json" }).as(
      "getTechniques"
    );

    cy.wait("@getTechniques").then(({ response }) => {
      cy.get('[data-testid="hamburger-logo"]').click();

      const sidebarElement = cy.get('[data-testid="sidebar-two"]');

      sidebarElement.find('[data-testid="By Duration"]').click();
      sidebarElement.find("p").contains("10").click();

      cy.get('[data-testid="techniques-container"]')
        .find("p")
        .should("not.exist");
    });
  });

  it("displays techniques based on filter values(Culture)", () => {
    cy.visit("http://localhost:9000/app");
    cy.intercept("/api/techniques", { fixture: "techniques.json" }).as(
      "getTechniques"
    );

    cy.wait("@getTechniques").then(({ response }) => {
      cy.get('[data-testid="hamburger-logo"]').click();

      cy.get('[data-testid="sidebar-two"]')
        .find('[data-testid="By Culture"]')
        .click();

      cy.get('[data-testid="sidebar-two"]')
        .find("p")
        .contains("eastern")
        .click();

      cy.get('[data-testid="techniques-container"]')
        .find("p")
        .should("not.exist");

      cy.get('[data-testid="sidebar-two"]')
        .find('[data-testid="By Culture"]')
        .click();

      cy.get('[data-testid="sidebar-two"]')
        .find("p")
        .contains("western")
        .click();

      cy.get('[data-testid="techniques-container"]').find("p").should("exist");
    });
  });

  it("dispays techniques based on multiple filter values", () => {
    cy.visit("http://localhost:9000/app");
    cy.intercept("/api/techniques", { fixture: "techniques.json" }).as(
      "getTechniques"
    );

    cy.wait("@getTechniques").then(({ response }) => {
      cy.get('[data-testid="hamburger-logo"]').click();

      cy.get('[data-testid="sidebar-two"]')
        .find('[data-testid="By Purpose"]')
        .click();
      cy.get('[data-testid="sidebar-two"]')
        .find("p")
        .contains("relaxation")
        .click();

      cy.get('[data-testid="sidebar-two"]')
        .find('[data-testid="By Difficulty"]')
        .click();
      cy.get('[data-testid="sidebar-two"]')
        .find("p")
        .contains("medium")
        .click();

      const techniques = ["Equal Breathing"];

      techniques.forEach((technique) => {
        cy.get('[data-testid="techniques-container"]').should(
          "not.contain",
          technique
        );
      });
    });
  });

  it("displays instructions for selected technique", () => {
    cy.visit("http://localhost:9000/app");
    cy.intercept("/api/techniques", { fixture: "techniques.json" }).as(
      "getTechniques"
    );

    cy.wait("@getTechniques").then(({ response }) => {
      cy.get('[data-testid="hamburger-logo"]').click();

      cy.get('[data-testid="sidebar-two"]').contains("Equal Breathing").click();

      const equalBreathing = response.body.techniques.find(
        (technique) => technique.technique_name === "Equal Breathing"
      );

      cy.get('[data-testid="instruction-list"]').find("li").should(
        "have.length",
        equalBreathing.instructions.length
      );
    });
  });


});
