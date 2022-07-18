const express = require('express');
const router = express.Router();
const AssignTask = require("../model/assignTask");

router.post("/assigntask", async (req,res)=>{
    console.log(req.body)
    const { package_name, price, magin_dollor, magin_percentage} = req.body;
    const status = 'activate';
    if (!package_name || !price|| !magin_dollor || !magin_percentage ) {
        return res.status(422).json({ erorr: "Please fill the field properly" });
    }
     try {
        const task = new AssignTask({package_name, price, magin_dollor, magin_percentage, status});
        await task.save();

        res.status(201).json({ message: "Add Succefully" });

    } catch (err) {
        console.log(err);
    }
}) 


router.get('/tasklist',async (req, res) => {
    try {
        const users = await AssignTask.find({})
        res.send(users)
    } catch (err) {
        res.status(400).send(err)

    }
});      

  
 
router.get('/tasklist/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const user = await AssignTask.findById({_id}) 
        res.send(user)
    } catch (err) {
        res.status(500).send(err)
    }
});


router.patch('/update/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const task = await AssignTask.findByIdAndUpdate(_id, req.body, {
            new: true
        } )
        res.send(task)
    } catch (e) {
        res.status(500).send(e)
    }    
});


router.delete('/productdelete/:id', async (req, res) => {
    try {
        const task = await AssignTask.findByIdAndDelete(req.params.id);
        if(!eq.params.id){
            return res.status(400).send();
        } 
        res.send(task)  
    } catch (e) {
        res.status(500).send(e)
    }
});

module.exports = router;  
