class ProductsPage {
    getTitle() {
      return cy.get('.title'); // Products
    }
  
    clickFirstProduct() {
      cy.get('.inventory_item').first().find('a').click();
    }
  
    getProductDetail() {
      return cy.get('.inventory_details_name');
    }
  }
  
  export default new ProductsPage();
  