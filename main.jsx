import React from 'react';
import ReactDOM from 'react-dom';
import Scrollspy from 'react-scrollspy';

export default class ScrollSpy extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataJSON: this.props.dataJSON,
      ids: this.props.dataJSON.map((e) => {return e.id})
    }

  }

  renderScrollSpy(itemIds, items) {

    return (
      <Scrollspy
        items={ itemIds }
        currentClassName="protograph-scrollspy-active-item"
        className="protograph-scrollspy-ul"
      >
        {
          itemIds.map((e, i) => {
            let item = items[i],
              childItems = item.items,
              childItemsIds;

            if (childItems && childItems.length) {
              childItemsIds = childItems.map((e) => {return e.id})
            }

            return (
              <li key={i}>
                <a className="protograph-scrollspy-list-item" href={`#${item.id}`}>{item.name}</a>
                {
                  (childItemsIds && childItemsIds.length > 0) &&
                    this.renderScrollSpy(childItemsIds, childItems)
                }
              </li>
            )
          })
        }
      </Scrollspy>
    );

  }

  render () {
    return (
      this.renderScrollSpy(this.state.ids, this.state.dataJSON)
    );
  }
}

ReactDOM.render(<ScrollSpy
  onEvent={((e) => {console.log(e);})}
  dataJSON={
    [
      {
        name: 'What is #mobbed?',
        id: 'what'
      },
      {
        name: 'Why #mobbed?',
        id: 'why'
      },
      {
        name: 'Why are there two options to explore the data?',
        id: 'options'
      },
      {
        name: 'How have we defined mob violence and hate crimes?',
        id: 'hate-crime'
      },
      {
        name: 'Which incidents are included?',
        id: 'included'
      },
      {
        name: 'Which incidents are not been included?',
        id: 'excluded'
      },
      {
        name: 'How is this data project different from what exists already?',
        id: 'difference'
      },
      {
        name: 'How did we collect the data?',
        id: 'data-collection'
      },
      {
        name: 'What does the data indicate?',
        id: 'numerical-analysis'
      },
      {
        name: 'What are the limitations of our approach?',
        id: 'limitations'
      },
      {
        name: 'Contributors',
        id: "contributors"
      }
    ]
  }
 />, document.getElementById('scrollspy'));