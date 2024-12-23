const express = require('express'); // Corrected 'Request' to 'require'
const bodyParser = require('body-parser'); // Corrected 'Request' to 'require'
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Corrected to serve static files (e.g., CSS)
app.set('view engine', 'ejs'); // Corrected typo in comment

let todos = []; // Array to store tasks

// Routes
app.get('/', (req, res) => {
    res.render('index', { todos }); // Fixed spacing issue
});
//ตัวเพิ่ม
app.post("/add", (req, res)=>{
    const newToDo = req.body.todo;
    if(newToDo) todos.push(newToDo);
    res.redirect("/");
})
// ตัวลบ
app.post("/delete", (req, res) => {
    const index = req.body.index; // Convert index to a number
    if (index >= 0 && index < todos.length) {
        todos.splice(index, 1); // Remove the task
    }
    res.redirect("/"); // Redirect to home
});



// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
