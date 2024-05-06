import { Request, Response } from "express";
import User from "../models/user";

// Checks if user exists and creates user if it doesn't and returns user object to the calling client
const createCurrentUser = async (req: Request, res: Response) => {
  try {
    //check if user exists
     const { auth0Id } = req.body;
     const existingUser = await User.findOne({ auth0Id });
    if (existingUser) {
       return res.status(200).send();
    }
    //create user if doesn't exist
     const newUser = new User(req.body);
     await newUser.save();
    
    //Return user object to calling client
     res.status(201).json(newUser.toObject());
    
  } catch (error) {
    console.log(error);
     res.status(500).json({ message: "Error creating user" });
  }
  
};

export default {
  createCurrentUser,
};