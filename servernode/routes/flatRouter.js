const express=require('express')
const flats=require('../models/flats')
const router=express.Router();


router.get('/getprop',async (req,res)=>{//for buyer's view
    const {loc,cty,sqft,prc,bhk}=req.query;

    flats.find({City:cty,SQUARE_FT:{$lte:sqft},PRICE:{$lte:prc},BHK_NO:bhk,ADDRESS:{$regex:loc,$options : 'i'}},function(err,docs){
        if(err)
        {
            console.log(err);
            res.status(400).json('error'+e)
        }
        else{
            // console.log(docs);
            res.json(docs.splice(0,50))
        }
    })
})

router.get('/getdetails',(req,res)=>{//for buyer's view detailed view

    const {propid}=req.query;

    flats.find({_id:propid},function(err,docs){
        if(err)
        {
            res.status(400).json('error'+err)
        }
        else{
            res.json(docs)
        }
    })
})


router.post("/insert", async (req, res) => {
    const POSTED_BY = req.body.POSTED_BY;
    const UNDER_CONSTRUCTION = req.body.UNDER_CONSTRUCTION;
    const BHK_NO = req.body.BHK_NO;
    const SQUARE_FT = req.body.SQUARE_FT;
    const ADDRESS = req.body.ADDRESS;
    const TARGET_PRICE = req.body.PRICE;
    const City = req.body.City;
    const data = new flats({
        POSTED_BY: POSTED_BY,
        UNDER_CONSTRUCTION: UNDER_CONSTRUCTION,
        BHK_NO: BHK_NO,
        SQUARE_FT: SQUARE_FT,
        ADDRESS: ADDRESS,
        PRICE: TARGET_PRICE,
        City: City
    })
    try {
        data.save();
        res.send("inserted data");
    } catch (error) {
        console.error(error);
    }
});

router.put("/update", async (req, res) => {

    console.log(req.body.newTarget_price);
    const TARGET_PRICE = req.body.newTarget_price;
    const id = req.body.id;
    try {
        await flats.findById(id, (err, updated) => {
        updated.PRICE = TARGET_PRICE;
        updated.save();
        res.send("updated");
        })
    } catch (err) {
        console.error(err);
    }
});

router.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    await flats.findByIdAndRemove(id).exec();
    res.send('deleted');
})

router.get("/readadmin", async (req, res) => {
    console.log('reading..',req.query)
    const {username,loc}=req.query;
     flats.find({POSTED_BY:username,ADDRESS:{$regex:loc,$options : 'i'}}, (err, result) => { 
        if (err) {
            res.send(err)
        }
        return res.send(result.splice(0,50))
    });
});

router.get("/read", async (req, res) => { //for querying details in seller's view
    const {username}=req.query;
     flats.find({POSTED_BY:username}, (err, result) => {
        if (err) {
            res.send(err)
        }
        return res.send(result.splice(0,50))
    });
});


module.exports=router;