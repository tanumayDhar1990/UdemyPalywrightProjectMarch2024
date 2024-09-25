class LoginPage{


constructor(page)
{

    this.page = page;
    this.userName = page.locator("#userEmail");
    this.passWord = page.locator("//input[@id='userPassword']"); //by using xpath rule .
    this.signInbutton = page.locator("#login");

}
    async goToPage()    
    {   

        await this.page.goto("https://rahulshettyacademy.com/client/");
    }   

    async validLogin(username , password) 
    {

        await this.userName.fill(username);
        await this.passWord.fill(password);
        await this.signInbutton.click();
        await this.page.waitForLoadState('networkidle');

    }

}
module.exports = {LoginPage}; //to make available/ accessible  in entire project  
