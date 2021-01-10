describe('Protractor Alert steps', function() {
    it('Open Non Angular Website alert', function() {
        browser.waitForAngularEnabled(false);
        browser.get('http://qaclickacademy.com/practice.php');
        element(by.id("confirmbtn")).click();
        browser.switchTo().alert().accept().then(function(){
            browser.sleep(5000);
            console.log("Alert Accepted");
        });
    })
})