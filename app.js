const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const bcrypt = require('bcrypt');
const session = require('express-session');
const Contact = require('./models/contact');
const Feedback = require('./models/feedback');
const Appointment = require('./models/appointment');
const User = require('./models/user');


mongoose.connect('mongodb+srv://root:harsh@cluster0.te3f1.mongodb.net/<deepee-investment>?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const app = express();

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.use (express.static (path.join (__dirname, 'views')));

app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'notagoodsecret' }))

const requireLogin = (req, res, next) => {
    if (!req.session.user_id) {
        return res.redirect('/login')
    }
    next();
}

app.get('/', (req, res) => {
    res.render('index')
});

app.get('/feedback', (req, res) => {
    res.render('testimonials')
});

app.post('/contact', async (req, res) => {
    const contact = new Contact(req.body.contact);
    await contact.save();
    console.log(contact);
    res.redirect('/')
})
app.post('/feedback', async (req, res) => {
    const feedback = new Feedback(req.body.feedback);
    await feedback.save();
    console.log(feedback);
    res.redirect('/feedback')
})
app.post('/appointment', async (req, res) => {
    const appointment = new Appointment(req.body.appointment);
    await appointment.save();
    console.log(appointment);
    res.redirect('/')
})

app.get('/register', (req, res) => {
    res.render('register')
})

app.post('/register', async (req, res) => {
    const { password, username } = req.body;
    const user = new User({ username, password })
    await user.save();
    req.session.user_id = user._id;
    res.redirect('/')
})

app.get('/login', (req, res) => {
    res.render('login')
})
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const foundUser = await User.findAndValidate(username, password);
    if (foundUser) {
        req.session.user_id = foundUser._id;
        res.redirect('/admin');
    }
    else {
        res.redirect('/login')
    }
})


app.get('/admin', requireLogin, (req, res) => {
    res.render('admin')
})
app.get('/admin/appointment', async (req, res) => {
    const appointments = await Appointment.find({});
    res.render('applications/appointment', { appointments })
});
app.get('/admin/contact', async (req, res) => {
    const contacts = await Contact.find({});
    res.render('applications/contact', { contacts })
});
app.get('/admin/feedback', async (req, res) => {
    const feedbacks = await Feedback.find({});
    res.render('applications/feedback', { feedbacks })
});
app.post('/logout', (req, res) => {
    req.session.user_id = null;
    // req.session.destroy();
    res.redirect('/login');
})


app.listen(3000, () => {
    console.log('Serving on port 3000')
})