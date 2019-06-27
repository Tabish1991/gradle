import { element,browser,by} from "protractor";
import { async } from "q";

describe('Automation test suite for mashreqbank',()=>{
beforeEach (function(){
  browser.get("https://www.mashreqbank.com/uae/en/personal/home");   

})
 it('verify if navigation bar is displayed on desktop devices and display 9 items',async()=>{

await element.all(by.tagName("div[class='leftLinks']")).each(function(item){
item.element(by.tagName("ul")).getText().then(function(text){
console.log(text);
item.isDisplayed();
expect(true).toBe(true);

})
})
    
}) 

 it('verify if Mashreq News is displayed on the homepage',async()=>{

    await element(by.css("div[class='newsBox']")).getText().then(function(text){
        console.log(text);

         element(by.css("div[class='newsBox']")).isDisplayed();

        expect(true).toBe(true);
        
        
        })
})

it('Verify if link for “Contact Us” is displayed on the homepage.',async()=>{
   await element.all(by.css("div[class='ac-gf-buystrip-info with-4-columns']")).each(function(item){

item.element(by.css("section:nth-child(4)")).getText().then(function(text){
console.log(text);
})

    })

}) 

  it('Verfiy if link for “Contact Us” is clickable on the homepage and it navigates to contact form page.',async()=>{

await element(by.css("a[href='/uae/en/personal/contactus']")).click();
await element(by.id("btnSubmit")).click();


 }) 

  it('Verify if error message is displayed when submitting the form without entering any details.',async()=>{

  await element(by.css("a[href='/uae/en/personal/contactus']")).click();
   await element(by.id("btnSubmit")).click();
    expect(true).toBe(true);

  
  
   }) 

 
     it('Verify if I am looking to the field is a dropdown with 4 choices.',async()=>{

      await element(by.css("a[href='/uae/en/personal/contactus']")).click();
     await  element.all(by.css("select[name='reachoutforproduct']")).each(function(item){
item.element(by.tagName("option")).getText().then(function(text){
console.log(text);
expect(true).toBe(true);
})
})

})


it('Verify if select sub product field is initially empty',async()=>{
 await  element(by.css("a[href='/uae/en/personal/contactus']")).click();
//expect(element.all(by.id("product")).count()).toEqual(0);

}) 


it('Verify if Selecting the Product -Loans- from the dropdown populates the -Select Sub Product-and -Home Loan UAE Resident- is displayed',async()=>{
  await element(by.css("a[href='/uae/en/personal/contactus']")).click();

await element.all(by.css("select[id='need']")).each(function(item){

item.element(by.css("option:nth-child(2)")).click().then(function(){
browser.sleep(5000);

 element.all(by.css("select[id='product']")).each(function(item){

item.element(by.tagName("option:nth-child(4)")).getText().then(function(text){

expect(text).toMatch("Home Loan UAE Resident");
})

})

})
})
})


it('Verify if Entering a number that is less than 7 digits in the Mobile Number field should show an error',async()=>{
  await element(by.css("a[href='/uae/en/personal/contactus']")).click();

 await  element(by.css("input[ng-model='mobile']")).clear();
await element(by.css("input[ng-model='mobile']")).sendKeys("123456");

await  element(by.css("span[ng-show*='form.mobile.$error.minlength']")).getText().then(function(text){
console.log(text);
 expect(text).toMatch("Mobile number should be 7 digit");

}) 


})
it('Verify if Entering a number that is 7 digits should not show an error',async()=>{
  
 await element(by.css("a[href='/uae/en/personal/contactus']")).click();
 await  element(by.css("input[ng-model='mobile']")).clear();

  await element(by.css("input[ng-model='mobile']")).sendKeys("1234567");
  

})
})