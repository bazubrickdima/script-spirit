Visitors = new orion.collection('visitor', {
  singularName: 'Visitors', // The name of one of these items
  pluralName: 'Visitors', // The name of more than one of these items
  link: {
    // *
    //  * The text that you want to show in the sidebar.
    //  * The default value is the name of the collection, so
    //  * in this case it is not necessary.

    title: 'Visitors' 
  },
  /**
   * Tabular settings for this collection
   */
  tabular: {
    // here we set which data columns we want to appear on the data table
    // in the CMS panel
    columns: [
       { 
        data: "ipAddress", 
        title: "Ip Address" 
      },
       { 
        data: "browser", 
        title: "Browser" 
      },
       { 
        data: "os", 
        title: "os" 
      },
       { 
        data: "city", 
        title: "city" 
      },
      { 
        data: "country", 
        title: "Country" 
      },
      { 
        data: "referer", 
        title: "Referer" 
      },
      { 
        data: "date", 
        title: "date" 
      }
      /*,
      { 
        data: "ll", 
        title: "Coordinat" 
      }*/

    ]
  }
});


Visitors.attachSchema(new SimpleSchema({
   ipAddress: {
    type: String,
    optional: false,
    label: 'ipAddress ID',
  },
   browser: {
    type: String,
    optional: true,
    label: 'browser ID',
  },
   os: {
    type: String,
    optional: true,
    label: 'os ID',
  },
  city: {
    type: String,
    optional: true,
    label: 'city',
  },
  country: {
    type: String,
    optional: true,
    label: 'country',
  },
   referer: {
    type: String,
    optional: true,
    label: 'referer',
  },
   date: {
    type: String,
    optional: false,
    label: 'date',
  }


 /* ll: {
    type: String,
    optional: true,
    label: 'Coordinat',
  }*/
}));



