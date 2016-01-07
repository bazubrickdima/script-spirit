/*
Visit = new Mongo.Collection('visit');*/
Posts = new orion.collection('posts', {
  singularName: 'post', // The name of one of these items
  pluralName: 'posts', // The name of more than one of these items
  link: {
    // *
    //  * The text that you want to show in the sidebar.
    //  * The default value is the name of the collection, so
    //  * in this case it is not necessary.

    title: 'Posts-fak' 
  },
  /**
   * Tabular settings for this collection
   */
  tabular: {
    // here we set which data columns we want to appear on the data table
    // in the CMS panel
    columns: [
      { 
        data: "userId", 
        title: "UserId" 
      },{ 
        data: "postId", 
        title: "ID" 
      },{ 
        data: "author", 
        title: "Author" 
      },
      {
      	data: "submitted",
      	title:"submit"
      }
    ]
  }
});
Posts.insert({
    postId: 'telescopeId',
    userId: 123,
    author: 'leleka',
    submitted: 'asad',
    body: 'Interesting project Sacha, can I get involved?'
  });













Posts.attachSchema(new SimpleSchema({
  // We use `label` to put a custom label for this form field
  // Otherwise it would default to `Title`
  // 'optional: false' means that this field is required
  // If it's blank, the form won't submit and you'll get a red error message
  // 'type' is where you can set the expected data type for the 'title' key's value
  postId: {
    type: String,
    optional: false,
    label: 'Post Title'
  },
  // regEx will validate this form field according to a RegEx for a URL
  userId: {
    type: Number,
    optional: false,
    label: 'URL',
    regEx: SimpleSchema.RegEx.Url
  },
  // autoform determines other aspects for how the form is generated
  // In this case we're making this field hidden from view
  author: {
    type: String,
    optional: false,
    autoform: {
      type: "hidden",
      label: false
    },
  }
}));












Comments = new orion.collection('comments', {
  singularName: 'comment', // The name of one of these items
  pluralName: 'comments', // The name of more than one of these items
  link: {
    // *
    //  * The text that you want to show in the sidebar.
    //  * The default value is the name of the collection, so
    //  * in this case it is not necessary.

    title: 'Comments' 
  },
  /**
   * Tabular settings for this collection
   */
  tabular: {
    // here we set which data columns we want to appear on the data table
    // in the CMS panel
    columns: [
      { 
        data: "author", 
        title: "Author" 
      },{ 
        data: "postId", 
        title: "Post ID" 
      },{ 
        data: "submitted", 
        title: "Submitted" 
      },
    ]
  }
});



Comments.attachSchema(new SimpleSchema({
  postId: {
    type: String,
    optional: false,
    label: 'Post ID'
  },
  userId: {
    type: String,
    optional: false,
    label: 'User ID',
  },
  author: {
    type: String,
    optional: false,
  },
  submitted: {
    type: String,
    optional: false,
  },
  body: {
    type: String,
    optional: false,
  }
}));



Comments.insert({
    postId: 'asda123',
    userId: 'aaaaa',
    author: 'tom.profile.name',
    submitted: 'agol',
    body: 'Interesting project Sacha, can I get involved?'
  });