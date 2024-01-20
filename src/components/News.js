import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {

  static defaultProps ={
    country: 'in',
    pageSize: 15,
    category: 'general'
  }

  static propTypes ={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

   capitalizeString = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  
    constructor(props){
        super(props)
        this.state = {
            articles: [],
            loading: true,
            page:1,
            totalresults:0
            
        }
        document.title= `${this.capitalizeString(this.props.category)}--NewsApp`;
    }
    async componentDidMount(){
      this.updateNews();
    }

    async updateNews (){
      this.props.setProgress(0)
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      
      this.setState({loading:true})
      this.props.setProgress(30)
      let data = await fetch(url)
      this.props.setProgress(50)
      let parseddata = await data.json()
      
      this.props.setProgress(70)
      this.setState({
        articles:parseddata.articles,
        loading:false,
        

      })
      this.props.setProgress(100)
    }

    handleNextClick= async()=>{
      if(this.state.page + 1 < Math.ceil(this.state.totalresults/this.props.pageSize)){}
      else{
        this.setState({page:this.state.page + 1})
              
      }
      
      
    }
    
    handlePreviousClick= async()=>{

      this.setState({
        page:this.state.page - 1,
        
      })
      this.updateNews()  ;  
    }

    fetchMoreData = async()=>{
      this.setState( {page: this.state.page+1})
      this.props.setProgress(0)
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      
      let data = await fetch(url)
      let parseddata = await data.json()
      this.setState({
        articles:this.state.articles.concat(parseddata.articles)
      }) 
      this.props.setProgress(100)
    }



  render() {
    return (
      <div className='container'>
        <h2>Headlines of the day-- {this.capitalizeString(this.props.category)} Section</h2>
        {this.state.loading && <spinner/>}
      
        
        <>

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalresults}
          loader={<Spinner/>}
        >
          <div className="container">
            <div className='row'>
            {this.state.articles.map((element)=>{
                        return   <div className='col-md-4' key={element.url}>
                        <NewsItem tittle={element.title?element.title.slice(0,40):''} 
                          description={element.description?element.description.slice(0,80):''}
                          imageurl={element.urlToImage?element.urlToImage:'https://images.moneycontrol.com/static-mcnews/2022/09/Mutual-funds_personal-finance_Wealth-management_Financial-planning_tax_Banks_Savings-accounts_Loans_Borrowing-770x433.png?impolicy=website&width=770&height=431'}
                          newsurl={element.url}
                          dateP={element.publishedAt}
                          author={element.author}
                          >
                          </NewsItem>
                      </div>
            })}
            </div>
        </div>
        </InfiniteScroll>
        
 
            
        </>
        {/* <div className='container'>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button className="btn btn-dark me-md-2" type="button" onClick={this.handlePreviousClick} disabled={this.state.page<=1}>
              &larr; Previous
            </button>
            <button className="btn btn-dark" type="button" onClick={this.handleNextClick} disabled={this.state.page + 1 < Math.ceil(this.state.totalresults/this.props.pageSize)}>
              Next &rarr;
            </button>
          </div>
        </div> */}
        
        

      </div>
    )
  }
}

export default News