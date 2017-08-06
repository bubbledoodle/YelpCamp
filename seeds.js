var mongoose    = require("mongoose"),
    Campground  = require("./models/campground"),
    Comment     = require("./models/comment");
    
var data = [
        {
            name: "Cloud's camp",
            image:"http://www.visitnc.com/contents/imgcrop/60726/1200/630/preview",
            description:"North Carolina is a camper's paradise. Whether you're looking for a family campground, RV park, cabin rental or more primitive accommodations, you can find it here. Set up camp near rambling rivers and waterfalls in our state parks and national forests. Spend a quiet night among wild horses at Shackleford Banks – or all by yourself at Hammocks Beach State Park. For adventure with the luxuries of home, give glamping – or 'glamour camping' – a try in Bryson City, Moravian Falls or Banner Elk."
        },
        {
            name: "Wild Bay",
            image:"https://media.deseretdigital.com/file/7d35e73727?crop=top:0|left:0|width:400|height:284|gravity:Center&quality=55&interlace=none&resize=height:284&order=resize,crop&c=14&a=86335ee9",
            description:"With so many camping opportunities available, one of the most difficult aspects of Utah camping can be deciding where to go. The easiest way to narrow your selection is to first determine what you want to do there: fish, hike, mountain bike, boat, raft, etc. Some areas, like the national parks, lend themselves more to hiking than fishing. Other camping areas offer both. Many of the camping areas require that you make a reservation or buy a permit to camp there. Limits on length of stay may vary as well, so make sure you inquire when you look into reservations. Next, determine what amenities you want in your preferred campsite. Amenities will vary from campground to campground. Do you want an improved campsite with barbecue grills, running water and toilets? Or would you prefer an unimproved campground with only a fire pit. (Beware: Some campgrounds don't allow open pit fires.) Some facilities may even include hot showers and full utility hookups."
        },
        {
            name:"Mount Dickerman",
            image:"http://images.huffingtonpost.com/2015-03-19-1426803829-9735139-8f524af8ef2b50a4dab24786229c28c11.jpg",
            description:"his eight-mile roundtrip trek through old-growth forests to the snowy mountaintop of Mount Dickerman rewards you with breathtaking views of the of the Cascade region. I highly recommend waking up early to see the sunrise over Sloan Peak."
        }
    ];  // here can have a problem, you cant reload the page at each camp view page, for you deleted the data every single time when restart the server.
function seedDB(){
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        } else {
            console.log("removed campground");
        }
    //     data.forEach(function(seed){
    //         Campground.create(seed, function(err, campground){
    //             if(err){
    //                 console.log(err);
    //             } else {
    //                 console.log("added a campground");
    //                 Comment.create(
    //                     {
    //                         text:"this place is great, but I wish there was internet",
    //                         author:"Homer"
    //                     }, function(err, comment){
    //                         if(err){
    //                             console.log(err);
    //                         } else {
    //                             campground.comments.push(comment);
    //                             campground.save();
    //                             console.log("created new comment");
    //                         }
    //                     }
    //                 )
    //             }
    //         });
    //     })
    });
    // add few camp

    
    
    // add comments
}
module.exports = seedDB;

