var express = require('express'); // each file has its own local scope
var router = express.Router();

var todoItems = [  // fake database
	{id: 1, desc: 'foo'},
	{id: 2, desc: 'bar'},
	{id: 3, desc: 'baz'}
];

router.get('/', function(req, res){
	res.render('index',{
		title: 'My app',
		items: todoItems
	});
}); 

router.post('/add', function(req, res){ // similar to $_POST['...']
	var newItem = req.body.newItem;
	todoItems.push({
		id: todoItems.length + 1,
		desc: newItem
	});
	res.redirect('/');  // sends data back to '/' for display all items with the new on 
						// do a redirect after a post to avoid popups.
});

module.exports = router;











