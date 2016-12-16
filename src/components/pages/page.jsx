import React,{Component} from 'react';

export
class Page extends Component {
  render () {
    return (
      <article>
        <header>
          <h3>{this.title}</h3>
        </header>
        {this.body}
      </article>
    );
  }
}