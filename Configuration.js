exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['ProtoCommerce.js'],

    capabilities: {
      'browserName': 'chrome'      
    }
  };