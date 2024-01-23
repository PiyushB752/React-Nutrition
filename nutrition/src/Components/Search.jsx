import React, { Component } from 'react'
import './SearchStyle.css'

export default function Search(props){
    return(
        <div className='search'>
            <h3>Search</h3>
            <input type="search" onChange={e=>{props.search(e)}} />
        </div>
    )
}