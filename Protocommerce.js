describe('protocommerce Automation Testing', function() {    
    it('Verify Application Navigate when url hit', function() {
        browser.get('https://qaclickacademy.github.io/protocommerce/');
        browser.driver.manage().window().maximize();
        element(by.css("a[class*='navbar-brand']")).getText().then(function(text){
            console.log("Page Title: " + text);
        })
    })
    
    it('Verify error message when user provided invalid name', function() {
        browser.get('https://qaclickacademy.github.io/protocommerce/');
        browser.driver.manage().window().maximize();
        element(by.name("name")).sendKeys("A").then(function(){
            element(by.name("email")).sendKeys("")
            element(by.css("[class='alert alert-danger']")).getText().then(function(text){
               console.log("Invalid Name Error Message: " + text);
            })        
        })        
    })

    it('Verify error message when user provided invalid email', function() {
        browser.get('https://qaclickacademy.github.io/protocommerce/');
        browser.driver.manage().window().maximize();
        element(by.name("email")).sendKeys("E").then(function(){
            browser.sleep(5000);
            element(by.name("email")).clear();
            browser.sleep(5000);
            //element(by.css("[class='alert alert-danger']")).getText().then(function(text){
            //    console.log("Invalid Email Error Message: " + text);
            //})        
        })        
    })

    it('Verify Submit Form with valid details', function() {
        browser.get('https://qaclickacademy.github.io/protocommerce/');
        browser.driver.manage().window().maximize();
        element(by.name("name")).sendKeys("Abhijit Biradar");
        element(by.name("email")).sendKeys("biradar.abhijit@gmail.com");
        element(by.id("exampleInputPassword1")).sendKeys("4209211");
        element(by.id("exampleCheck1")).click();
        element(by.cssContainingText("[id='exampleFormControlSelect1'] option","Female")).click();
        element(by.buttonText("Submit")).click().then(function(){
            element(by.css("div[class*='success']")).getText().then(function(text){
                console.log("Success Message : "+ text);
            }) 
        })        
    })

    //function to add product to cart
    function selectProduct(product){
        element.all(by.tagName("app-card")).each(function(item){
            item.element(by.css("h4 a")).getText().then(function(text){
                if(text==product){
                    item.element(By.css("button[class*='btn-info']")).click();
                }
            }) 
        })
    }

    it('Verify the product count added in cart', function() {
        browser.get('https://qaclickacademy.github.io/protocommerce/');
        browser.driver.manage().window().maximize();
        
        element(by.linkText("Shop")).click();
        selectProduct("Samsung Note 8");
        selectProduct("iphone X");

        element(by.partialLinkText("Checkout")).getText().then(function(text){
            var res=text.split("(");
            var x=Number(res[1].trim().charAt(0));

            console.log("Total Product Added to Cart: " + x);
        })
    })
})












