import { createMachine } from 'xstate';
import { createModel } from "@xstate/test";

function addTests(state, tests) {
  return {
    ...state,
    states: Object.entries(state.states).reduce((s, [stateKey, stateValue]) => {
      return {
        ...s,
        [stateKey]: {
          ...stateValue,
          meta: {
            ...stateValue.meta,
            test: tests[stateKey]
          }
        }
      };
    }, {})
  };
}
const createTestModel = (machine, stateTests, eventTests) => {
  const modelMachine = createMachine(addTests(machine, stateTests));
  const model = createModel(modelMachine, { events: eventTests });
  return model;
};


const derivApiMachine = (initial = 'home') => ({
    id: "current_api_deriv_com",
    initial,
    on: { CLICK_PLAYGROUND: "playground", CLICK_DOCUMENTATION: "documentation" },
    states: {
      documentation: {
        on: { ...documentationNavigationEvents },
      },
      registration: {
        on: { ...documentationNavigationEvents },
      },
      guide: {
        on: { ...documentationNavigationEvents },
      },
      playground: {
        on: { CLICK_HOME: "home", CLICK_DOCUMENTATION: "documentation" },
      },
      home: {
        on: { CLICK_PLAYGROUND: "playground", CLICK_DOCUMENTATION: "documentation" },
      },
      faq: {
        on: { ...documentationNavigationEvents },
      },
      jsonSchemas: {
        on: { ...documentationNavigationEvents },
      },
      bugBounty: {
        on: { ...documentationNavigationEvents },
      },
    },
  });
  const documentationNavigationEvents = {
    CLICK_APP_REGISTRATION: "registration",
    CLICK_GUIDE: "guide",
    CLICK_DOCUMENTATION: "documentation",
    CLICK_PLAYGROUND: "playground",
    CLICK_HOME: "home",
    CLICK_FAQ: "faq",
    CLICK_JSON_SCHEMAS: "jsonSchemas",
    CLICK_BUG_BOUNTY: "bugBounty",
  };

const cypressStates = {
  home: () => {
    cy.contains(/deriv api/i);
  },
  documentation: () => {
    cy.contains(/quickstart to deriv/i);
  },
  playground: () => {
    cy.contains(/select api call/i);
  },
  registration: () => {
    cy.contains(/Authenticate your API/i);
  },
  documetnation: () => {
    cy.contains(/Quickstart to Deriv API/i);
  },
  faq: () => {
    cy.get('.doc-main-title').contains(/FAQ/i);
  },
  jsonSchemas: () => {
    cy.get('.doc-main-title').contains(/JSON Schemas/i);
  },
  bugBountry: () => {
    cy.get('.doc-main-title').contains(/Bug Bounty/i);
  },
  guide: () => {
    cy.get('.doc-main-title').contains(/API guide/i);
  },
};
const cypressEvents = {
  CLICK_PLAYGROUND: function () {
    cy.contains(/playground/i).click();
    //user clicks
  },
  CLICK_HOME: function () {
    cy.contains(/home/i).click();
  },
  CLICK_APP_REGISTRATION: function () {
    cy.get("#sidebar > #app-registration")
      .contains(/app registration/i)
      .click();
  },
  CLICK_DOCUMENTATION: function () {
    cy.contains(/documentation/i).click();
  },
  CLICK_FAQ: function () {
    cy.get("#sidebar > #faq").contains(/faq/i).click();
  },
  CLICK_JSON_SCHEMAS: function () {
    cy.get("#sidebar > #json-schemas").contains(/json schemas/i).click();
  },
  CLICK_BUG_BOUNTY: function () {
    cy.get("#sidebar > #bug-bounty").contains(/bug bounty/i).click();
  },
  CLICK_GUIDE: function () {
    cy.get("#sidebar > #api-guide").contains(/guide/i).click();
  },
};
cy.testsModel = (initialState) => createTestModel(derivApiMachine(initialState), cypressStates, cypressEvents);

const itVisitsAndRunsPathTests = (url) => (path) => {
    it(path.description, function () {
      cy.visit(url).then(path.test);
    });
  };

cy.itTests = (appAddress) => itVisitsAndRunsPathTests(appAddress);
  