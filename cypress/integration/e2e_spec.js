describe('Poll Application', () => {
  it('successfully loads', () => {
    cy.visit('/');
  });
  it('adds a new option', () => {
    cy.get('#new_option')
      .type('opt1')
      .then(() => {
        cy.get('#add_new_option')
        .click()
        .then(() => {
          cy.get('.option-container:nth-child(1) > input')
            .should('have.value', 'opt1');
        });
      });
  });
  it('adds a new radio button when option is added', () => {
    cy.get('.vote-option-container:nth-child(1) > label')
      .should('have.text', 'opt1');
  });
  it('cannot add more than 10 options', () => {
    [2, 3, 4, 5, 6, 7, 8, 9, 10].forEach((index) => {
      cy.get('#new_option')
        .type(`opt${index}`)
        .then(() => {
          cy.get('#add_new_option')
          .click();
        });
    });
    cy.get('#new_option').should('not.exist');
  });
  it('removes an option when x button is pressed', () => {
    cy.get(':nth-child(1) > .del-btn')
      .click()
      .then(() => {
        cy.get(':nth-child(1) > .flex-container > label')
          .should('not.contain', 'opt1');
      });
  });
  it('removes the corresponding radio button when option is deleted', () => {
    cy.get(':nth-child(2) > .flex-container > label')
          .should('not.contain', 'opt1');
  });
  it('changes the poll question', () => {
    cy.get('#poll-question')
      .type('Does this work?')
      .then(() => {
        cy.get('#poll-question')
          .should('have.value', 'Does this work?');
      });
  });
  it('refreshes the title of the middle and right section when poll question changes', () => {
    cy.get('.section-title').each(($el) => {
      cy.wrap($el).should('have.text', 'Does this work?');
    })
  });
  it('the lock button enables when there are at least two options available and poll question set', () => {
      cy.get('#lock-btn').should('not.be.disabled');
  });
  it('has left section inputs and buttons enabled and mid and right sections buttons and inputs disabled', () => {
    cy.get('.app-container > :nth-child(2) input').each(($el) => {
      cy.wrap($el).should('not.be.disabled');
    }).then(() => {
      cy.get('.del-btn').each(($el) => {
        cy.wrap($el).should('not.be.disabled');
      }).then(() => {
        cy.get('.app-container > :nth-child(3) input').each(($el) => {
          cy.wrap($el).should('be.disabled');
        });
      });
    });
  });
  it('disables all buttons in the left section and enables the radio buttons in the mid section when the lock button is pressed', () => {
      cy.get('#lock-btn')
        .click()
        .then(() => {
          cy.get('.app-container > :nth-child(2) input').each(($el) => {
            cy.wrap($el).should('be.disabled');
          });
          cy.get('.del-btn').each(($el) => {
            cy.wrap($el).should('be.disabled');
          });
          cy.get('.app-container > :nth-child(3) input').each(($el) => {
            cy.wrap($el).should('not.be.disabled');
          });
        })
  });
  it('has vote button disabled while no option is selected', () => {
    cy.get('.vote-btn').should('be.disabled');
  });
  it('enables vote button when poll is locked and option is selected', () => {
    cy.get(':nth-child(3) > .main > .flex-container > :nth-child(1) > input')
      .click()
      .then(() => {
        cy.get('.vote-btn').should('not.be.disabled');
      })
  });
  it('increases the vote count when a vote is cast', () => {
    cy.get('.vote-btn')
      .click()
      .then(() => {
        cy.get(':nth-child(4) .recharts-rectangle')
          .trigger('mouseover')
          .then(() => {
            cy.get('.recharts-tooltip-item-value')
              .should('have.text', '1');
          })
      })
  });
  it('resets the application when the reset button is pressed', () => {
    cy.get('.reset-btn')
      .click()
      .then(() => {
        cy.get('#poll-question').should('have.value', '');
        cy.get('.del-btn').should('not.exist');
        cy.get('.option-label').should('not.exist');
      });
  });
});
