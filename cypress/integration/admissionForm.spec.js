/* eslint-disable no-undef */
/// <reference types="cypress"/>

describe('Admission Form', () => {
    beforeEach(() => {
        cy.visit('/admissionform')
    })

    it('should be able to fill in the admission form and can submit to go to upload section', () => {
        cy.get('[data-cy="name"]').type('John Doe');
        cy.get('[data-cy="father"]').type('John Doe');
        cy.get('[data-cy="motherName"]').type('John Doe');
        cy.get('[data-cy="dob"]').type('2020-01-01');
        cy.get('[data-cy="childId"]').type('123456784');
        cy.get('[data-cy="class"]').select('11');
        cy.get('[data-cy="state"]').select('Madhya Pradesh');
        cy.get('[data-cy="district"]').type('Shivpuri');
        cy.get('[data-cy="mobileNumber"]').type('9999999999');
        cy.get('[data-cy="town"]').type('karera');
        cy.get('[data-cy="parentMobileNumber"]').type('9999999999');
        cy.get('[data-cy="medium"]').select('English');
        cy.get('[data-cy="nominationNumber"]').type('A19/162034/000');
        cy.get('[data-cy="postOffice"]').type('karera');
        cy.get('[data-cy="fatherAnnualIncome"]').type('400000');
        cy.get('[data-cy="admissionType"]').select('Regular');
        cy.get('[data-cy="permanentAddress"]').type('Campus patel school');
        cy.get('[data-cy="pinCode"]').type('473660');
        cy.get('[data-cy="adharCardNumber"]').type('12345678912345');
        cy.get('[data-cy="group"]').select('Mathematics');
        cy.get('[data-cy="languageOne"]').should('have.value', 'English');

        // because class is selected above 10th class, so it should be not visible
        cy.get('[data-cy="languageThree"]').should('not.visible');

        cy.get('[data-cy="category"]').select('OBC');
        cy.get('[data-cy="referal"]').type('Remi Patel');

        // able to go upload section
        cy.get('[data-cy="submit"]').click();
        cy.get('[data-cy="upload-section"]').should('be.visible');

        // able to go to thanks section
        // cy.get('[data-cy="final-submit"]').click()
        // cy.get('[data-cy="thank-component"]').should('be.visible');
    })

    it('group select field should be enable after class 10', () => {
        cy.get('[data-cy="class"]').select('11');
        cy.get('[data-cy="group"]').should('not.disabled');

        cy.get('[data-cy="class"]').select('12');
        cy.get('[data-cy="group"]').should('not.disabled');
    })

    it('group select field should be disabled blow or equal to class 10', () => {
        cy.get('[data-cy="class"]').select('10');
        cy.get('[data-cy="group"]').should('be.disabled');

        cy.get('[data-cy="class"]').select('5');
        cy.get('[data-cy="group"]').should('be.disabled');
    })

    it('subjects should be visible on choosing Humanities in group', () => {
        cy.get('[data-cy="class"]').select('11');
        cy.get('[data-cy="group"]').select('Art / Humanities');
        cy.get('[data-cy="diversifiedSubjectOne"]').should('not.disabled');
        cy.get('[data-cy="diversifiedSubjectTwo"]').should('not.disabled');
        cy.get('[data-cy="diversifiedSubjectThree"]').should('not.disabled');
    })

    it('divercifiedSubjects should disable on selection of Mathematics in group', () => {
        cy.get('[data-cy="class"]').select('11');
        cy.get('[data-cy="group"]').select('Mathematics');
        cy.get('[data-cy="diversifiedSubjectOne"]').should('be.disabled');
        cy.get('[data-cy="diversifiedSubjectTwo"]').should('be.disabled');
        cy.get('[data-cy="diversifiedSubjectThree"]').should('be.disabled');
    })

    it('divercifiedSubjects should disable on selection of Agriculture in group', () => {
        cy.get('[data-cy="class"]').select('11');
        cy.get('[data-cy="group"]').select('Agriculture');
        cy.get('[data-cy="diversifiedSubjectOne"]').should('be.disabled');
        cy.get('[data-cy="diversifiedSubjectTwo"]').should('be.disabled');
        cy.get('[data-cy="diversifiedSubjectThree"]').should('be.disabled');
    })
})
