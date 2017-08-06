var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    mongoose        = require("mongoose"),
    passport        = require("passport"),
    LocalStrategy   = require("passport-local"),
    flash           = require("connect-flash"),
    Campground      = require("./models/campground"),
    methodOverride  = require("method-override"),
    Comment         = require("./models/comment"),
    User            = require("./models/user");
    //seedDB          = require("./seeds");

var commentRoute    = require("./routes/comments"),
    campgroundRoute = require("./routes/campgrounds"),
    authRoute       = require("./routes/index");

//seedDB();
//mongoose.connect("mongodb://localhost/yelp_camp");
mongoose.connect("mongodb://syliang:12345689@ds035826.mlab.com:35826/yelpcamp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());

app.use(require("express-session")({
    secret: "Once again Rusty wins cutest dog!",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   res.locals.error = req.flash("error");
   res.locals.success = req.flash("success");
   next();
});

app.use(authRoute);
app.use("/campgrounds", campgroundRoute);
app.use("/campgrounds/:id/comments", commentRoute);

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("YelpCamp application started!!!"); 
});