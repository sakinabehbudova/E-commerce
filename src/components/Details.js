import React, { Component } from 'react'
import { Context } from '../Context'
import Loading from './Loading';
import Phone from './Phone';

export default class Details extends Component {
    static contextType = Context
    render() {
        let {sortedPhones:phones,loading} = this.context
        phones= phones.map(phone=>{
            return <Phone key={phone.id} phone={phone}/>
        })
        return (
            <>
            <h1 className="title">Our Products</h1>
            <div>
                {loading ? <Loading/>:phones}
            </div>
          
            </>
        )
    }
}

