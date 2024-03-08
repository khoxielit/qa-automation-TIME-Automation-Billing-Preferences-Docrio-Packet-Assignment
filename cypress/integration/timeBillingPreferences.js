import 'cypress-file-upload';
import mattersHomepageTime from "../support/helpers/mattersHomeTime";
import billingPrefs from "../support/static/billingPrefs"

describe('TIME - Billing Preferences Test', () => {
    before('Login', () => {
        cy.login('time-qa-automation-dev-config.json');
        cy.waitForStableDOM({ pollInterval: 1000, timeout: 30000 })
        cy.timeSearch();
    })

    after('Logout', () => {
        cy.logout();
    })

    it('Search and validate the Matters Name', () => {
        cy.xpath(mattersHomepageTime.credentialsContainer.MattersHeading).contains(billingPrefs.matters.matterFileName);
    })

    /*

    it('Navigate to Assignments Accordian and Assert Header Text', () => {
        cy.waitForStableDOM({ pollInterval: 1000, timeout: 30000 });
        cy.xpath(mattersHomepageTime.billingPreferences.assignmentsAccordion).click();
        cy.xpath(mattersHomepageTime.billingPreferences.assignmentText, { timeout: 60000 }).last().contains(billingPrefs.billingPreferencesTab.assignmentsText);
    })

    it('Locate Assignment Button, Open Modal, and Locate All Assignments and Practice Group Headers, then Close Modal', () => {
        cy.viewAssigments();
    })

    it('Open "Update Assignment" Modal', () => {
        cy.xpath(mattersHomepageTime.billingPrefsAssignments.updateAssignmentButton).click();
    })

    it('Locate Title and Attempt to Save', () => {
        cy.saveErrorMessage();
    })

    it('Locate Current Date Assignment and Make Updates', () => {
        cy.xpath(mattersHomepageTime.billingPrefsAssignments.currentAssignmentHeader);
        cy.xpath(mattersHomepageTime.billingPrefsAssignments.currentDateElement).click().type(billingPrefs.billingPreferencesTab.randomDate);
    })

    it('Locate office and Make updates', () => {
        cy.waitForStableDOM({ pollInterval: 1000, timeout: 30000 });
        cy.xpath(mattersHomepageTime.billingPrefsAssignments.currentAssignmentTitle).click();
        cy.xpath(mattersHomepageTime.billingPrefsAssignments.officeElement).click().type(billingPrefs.billingPreferencesTab.officeNameValue);
        cy.xpath(mattersHomepageTime.billingPrefsAssignments.officeResultValue).click();
    })

    it('Attempt to Save and Asser Error Toast Exist', () => {
        cy.xpath(mattersHomepageTime.billingPrefsAssignments.saveButton).click();
        cy.xpath(mattersHomepageTime.billingPrefsAssignments.saveButton).contains(billingPrefs.billingPreferencesTab.saveValue)
    })

    //phase 2: include steps to create a new matter, then save changes made > after try to make changes again and expect error toast
    // also add in error toast element assertion
    it('Close Out of the Modal', () => {
        cy.xpath(mattersHomepageTime.billingPrefsAssignments.assignmentCancelButton).click();
    })

    it('Navigate to Timekeepers and Billers Accordian and Assert Header Text', () => {
        cy.waitForStableDOM({ pollInterval: 1000, timeout: 30000 });
        cy.xpath(mattersHomepageTime.billingPreferences.timekeepAccordion).click();
        cy.xpath(mattersHomepageTime.billingPreferences.timekeepText, { timeout: 60000 }).last().contains(billingPrefs.billingPreferencesTab.timekeepersText);
    })

    it('Search for All 5 Table Headers', () => {
        cy.waitForStableDOM({ pollInterval: 1000, timeout: 30000 });         
        cy.xpath(mattersHomepageTime.billingPreferences.typeTimeKeeperHeader, { timeout: 60000 }).invoke('text').should('include', billingPrefs.billingPreferencesTab.typeTimekeeperText);
        cy.xpath(mattersHomepageTime.billingPreferences.nameTimekeeperHeader, { timeout: 60000 }).invoke('text').should('include', billingPrefs.billingPreferencesTab.nameTimekeeperText);
        cy.xpath(mattersHomepageTime.billingPreferences.classificationTimekeeperHeader, { timeout: 60000 }).invoke('text').should('include', billingPrefs.billingPreferencesTab.classificationTimekeeperText);
        cy.xpath(mattersHomepageTime.billingPreferences.respAttorneyTimekeeperHeader, { timeout: 60000 }).invoke('text').should('include', billingPrefs.billingPreferencesTab.respAttorneyTimekeeperText);
        cy.xpath(mattersHomepageTime.billingPreferences.actionTimekeeperHeader, { timeout: 60000 }).invoke('text').should('include', billingPrefs.billingPreferencesTab.actionTimekeeperText);
    })

    it('Assert No Timekeepers and Billers Message Exists', () => {
        cy.xpath(mattersHomepageTime.billingPreferences.noUsersAssignedText).contains(billingPrefs.billingPreferencesTab.noUserText);
    })

    it('Assert No Timekeepers and Billers Warning Icon Exists', () => {
        cy.xpath(mattersHomepageTime.billingPreferences.noUserAssignedIcon).click();
        cy.xpath(mattersHomepageTime.billingPreferences.noUserWarningPopUp, { timeout: 60000 }).contains(billingPrefs.billingPreferencesTab.noUserPopUp);
    })

    it('Locate and click "+Add TimeKeeper or Biller" Button then Click Cancel', () => {
        cy.waitForStableDOM({ pollInterval: 1000, timeout: 30000 });
        cy.xpath(mattersHomepageTime.billingPreferences.addTimekeeperButton).click();
        cy.xpath(mattersHomepageTime.billingPreferences.cancelTimekeeperButton).click();
    })

    it('Locate and click "+Add TimeKeeper or Biller" Button then Select Timekeeper Option', () => {
        cy.xpath(mattersHomepageTime.billingPreferences.addTimekeeperButton).click();
        cy.selectTimekeeper();
    })

    it('Locate then Select a Name', () => {
        cy.selectSysAdmin();
    })

    it('Select Responsible Attorney', () => {
        cy.waitForStableDOM({ pollInterval: 1000, timeout: 30000 });
        cy.xpath(mattersHomepageTime.billingPreferences.checkboxTimekeeper).click();
    })

    it('Save New Timekeeper Record', () => {
        cy.waitForStableDOM({ pollInterval: 1000, timeout: 30000 });
        cy.xpath(mattersHomepageTime.billingPreferences.saveTimekeeperButton).click();
    })

    it('Delete Timekeeper Record', () => {
        cy.waitForStableDOM({ pollInterval: 1000, timeout: 30000 });
        cy.xpath(mattersHomepageTime.billingPreferences.deleteTimekeeperRecord).click();
        cy.xpath(mattersHomepageTime.billingPreferences.confirmDelete).click();
        cy.waitForStableDOM({ pollInterval: 1000, timeout: 30000 });
    })

    it('Locate and click "+Add TimeKeeper or Biller" Button then Select Biller Option', () => {
        cy.xpath(mattersHomepageTime.billingPreferences.addTimekeeperButton).click();
        cy.selectBiller();
    })

    it('Locate then Select System Admin Name', () => {
        cy.selectSysAdmin();
    })
    it('Save New Biller Record', () => {
        cy.waitForStableDOM({ pollInterval: 1000, timeout: 30000 });
        cy.xpath(mattersHomepageTime.billingPreferences.saveTimekeeperButton).click();
    })

    
    //add in here once the warning icon issue is corrected
    //as of 03/06 the warning icon will not go away when a user is added
    

    it('Delete Biller Record - But Cancel First', () => {
        cy.waitForStableDOM({ pollInterval: 1000, timeout: 30000 });
        cy.xpath(mattersHomepageTime.billingPreferences.deleteTimekeeperRecord).click();
        cy.xpath(mattersHomepageTime.billingPreferences.cancelRemoveUserButton).click();
        cy.waitForStableDOM({ pollInterval: 1000, timeout: 30000 });
    })

    it('Delete Biller Record', () => {
        cy.waitForStableDOM({ pollInterval: 1000, timeout: 30000 });
        cy.xpath(mattersHomepageTime.billingPreferences.deleteTimekeeperRecord).click();
        cy.xpath(mattersHomepageTime.billingPreferences.confirmDelete).click();
        cy.waitForStableDOM({ pollInterval: 1000, timeout: 30000 });
    })


    it('Navigate to Payor Assignments and Bill Recipients Accordian and Assert Header Text', () => {
        cy.waitForStableDOM({ pollInterval: 1000, timeout: 30000 });
        cy.xpath(mattersHomepageTime.billingPreferences.payorAccordion).click();
        cy.xpath(mattersHomepageTime.billingPreferences.payorText, { timeout: 60000 }).last().contains(billingPrefs.billingPreferencesTab.payorsText);
    })

    */

    it('Navigate to Docrio Packet Assignment Accordian and Assert Header Text', () => {
        cy.waitForStableDOM({ pollInterval: 1000, timeout: 30000 });
        cy.xpath(mattersHomepageTime.billingPreferences.docrioPacketAccordion).click();
        cy.xpath(mattersHomepageTime.billingPreferences.docrioPacketText, { timeout: 60000 }).last().contains(billingPrefs.billingPreferencesTab.docrioPacketsText);
    })

    // locate the warning sign (optional)
    // locate the pencil icon
    //

    it('Navigate to LEDES File Accordian and Assert Header Text', () => {
        cy.waitForStableDOM({ pollInterval: 1000, timeout: 30000 });
        cy.xpath(mattersHomepageTime.billingPreferences.ledesFileAccordion).click();
        cy.xpath(mattersHomepageTime.billingPreferences.ledesFileText, { timeout: 60000 }).last().contains(billingPrefs.billingPreferencesTab.ledesFilesText);
    })

    it('Navigate to Billing Type and Frequency and Assert Header Text', () => {
        cy.waitForStableDOM({ pollInterval: 1000, timeout: 30000 });
        cy.xpath(mattersHomepageTime.billingPreferences.billTypeAccordion).click();
        cy.xpath(mattersHomepageTime.billingPreferences.billTypeText, { timeout: 60000 }).last().contains(billingPrefs.billingPreferencesTab.billTypesText);
    })

    it('Navigate to Bill Code Sets and Assert Header Text', () => {
        cy.waitForStableDOM({ pollInterval: 1000, timeout: 30000 });
        cy.xpath(mattersHomepageTime.billingPreferences.billCodeAccordion).click();
        cy.xpath(mattersHomepageTime.billingPreferences.billCodeText, { timeout: 60000 }).last().contains(billingPrefs.billingPreferencesTab.billCodesText);
    })
})
