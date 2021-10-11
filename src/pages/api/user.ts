import { NextApiRequest, NextApiResponse } from "next";

export default function User (request: NextApiRequest, response: NextApiResponse) {


    const user = [
        {id: 1, name: "Julio"},
        {id: 2, name: "Andre"},
        {id: 3, name: "John"},
    ]
    
    return response.json(user)
}