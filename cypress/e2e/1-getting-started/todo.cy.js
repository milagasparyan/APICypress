

describe('network', () => {

  it('example1', () => {

     cy.visit("https://www.demoblaze.com/")

     cy.request({
         method: "POST",
         url: "https://api.demoblaze.com/addtocart",
         body: {"id":"e309ef27-eea0-da1d-710a-3775eba9ca16","cookie":"bWlsYWdhc3Bhcnlhbjc3NzE2NTkxNjM=","prod_id":1,"flag":true}
     })

      cy.request({
          method: "POST",
          url: "https://api.demoblaze.com/viewcart",
          body: {"cookie":"bWlsYWdhc3Bhcnlhbjc3NzE2NTkxNjM=","flag":true}
      }).its("body")
      cy.wait(1000);




  })
  })


