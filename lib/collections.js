Visitors = new orion.collection('visitor', {
  singularName: 'Visitors', // The name of one of these items
  pluralName: 'Visitors', // The name of more than one of these items
  link: {
    title: 'Visitors' 
  },

  tabular: {

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
}));

FullDay = new orion.collection('FullDay', {
  singularName: 'FullDay', // The name of one of these items
  pluralName: 'FullDay', // The name of more than one of these items
  link: {
    title: 'FullDay' 
  },

  tabular: {

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
    ]
  }
});


FullDay.attachSchema(new SimpleSchema({
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
}));



CountVisits = new orion.collection('CountVisits', {
  singularName: 'CountVisits', // The name of one of these items
  pluralName: 'CountVisits', // The name of more than one of these items
  link: {
    title: 'CountVisits' 
  },

  tabular: {

    columns: [
       { 
        data: "count", 
        title: "Count" 
      },
       { 
        data: "date", 
        title: "Date" 
      }
    ]
  }
});


CountVisits.attachSchema(new SimpleSchema({
    count: {
    type: Number,
    optional: false,
    label: 'count',
  },
   date: {
    type: String,
    optional: false,
    label: 'date',
  }
}));






