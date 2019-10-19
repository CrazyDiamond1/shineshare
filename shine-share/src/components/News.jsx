import React, { Component} from 'react';
import NewsCard from './NewsCard';

const NEWSLIST = require('../news');
const news = NEWSLIST.news;
let num = 0;

class News extends Component {

  state = {
    state: "Java"
  }
  render() {
    return (
      <div id='news'>
        <h1>News</h1>
{
  news.map((news) => {
    return(
    <NewsCard key={num+=1} title={news.title} content={news.content} date={news.date}/>
    )
  })}
{}
      </div>
    )
  }
}

export default News;