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
              <li key={i} className="protograph-scrollspy-list-item">
                <a className="" href={`#${item.id}`}>{item.name}</a>
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

<nav class="explainers-sticky-segment scrollspy-navbar" id="myNavbar">
  <ul class="nav nav-pills nav-stacked">
    <li><a class="list-group-item active scrollspy-parent-li" href="#disclaimer">Disclaimer</a></li>
    <li>
      <a class="list-group-item scrollspy-parent-li" href="#state">Mob justice in India</a>
      <ul class="nav nav-stacked scrollspy-child-ul">
        <li><a class="list-group-item" href="#state_spread">Geographical spread</a></li>
        <li><a class="list-group-item" href="#state_nature">Nature of crime</a></li>
        <li><a class="list-group-item" href="#state_law">Law and order capacity of the state</a></li>
        <li><a class="list-group-item" href="#state_why">Why it happened</a></li>
      </ul>
    </li>
    <li>
      <a class="list-group-item scrollspy-parent-li" href="#witch-hunting">Witch Hunting</a>
      <ul class="nav nav-stacked scrollspy-child-ul">
        <li><a class="list-group-item" href="#witch-hunting_why">Why this matters</a></li>
        <li><a class="list-group-item" href="#witch-hunting_where">Where</a></li>
        <li><a class="list-group-item" href="#witch-hunting_law">Law and Order</a></li>
        <li><a class="list-group-item" href="#witch-hunting_what">What the NCRB data says</a></li>
        <li><a class="list-group-item" href="#witch-hunting_who">Who the victims are</a></li>
        <li><a class="list-group-item" href="#witch-hunting_nature">Nature of crime</a></li>
        <li><a class="list-group-item" href="#witch-hunting_read-more">Read More</a></li>
      </ul>
    </li>
    <li>
      <a class="list-group-item scrollspy-parent-li" href="#cow-vigilantism">Cow Vigilantism</a>
      <ul class="nav nav-stacked scrollspy-child-ul">
        <li><a class="list-group-item" href="#cow-vigilantism_why">Why it matters</a></li>
        <li><a class="list-group-item" href="#cow-vigilantism_where">Where</a></li>
        <li><a class="list-group-item" href="#cow-vigilantism_law">Law and Order</a></li>
        <li><a class="list-group-item" href="#cow-vigilantism_hate">Hate Crime</a></li>
        <li><a class="list-group-item" href="#cow-vigilantism_nature">Nature of Crime</a></li>
        <li><a class="list-group-item" href="#cow-vigilantism_read-more">Read More</a></li>
      </ul>
    </li>
    <li>
      <a class="list-group-item scrollspy-parent-li" href="#altercations-disputes">Altercations and Disputes</a>
    </li>
  </ul>
</nav>

ReactDOM.render(<ScrollSpy
  dataJSON={
    [
      {
        name: 'Disclaimer',
        id: 'disclaimer'
      },
      {
        name: 'Mob justice in India',
        id: 'state',
        items: [
          {
            name: 'Geographical spread',
            id: 'state_spread'
          },
          {
            name: 'Nature of crime',
            id: 'state_nature'
          },
          {
            name: 'Law and order capacity of the state',
            id: 'state_law'
          },
          {
            name: 'Why it happened',
            id: 'state_why'
          }
        ]
      }
    ]
  }
 />, document.getElementById('scrollspy_findings'));