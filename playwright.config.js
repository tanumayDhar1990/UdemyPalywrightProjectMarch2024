// @ts-check
const { devices } = require('@playwright/test');

const config = {
  testDir: './tests',
  retries: 0,
  workers: 4,

  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {

    timeout: 5000
  },

  reporter: 'html',

  projects:[


    {
      name: 'safari',
      use: {

        browserName: 'webkit',
        headless: false,
        screenshot: 'on',
        trace: 'on',//off,on
        //viewport: {width: 700 , height: 700}
        ...devices ['iPhone 11'],
      }
      },
      {
        name: 'chromium',
        use: {
  
          browserName: 'chromium',
          headless: false,
          screenshot: 'on',
          video: 'retain-on-failure',
          //screenshot: 'only-on-failure',
          trace: 'on',//off,on
          //viewport: {width: 700 , height: 700}
          ...devices ['iPhone 11'],
      
        },

    }


  ]
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  
};

module.exports = config;
