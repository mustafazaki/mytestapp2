postsCollections  = new Meteor.Collection("posts");



if (Meteor.isClient) {

Template.posts.events({

    'click #PostSave': function () {
        var posttitle = $("#posttitle").val();
     //   Messages.insert({text: textmsg});


        console.log(posttitle);
    }

})

}

if (Meteor.isServer) {


    postsCollections.allow({

        'insert': function (userId, doc) {

            return true;

        }





    });

}