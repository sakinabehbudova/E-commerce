import React from 'react'
import { Context } from '../Context'
import Phone from './Phone';


export default function Details({details}) {
let contextType = Context;
const {phones} = context;
phones = phones.map(item=>{
    return <Phone key={item.id}/>
})
console.log("test",phones)
    return (
        <>
          <Phone/>
        </>
    )
}
