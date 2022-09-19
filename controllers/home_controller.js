const To_do_app      = require('../models/to_do_app');

//get all task
module.exports.home = function(req,res){
    To_do_app.find({},function(err,to_do_apps){
        console.log(to_do_apps);
        if(err){
            console.log('error in fetching contact from db');
            return ;
        }
        return res.render('home',
        {
            to_do : to_do_apps
        });
    })
}

//create task
module.exports.createTodo = function(req,res){

    To_do_app.create({
        description  : req.body.description,
        category     : req.body.category,
        date         : req.body.date
    }, function(err, newTask){
        if(err){
            console.log('error in creating a contact');
            return;
        }
        console.log('*******', newTask);
        return res.redirect('back');
    });
 }

 //delete multiple task
 module.exports.deleteTodo = function(req,res){
    let id = req.body.checkbox;
    for (let i of id){
        To_do_app.findByIdAndDelete(i, function(err){
            if(err){
                console.log('error in deleting an object from database');
                return;
            }
        });
    }
    return res.redirect('back');
 } 

 // delete single task
 module.exports.deleteSingleTask = function(req,res){
    let tid = req.query.id;
    To_do_app.findByIdAndDelete(tid, function(err){
        if(err){
            console.log('error in deleting in object from database');
            return;
        }
    });
    return res.redirect('back');
 }