import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {tittle, description, imageurl, newsurl, dateP, author } =this.props
    
    return (
      <div>
        <div className="card my-3" >
        <img src={imageurl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{tittle}...</h5>
                <p className="card-text">{description}...</p>
                <a href={newsurl} target='_blank'rel="noreferrer" className="btn btn-dark">Read More</a>
                <p className="card-text">Report by:{!author?"unknown":author} On {new Date(dateP).toGMTString()}</p>
                
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem