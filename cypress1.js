describe('Laliko Spec', () => {
    it('Testcase 1: Register User and Verify Home Page', () => {
      // Visit the website
      cy.visit('http://automationexercise.com')
      
      // Verify that the home page is visible successfully
      cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible')
  
  // 4. Click on 'Signup / Login' button
  
      cy.get('.shop-menu > .nav > :nth-child(4)').click()
  
  
  
  //5. Verify 'New User Signup!' is visible 
  
  cy.contains('New User Signup!').should('be.visible')
  
  
  
  //6. Enter name and email address
  
  cy.get('[data-qa="signup-name"]').type('Lali Goletiani');  
      cy.get('[data-qa="signup-email"]').type('lgoletiani117f311@gmail.com'); 
  
  //7. Click 'Signup' button
  cy.get('[data-qa="signup-button"]').click()
  
  
  cy.contains("Enter Account Information").should("be.visible")
  
  
  
  
  // Step 8: Fill details: Title, Name, Email, Password, Date of Birth
  
  cy.get('[data-qa="name"]').type('Lali Goletiani'); // Name
  //cy.get('[data-qa="signup-email"]')   .type('lgoletiani711@gmail.com');
     
  cy.get('[data-qa="password"]').type('pparoli123'); // Password
  cy.get('form > :nth-child(6)').type('1990-01-01'); // Date of Birth
  
  // Step 9: Select checkbox 'Sign up for our newsletter!'
  
  
  
  
  cy.get('#newsletter').click(); // Sign up for the newsletter
  
  // Step 10: Select checkbox 'Receive special offers from our partners!'
  cy.get('#optin').click(); // Receive special offers
  
  // Step 11: Fill details: First Name, Last Name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
  cy.get('[data-qa="first_name"]').type('Lali'); 
  cy.get('[data-qa="last_name"]').type('Goletiani'); 
  cy.get('[data-qa="company"]').type('lala'); 
  cy.get('[data-qa="address"]').type('123 Main Street'); 
  cy.get('[data-qa="address2"]').type('rrr'); 
  cy.get('[data-qa="country"]').select('United States'); 
  cy.get('[data-qa="state"]').type('ho'); 
  cy.get('[data-qa="city"]').type('Los Angeles'); 
  cy.get('[data-qa="zipcode"]').type('01'); 
  cy.get('[data-qa="mobile_number"]').type('121212'); 
  
  // 13. Click 'Create Account' button
      cy.get('[data-qa="create-account"]').click()
  
  
      cy.get('[data-qa="continue-button"]').click()
  
  
      cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
  
  
    })
  }) 
  
  
  
  
  //test case 2 
  
  describe('Test Case: Login User with Correct Email and Password', () => {
    it('Logs in the user, verifies dashboard, and deletes the account', () => {
      // Step 1 & 2: Launch browser and navigate to the URL
      cy.visit('http://automationexercise.com');
  
      // Step 3: Verify that the home page is visible successfully
      cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible');
  
      // Step 4: Click on 'Signup / Login' button
      cy.get('.shop-menu > .nav > :nth-child(4)').click();
  
      // Step 5: Verify 'Login to your account' is visible
      cy.contains('Login to your account').should('be.visible');
  
      // Step 6: Enter correct email address and password
      cy.get('[data-qa="login-email"]').type('lgoletiani117f311@gmail.com'); 
      cy.get('[data-qa="login-password"]').type('pparoli123'); 
  
      // Step 7: Click 'Login' button
      cy.get('[data-qa="login-button"]').click();
  
      // Step 8: Verify that 'Logged in as username' is visible
      cy.get('[data-qa="signup-name"]').should('be.visible');
  
      // Step 9: Click 'Delete Account' button
      cy.get('.shop-menu > .nav > :nth-child(5) > a').click();
  
      // Step 10: Verify that 'ACCOUNT DELETED!' is visible
      cy.contains('ACCOUNT DELETED!').should('be.visible');
  
      // Optional: Click 'Continue' button after deletion
      cy.get('[data-qa="continue-button"]').should('be.visible').click();
  
  
  
  
  
  
  
  
  
  
    })
  }) 
  
  
  
  
  
  
  
  
  
  
  
  