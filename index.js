require('dotenv').config();

const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const session = require('express-session');
const multer = require('multer');
const passport = require('passport');
const flash = require('express-flash');
const db = require('./src/modals/db');
const homeRoutes = require('./src/routes/homeRoutes');
app.set('view engine', 'ejs');
app.use(express.static('public'));
const authRoutes = require('./src/routes/authRoutes');
// const loginroutes = require('./src/routes/loginroutes');
const adminroutes = require('./src/routes/adminRoutes');
const allprojectRoutes = require('./src/routes/allprojectRoutes');
const allphotoRoutes = require('./src/routes/allphotoRoutes');
const allblogsRoutes = require('./src/routes/allblogsRoutes');
const enquriyRoutes = require('./src/routes/enquriyRoutes');
const addprojectRouter = require('./src/routes/addprojectRouter');
const addphotoRouter = require('./src/routes/addphotoRouter');
const addblogRouter = require('./src/routes/addblogRouter');
const editprojectRouter = require('./src/routes/editprojectRouter');
const editblogRouter = require('./src/routes/editblogRouter');
const deleteprojectRouter = require('./src/routes/deleteprojectRouter');
const deleteblogRouter = require('./src/routes/deleteblogRouter');
const gallerydeleteRouter = require('./src/routes/gallerydeleteRouter');
const deleteenquriy = require('./src/routes/deleteenquriy');
const contactRouter = require('./src/routes/contactRouter');
const aboutRouter = require('./src/routes/aboutRouter');
const constructionRouter = require('./src/routes/constructionRouter');
const realestateRouter = require('./src/routes/realestateRouter');
const softwareRouter = require('./src/routes/softwareRouter');
const transportRouter = require('./src/routes/transportRouter');
const businessRouter = require('./src/routes/businessRouter');
const waterairRouter = require('./src/routes/water&airRouter');
const blogpageRouter = require('./src/routes/blogpageRouter');
const gallerypageRouter = require('./src/routes/gallerypageRouter');
const viewprofileRouter = require('./src/routes/viewprofileRouter');
const editprofileRouter = require('./src/routes/editprofileRouter');
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false,
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

require('./src/modals/passport');
app.use('/auth', authRoutes);
app.use('/', homeRoutes);
app.use('/admin', adminroutes);
app.use('/allprojects', allprojectRoutes);
app.use('/allphotos', allphotoRoutes);
app.use('/allblogs', allblogsRoutes);
app.use('/enquriy', enquriyRoutes);
app.use('/addprojects', addprojectRouter);
app.use('/addphotos', addphotoRouter);
app.use('/addblogs', addblogRouter);
app.use('/editprojects', editprojectRouter);
app.use('/editblogs', editblogRouter);
app.use('/deleteprojects', deleteprojectRouter);
app.use('/deleteblogs', deleteblogRouter);
app.use('/deletephotos', gallerydeleteRouter);
app.use('/deleteenquriy', deleteenquriy);
app.use('/contact', contactRouter);
app.use('/about', aboutRouter);
app.use('/construction', constructionRouter);
app.use('/realestate', realestateRouter);
app.use('/software', softwareRouter);
app.use('/transport', transportRouter);
app.use('/business', businessRouter);
app.use('/waterair', waterairRouter);
app.use('/blogpage', blogpageRouter);
app.use('/gallerypage', gallerypageRouter);
app.use('/viewprofile', viewprofileRouter);
app.use('/editprofile', editprofileRouter);
// app.use('/login', loginroutes);
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    process.exit(1);
  }
  console.log('Connected to MySQL database');
});

const PORT = process.env.PORT_ADDRESS ;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});  