/* eslint-disable no-undef */
/// <reference types="cypress"/>

describe('Doc Requirements', () => {
    beforeEach(() => {
        cy.visit('/registration')
    })

    it('check continue button', () => {
        cy.get('[data-cy="continue-button"]').click()
        cy.get('[data-cy="admission-form-student-details"]').should('be.visible')
    })

    it('check back button', () => {
        cy.get('[data-cy="back-button"]').click()
        cy.contains('School Might be Closed, Not Your Curiosity')
    })
})