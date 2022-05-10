import React from 'react';
import userEvent from '@testing-library/user-event'
import { createMachine } from 'xstate';
import { createModel } from '@xstate/test';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import App from './App';

const renderWithRouter = (ui, { route = '/' } = {}) => {
    window.history.pushState({}, 'Home page', route)
    return {
      user: userEvent.setup(),
      ...render(ui, { wrapper: BrowserRouter }),
    }
  }

const appState = {
  on: {
    HOME: {
      target: ".home",
    },
    DOCUMENTATION: {
      target: ".documentation",
    },
  },
  id: "app",
  initial: "home",
  states: {
    home: {
      mata: {
        test: ({ getByRole }) => {
          expect(getByRole('heading', { name: /Benefits of using Deriv API/i })).toBeInTheDocument();
        },
      },
    },
    documentation: {
      initial: "quickstart",
      states: {
        quickstart: {
          meta: {
            test: ({ getByRole }) => {
              expect(getByRole('heading', { name: /Quickstart to Deriv API/i })).toBeInTheDocument();
            },
          },
        },
        guide: {
          meta: {
            test: ({ getByRole }) => {
              expect(getByRole('heading', { name: /API guide/i })).toBeInTheDocument();
            },
          },
        },
        faq: {
          meta: {
            test: ({ getByRole }) => {
              expect(getByRole('heading', { name: /FAQ/i })).toBeInTheDocument();
            },
          },
        },
      },
      on: {
        QUICKSTART: {
          target: ".quickstart",
        },
        GUIDE: {
          target: ".guide",
        },
        FAQ: {
          target: ".faq",
        },
      },
    },
  },
};

// console.log(appState.states.documentation.states);

describe('feedback app', () => {
    const appMachine = 
/** @xstate-layout N4IgpgJg5mDOIC5QEMAOqB0ED2BjArgLZgB2ALsmQJbYkDEAigKoCSAwgNIDKAKgIIAlHolCpssKtVoiQAD0QAmAKwA2DABYVKgIwKA7HoUBmTQA4AnABoQAT0Ta9SjOc0r1RhS-WOFpgL5+1miYOATE5JQ09ADirAAiAKIyYhJSJDLyCPqmGCoADNqqetrabkZGptZ2WeUYSqZu5kWe5o5GAUHoWHhEpBRpdABifAzJ4pJRGYhGJRh6phVGekb1JSpGVYraec7mC6YKBXvmRnnmHSDBdAASAPIAsklIICkT0s+Z6gqbWXrqzg5zCo-nkVBZgRcrnFbmwmI8AHL8HgsW7wsapSYfRBfH6lIwaVzuTzqbxKXwBQIgEjYCBwGTBDAAC2wxHRb3SWIQ2i+GEKKgU6iUmg8TX5PwUYIB6jyC20QNW-kpDNCvQiaQwAEd8FRcABrWAUABOZDZaSmCGl2mc3gsen5pTyJNxKnM1v0Rhduk8YMVnRCPXC-SiGCg2tppsxoEyRhOuQ9pmWSlaSgqenF+gwMolHnq9XUpQUkK6KsDkVoGAAZsgNRH3lHFKoNFpdAZjGYrLZpgLM0KCgptKZ8y6mkX-WE+mWOaJxmbOcYFE2dPpDCYwR3qoPnMVU4dQXlltpR7Wp3J7JVOwgdnlr3klupTBYHCDTHkFP2KX4gA */
createMachine(appState);
  
    const testModel = createModel(appMachine, {
      events: {
        DOCUMENTATION: ({ user, getByRole }) => {
          window.history.pushState({}, 'Docs page', '/docs')
          user.click(getByRole('link', { name: /documentation/i }));
        },
        HOME: ({ user, getByRole }) => {
            user.click(getByRole('link', { name: /home/i }));
        },
        QUICKSTART: ({ user, getByRole }) => {
            user.click(getByRole('link', { name: /quickstart/i }));
        },
        GUIDE: ({ user, getByRole }) => {
            user.click(getByRole('link', { name: /guide/i }));
        },
        FAQ: ({ user, getByRole }) => {
            user.click(getByRole('link', { name: /faq/i }));
        },
      }
    });
  
    const testPlans = testModel.getSimplePathPlans();
  
    testPlans.forEach(plan => {
      describe(plan.description, () => {
        afterEach(cleanup);
        plan.paths.forEach(path => {
          it(path.description, () => {
            const rendered = renderWithRouter(<App />);
            return path.test(rendered);
          });
        });
      });
    });
});

