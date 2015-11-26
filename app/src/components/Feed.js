/**
 * Created by Milos on 11/26/2015.
 */
var React = require('react'),
    ShowAddButton = require('./ShowAddButton'),
    FeedList = require('./FeedList'),
    FeedForm = require('./FeedForm');

var Feed = React.createClass({
    getInitialState: function(){
        var FEED_ITEMS = [
            {   key:'1',
                title: 'Putin u Parizu',
                description: 'Predsednik Rusije Vladimir Putin je u zvanicnoj ...',
                voteCount: 15
            },
            {
                key:'2',
                title: 'Farma stoke zapaljena',
                description: 'Sa televizije Pink javljaju da je nocas ...',
                voteCount: 4
            },
            {
                key:'3',
                title: 'Partizan pobjedio AZ Alkmar',
                description: 'Nakon teske bitke u Holandiji i naklonjenosti sudija ...',
                voteCount: 3
            }
        ];

        return {
            items: FEED_ITEMS
        };
    },
    render: function(){
        var items = this.state.items;

        return (
            <div>
              <div className="container">
                <ShowAddButton />
              </div>
              <FeedForm />
                <br/>
                <br/>
              <FeedList items={items}  />
            </div>
        );
    }
});
module.exports = Feed;