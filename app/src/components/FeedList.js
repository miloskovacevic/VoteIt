/**
 * Created by Milos on 11/26/2015.
 */

var React = require('React'),
    FeedItem = require('./FeedItem');

var FeedList = React.createClass({
    render: function(){

        var feedItems = this.props.items.map(function (item) {
            return <FeedItem title={item.title} desc={item.description}
                             votes = {item.voteCount}   />
        });
        return (
            <ul className = "list-group container">
                {feedItems}
            </ul>
        );
    }
});

module.exports = FeedList;
