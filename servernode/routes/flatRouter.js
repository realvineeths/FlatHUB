const express=require('express')
const flats=require('../models/flats')
const router=express.Router();


router.get('/getprop',async (req,res)=>{//for buyer's view

    const {loc, cty, sqft, prc, bhk} = req.query;
    console.log('in buyers');
    flats.find({
        City: cty, 
        SQUARE_FT: {$lte: sqft}, 
        PRICE: {$lte: prc}, 
        BHK_NO: bhk, 
        ADDRESS: {$regex: loc, $options: 'i'}
    }).sort( { SQUARE_FT : -1, PRICE: 1 } ) //sorting the results, such that square_ft  in descending and price in ascending order.
    .then(docs => res.json(docs.splice(0, 50)))
    .catch(err => {
        console.log(err);
        res.status(400).json('error'+err)
    });

})

router.get('/getdetails',async(req,res)=>{//for buyer's view detailed view

    const {propid} = req.query;
    flats.find({_id: propid})
    .then(docs => res.json(docs))
    .catch(err => res.status(400).json('error'+err));
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

    const TARGET_PRICE = req.body.newTarget_price;
    const id = req.body.id;

    flats.findById(id)
    .then(updated => {
        updated.PRICE = TARGET_PRICE;
        updated.save()
        .then(() => res.send("updated"))
        .catch(err => console.error(err));
    })
    .catch(err => console.error(err));
});

router.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    await flats.findByIdAndRemove(id).exec();
    res.send('deleted');
})

router.get("/readadmin", async (req, res) => {
    const {username, loc} = req.query;
    flats.find({POSTED_BY: username, ADDRESS: {$regex: loc, $options : 'i'}})
    .then(result => res.send(result.splice(0, 50)))
    .catch(err => res.send(err));
    }
);

router.get("/read", async (req, res) => { //for querying details in seller's view
    const {username} = req.query;
    console.log('in seller query', username);

    flats.find({POSTED_BY: username})
    .then(result => res.send(result.splice(0, 50)))
    .catch(error => res.send(error));
    }
);


module.exports=router;