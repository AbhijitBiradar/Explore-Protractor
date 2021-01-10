describe('Protractor Non Angular Sync steps',function() {  
    it('Verify Non Angular Website Sync Steps',function() {
        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();
        browser.get("http://www.itgeared.com/demo/1506-ajax-loading.html");
        element(by.css("a[href*='loadAjax']")).click();
        var ec=protractor.ExpectedConditions;
        browser.wait(ec.invisibilityOf(element(by.id("loader"))),8000);
        element(by.id("results")).getText().then(function(text){
            console.log("Text: " + text);
        })
    })
})