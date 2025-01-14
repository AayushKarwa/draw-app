import express from "express"
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "@repo/backend-common/config";
import { middleware } from "./middleware";
import {createRoomSchema, signInSchema, userSchema} from "@repo/common/types"

const app = express();

app.post("/signup",(req,res)=>{

    const data = userSchema.safeParse(req.body);
    if(!data.success){
         res.json({
            message: "Incorrect Inputs"
        })
        return;
    }


})

app.post("/signin",(req,res)=>{

    const data = signInSchema.safeParse(req.body);
    if(!data.success){
         res.json({
            message: "Incorrect Inputs"
        })
        return;
    }

    const userId = 1;
    const token = jwt.sign({
        userId
    },JWT_SECRET);

    res.json({
        token
    })
})

app.post("/room",middleware,(req,res)=>{

    const data = createRoomSchema.safeParse(req.body);
    if(!data.success){
         res.json({
            message: "Incorrect Inputs"
        })
        return;
    }

    res.json({
        roomid: 123
    })

})

app.listen(3005,()=>{
    console.log("Server running on 3005...")
})