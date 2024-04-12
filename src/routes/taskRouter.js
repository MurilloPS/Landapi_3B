const {Router}=require('express');
const router=Router();

const{storetask}=require('../controller/taskController');
router.post('/store/task', storetask);
module.exports=router;