describe('Protractor Baby steps', function() {

    function calculate(a,b,operator){
      element(by.model("first")).sendKeys(a);
      element(by.model("second")).sendKeys(b);

      element.all(by.tagName("option")).each(function(item){
        item.getAttribute("value").then(function(values){
          if(values==operator){
            item.click();
          }
        })
      })

      element(by.id("gobutton")).click();

      console.log(a +" " + operator + " " + b );

    }

    it('should add a todo', function() {
      //browser.get('https://angularjs.org');      
      browser.get('http://juliemr.github.io/protractor-demo/');

      calculate(1,2,"ADDITION");

      element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text){
          console.log("Result: " + text);
      });

      calculate(2,3,"SUBTRACTION");
      calculate(4,5,"MODULO");
      calculate(5,5,"MULTIPLICATION");

      element.all(by.repeater("result in memory")).count().then(function(text){
        console.log("Total Rows : " + text)
      });

      element.all(by.repeater("result in memory")).each(function(item){
        item.element(by.css("td:nth-child(3)")).getText().then(function(text){
          console.log("Result: " + text)
        })
      }); 
    });
  });
        
        
     