import LoginPage from '../pages/LoginPage';
import ProductsPage from '../pages/ProductsPage';

describe('SauceDemo E2E Tests', () => {

  it('should show error on invalid login', () => {
    LoginPage.visit();
    LoginPage.fillUsername('invalid_user');
    LoginPage.fillPassword('wrong_password');
    LoginPage.clickLogin();
    LoginPage.getError().should('contain', 'Username and password do not match');
  });

  it('should login successfully and land on products page', () => {
    cy.login('standard_user', 'secret_sauce');
    ProductsPage.getTitle().should('contain', 'Products');
  });

  it('should open product details page', () => {
    cy.login('standard_user', 'secret_sauce');
    ProductsPage.clickFirstProduct();
    ProductsPage.getProductDetail().should('exist');
  });

});
