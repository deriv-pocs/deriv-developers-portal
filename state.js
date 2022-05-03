import { createMachine } from 'xstate';

export const stateMachine = 
/** @xstate-layout N4IgpgJg5mDOIC5QEMAOqB0ALZBbARgK4BOMx2eRpYxA+gPapgB2GE9AxobiwC7K8AlvWYMmzAMQAVAPIBxOQBkAorQAiMgMIBVALLKAclICCUgJIyDiUKnqxBQkdZAAPRAFoAjADYADBgB2AE4AZiDPABZvAA5ogJCAJl9vABoQAE9ECOiAVgxvIICikICczzDigF9KtLRMHAISMgpG6jpGFjZObj4BYVEOABs7SGl5JVUNHX0jUwsrJBBbe0dmZzcELz9A0PCo2Pik1IysksCQiM8ghJyg0L8c6tr0FqpmhreaMRYxhRVaAASxl0ACFtAAlOTKcHOZYOfrrDwJBLeDBxXwlbzZXwBBIRG5pTIIbyeDA43G3bwBaJ43w5BJPEB1V5NGgstq0IYjCC-CaA4FgyHQ2F2eFORYbdzI1HozHY3H4nKExCeXxBMkRHE5EK+bKxHLxRnM4hgKCCWC8Yh9EQYYZQGAQBiEXgSRTyMwLGyi1aIzYhHKo-ZBbz+ny5ALJZXE7wJDBhcqReMXO5Gl4ms0Wq2rW30e2QWiCVjp828L78fAYABm9EGEHz1eIuF5-wAYjJwboRSsERKVarohh6TkIvTddFPBOAlHPPT1VTkSPSqU-N5U5hi5nraw7Q6C0XTSWy8gK4RmNXa-X6I2MLBCPhcA4hMwoLQN5atznkBBCy+31n+hIADK2iaJoyiAYBXZimsvYIJECQBPk2q+LkZQ5LEnhTiccFBHEGD4iENJ+Pi4Zrhgf4fju+aFuRB4WkeJ5njWdaOg2uA3neD68E+v50e+2bDF+P6vnx-4iBI0Lgu2UE+rB8GId4yGoTOGFYUSSQhKiM7+jSYTjviq41EyaaiZRua7jRb4MRgp7nixtBsRx96PsJFGrBImhuoBqjgsochmIBUjgnMli0LoMhqMYigyT2oAbIm6qRL4yQhgaOqRthmHJGi0SEckQQ5MkeLRGRbn9DmeaOpZfHWbZzGXo2zaqG2HYxeKcUqsEqKETk6GadE2QIdOA2IZpvUTiUKGJCEpWmQJ5nUfuGalnQ5Y2UxF6sVeTbASCuhmFItC+f5gXBeYlhtTBHVwYmg43COSTZBOmHThGMq5dE+WFTGUSzctYnbgtVVLYeq3Hq68gyNoUiXb6CQzol0RUgEmp3EE2SvXcGqfREdy+J4sQxH9JYAxVFkg-RYP4BIujGAYxhQrQsh-KoJggrDsFeGqZIXFquJJAkFwhNOhQRGilxYhE1LhNEwbE5u82VXuGC4MgzDIDAtBrYJ37PsY6CwBgYC4KgvDpBIx0BVI0JM+M-xsxz10DXkKGfTiWIJHcCTRK92qDs7w5BHS3h+DNRnGnN5VUcDKtqxrYBa8en661A+uoIbOs-hJ4JSTCixwrJ13IohqoGl9kQkoU04hIkGCqopire17JXhyZ-1mUrNGq+rmva-QQl6wbydZ8BoHgZB+ferFriIMXdd0m9BUV1cakqt7IRxgEIc1+h6E+GHzzrpHNrR8r3fx4nFaZ4P6fD8+Em6AAClIACajszwgc+l4vZRRCv1efTRJpEICYogYhbofWi7dFbk1jj3BOa06yDDADxNOd8oBqDAMg0sQEQJgQgu-DYlxSQzlnAETw91eoRGFplDEeQYiJEKBieGyN5b8SjkDM+cde5JyQSgn8aDr4YKwSgsA2dc6EKyBOOuvVPbkMocOGhRJcKogKv6FElwyjIgPsZI+0COGd1YOfHhFY+GoJeLgegEBkCDAkGoZQKhraSLggNQcNd0bULCHjKIUY7ikhRgTTSkRxwFTYaTU+XduEIN4SI8xmBLHWNsZoOmYFoqT27O1D+MR1S4guDGXKtwSgRGnKQuuilMLallgaXKYSO6wOMdE6mltAo22ZnyB26ToK+mdmSWIyUt74juEolUn1STDnHJpBeBQCi1JgYtOBF9ywSBbMoKQmgAS0GMI-R+tBFBW2ce4FGPNNRLmRL4QW1DpwolGujAa6VCiFEMpAsqJ9OGRPgZfOxDjVmqC2Y-A5RyMQnINGci5wyEBMIwIUHwuMGGex0RHfRrzDELJMRIOQMhaDaEfpFa2YUIrKGcT012-SPZDN8fEKFTCQF4kIriWZBjYGEFQNY0stAElgBsiygQYBBH9xTtoblOD2DME5YWAAbvQAA1pyxFJM6nzOZayhOHKuXKr5QPKAgrlUIAlZwLcABtXwABdZxFCIhi2yAUEB2RcLnJ9plHUYsrh0gDAVfGBpHitz0fKuZMclU8vZVYzlAbSwaoFUKsRNBiBXgwKgQYAhHJyoVoyxVkag11jVTy8NP5tU8t1cwSVHBDUmrNXiS1SNQjBLtd7au9IoWPW0tkW4XrnnH0Bii0NKrg24L2gdI6fkrZnXmGa5IYsCgozocGeIWJfFI3wtCzCXiYjewZci8mEMMXQ2cfDW4dckZFFRncDGmURpkgnCOQOE1Chro7Ru2m9NGZtPtsYdmnTC4f3cIkUkQZUphjLscZR1D8LkPiH1cIdDZqwFsMwew4qxEYt2Vs2QOy0legyVdT9mlAzZL-TEADUYv2ewwCiYcuN67r0iFBmDcGEOYsUMhmQ-z33T0lNh-CuHQz4beoRwJZJSiyxDgUVU1wIG6NotBkQtH0WYsApoXyhgIgAGkDnsd-Vx8MGUiRfqKFS5CpRdS4jHdRqTgh4MyfxSCMw-w0NLCnpktjIcOOCY0wR7CXgLhxhHMekodwBMMm9RJmjZm6OWes6oTsLGHMeDU5xso3GtMeFyPkHwmFcL8yFhEEzsGQsWfClZ-4E90NdM5rFlz8XNOAaRIA7UAZyhRFuHc7L0nENs0cappz6mKtue04LUkn0DTPS3rkFCAWjLMGDfARYzIPisnILNjkHRWDsC4DwZg-BVjfEwwXVjMXpFdf-Tx7CFq8ifVDhiUoQQyILfeJQObW2uird6JtrksBIBErnHEEJBMIxqmpFGC1A4dTnZKLca7d22jsjIFt1T-pnPBlc0dokmkxZb29uhWI45XZZcCzdtkeO6Cvfe1FzDjmcPlcO4l4kiVcZ0n9FiKastwetDIKpoO8O8OVd4-19G2lcr4gCQEW9ZN8z0GdDuhCgZ6Q+GDOOBuw06T5CxEUT2Q5epC8Cy8u98yrJUyrPVLajYzXBn8AUXqIYfDlv+6ehC+RkoXvcQzp54mtci5jrry+607INXYreZy3FXLtvQSJJF237Ok7Xq4m45yt4lG9tpEWwY4xNxRmEbzE5hcRIpitT3dVNoOW2k5LiPEQ++vKlr2gt4OAcDgFN4rH74otrjB6oZaoaSrxwuEQcJyQ4RiiBGALbbQ9u+Vh7taef7KOT98XwPw+K-RqvGapvOoEahDb0NbCj1-AIV1PDfGMRdSZ7edn2qG1J+F+ny5Z8peU2ZJ29FuCKJt+FUl3H8c2oRaRHwvSXGgsQEPCPxRTHyTgnx9zNQnHVCHAejHCG2nBjFJHCBuAnBDjORrkANgWAPwFHVcSgNHCeknGnBHFRF+0+hRFlnORRHQPmQaU9yETTkNmNlNiJHr12wQHURIzq01AIkwgtQATFjUR4PpHXjE2TXYXXWoKiVoP5QESHirxr1gDrzsww19FDDrlS2CAJl1BUSuTwlxh3m3ixFQioJjhoL7k1XoKNmIBjWIGcVUOQLS00NxiRmrk0hIz-1S3LWSlbRdyDyz1RUaXQQsKETLW6mmWRGnRQgnSuXRnyAE1A0+lyk0mMK4Q+TMJTnoNHVjE0mDHCKpEiKrkyj33wjpCuFCAGhQm8NEPCWP38M9zMRkMwCEUwWwTAB3RiO9kUm1GRFlnISpzuFO3Qj8FFkmQRTbjL3EJMMkMQViQaI4mr1r2aNEWcVqzKQNGtTI2uE8GnAxHVDdhUk1EE1KGSPeUWRiWwVmIX2IEWNLGWLhx8DWNCA2Phl8S7xxAxGSnxjp2OKMSmLOP4RvhVisRsWcVwkCGpGoVuEwnKFiCCG2OSnyCiHCHRi3ipGdyqIVUmNSL+LiWcSOSKDuUhPIUIlll8XKChRpBnHKHul82+NqLWkEAgGQQOVxmOT5lBSFjgMAWCFwnRk9k+iXFpNMOPAOVBKBTZIFg5OwnxLJD8G9jeIRl6lpK7QzRDUjRzWfDzRuJJ19AnG5gnU1H9GnRRxcKyN3WCHIUiECSVPTVVS7TQTkNr01NaO1LkkVHJOoUPRxmyHBXKBQmb3iB1GHHN0VM118JqOVNtLVJeEuKdLNTdNwg9JRi9NyjrUQguwJllgtWSlGJ9Vv2139RtODSzTDXQGwPoVFinSpGNMKJARIyuFpEKCQJTFDOHz8IjODVHU1HyArMNKrNnWwiDjGRuBpHhgnBRCoxbPGPzL3FUxHA50Ryp2tV6VllyEuBARRkHx8ND1U0AQOwSyqwQHQnVEuDuDOzdlwk3Ijkkxy3gzYDgClV4EYEUDQEfNQFs3vwj02COE3i3muHITNyRgSEI0SDyGCRJDHDRyuGaxCzvNgAfKfJfMYEixYIfylGyhKF-IQhl0GKAvc0wgHAKiDnUWuB1HRmgtvLrDgtfMAg4BNBYAiClQOW-IwoKCwoApjGAspS+32EJjpDItDOvNo0BPwEEGQXfPD19DQu6iKFYv-IKkAt4x1DcPCGGzKPISuwEuC1vMsREuQWQqUJK2uikp-NkuwoUvc3HAXSrQGgKmoQtQ1zbUEpgp0tErACKwMobyRHQpkr-LMo4vc0l3wh+1HFlgJgtXIs5RcuQSkGPGwSYu8swrkpwsIznhiBhOyJxERIirZ38D3K53cyiFjGDEUixEmhAR8DXGZK-zyp6w8BWNCGCCSFLhKDiGqGqCAA */
createMachine({
  id: "app",
  type: "parallel",
  states: {
    hamburger: {
      initial: "hamburger_closed",
      states: {
        hamburger_open: {
          initial: "documentation_open",
          states: {
            documentation_open: {
              on: {
                TOGGLE_DOCUMENTATION: {
                  target: "documentation_closed",
                },
              },
            },
            documentation_closed: {
              on: {
                TOGGLE_DOCUMENTATION: {
                  target: "documentation_open",
                },
              },
            },
          },
          on: {
            TOGGLE_HAMBURGER: {
              target: "hamburger_closed",
            },
          },
        },
        hamburger_closed: {
          on: {
            TOGGLE_HAMBURGER: {
              target: "hamburger_open",
            },
          },
        },
      },
    },
    registration: {
      initial: "logged_out",
      states: {
        logged_out: {
          on: {
            LOGIN: {
              target: "logged_in",
            },
          },
        },
        logged_in: {
          initial: "register_tab",
          states: {
            register_tab: {
              initial: "unfolded_form",
              states: {
                folded_form: {
                  invoke: {
                    src: "resetFields",
                  },
                  on: {
                    TOGGLE_FORM: {
                      target: "unfolded_form",
                    },
                  },
                },
                unfolded_form: {
                  initial: "submitting_registration",
                  states: {
                    submitting_registration: {
                      initial: "loading_registration",
                      states: {
                        loading_registration: {
                          on: {
                            SUCCESS: {
                              target: "registration_success",
                            },
                            ERROR: {
                              target: "registration_error",
                            },
                          },
                        },
                        registration_success: {},
                        registration_error: {},
                      },
                      on: {
                        CLOSE_REGISTRATION_MODAL: {
                          target:
                            "#app.registration.logged_in.register_tab.unfolded_form",
                        },
                      },
                    },
                  },
                  on: {
                    TOGGLE_FORM: {
                      target: "folded_form",
                    },
                    SUBMIT_REGISTRATION: {
                      target: ".submitting_registration",
                    },
                  },
                },
              },
              on: {
                LOGOUT: {
                  target: "#app.registration.logged_out",
                },
                MANAGE_TOGGLE_TAB: {
                  target: "manage_tab",
                },
              },
            },
            manage_tab: {
              invoke: {
                src: "setEnvironment",
              },
              initial: "loadingApps",
              states: {
                loadingApps: {
                  initial: "loading",
                  states: {
                    empty: {
                      on: {
                        REGISTER_TOGGLE_TAB: {
                          target: "#app.registration.logged_in.register_tab",
                        },
                      },
                    },
                    success: {},
                    error: {},
                    loading: {
                      on: {
                        ERROR: {
                          target: "error",
                        },
                        SUCCESS: {
                          target: "success",
                        },
                        EMPTY: {
                          target: "empty",
                        },
                      },
                    },
                  },
                },
                deletingApp: {
                  initial: "modal",
                  states: {
                    loadingDelete: {
                      on: {
                        SUCCESS: {
                          target: "successDelete",
                        },
                        ERROR: {
                          target: "errorDelete",
                        },
                      },
                    },
                    successDelete: {},
                    errorDelete: {},
                    modal: {
                      on: {
                        DELETE: {
                          target: "loadingDelete",
                        },
                        CANCEL: {
                          target: "#app.registration.logged_in.manage_tab.idle",
                        },
                      },
                    },
                  },
                },
                idle: {},
              },
              on: {
                REGISTER_TOGGLE_TAB: {
                  target: "register_tab",
                },
                FETCH_APP_LIST: {
                  target: ".loadingApps",
                },
                DELETE_APP: {
                  target: ".deletingApp",
                },
                GO_UPDATE_MODE: {
                  target: "update_mode",
                },
              },
            },
            update_mode: {
              states: {
                updateApp: {
                  initial: "loadingUpdate",
                  states: {
                    loadingUpdate: {
                      invoke: {
                        src: "appUpdate",
                        onDone: [
                          {
                            target: "successUpdate",
                          },
                        ],
                        onError: [
                          {
                            target: "errorUpdate",
                          },
                        ],
                      },
                    },
                    successUpdate: {},
                    errorUpdate: {},
                  },
                },
              },
              on: {
                SUBMIT_REGISTRATION: {
                  target: ".updateApp",
                },
              },
            },
          },
          on: {
            LOGOUT: {
              target: "logged_out",
            },
            MANAGE_TOGGLE_TAB: {
              target: ".manage_tab",
            },
          },
        },
      },
    },
    responsive: {
      states: {
        desktopLaptopL: {},
        desktopLaptopM: {},
        desktopScreen4k: {},
        mobileL: {},
        mobileM: {},
        mobileS: {},
        mobileTablet: {},
      },
      on: {
        GO_LAPTOP_L: {
          target: ".desktopLaptopL",
        },
        GO_LAPTOP: {
          target: ".desktopLaptopM",
        },
        GO_SCREEN4K: {
          target: ".desktopScreen4k",
        },
        GO_MOBILE_L: {
          target: ".mobileL",
        },
        GO_MOBILE_M: {
          target: ".mobileM",
        },
        GO_MOBILE_S: {
          target: ".mobileS",
        },
        GO_TABLET: {
          target: ".mobileTablet",
        },
      },
    },
  },
});
