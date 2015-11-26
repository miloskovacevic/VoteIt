/**
 * Created by Milos on 11/26/2015.
 */

var React = require('React');

var FeedItem = React.createClass({
    render: function(){
        var title = this.props.title;
        var description = this.props.desc;
        var votes = this.props.votes;

        return (
                <li className="list-group-item">
                    <span className="badge badge-success">{votes}</span>
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <span className="pull-right">
                        <button id="up" className="btn btn-sm btn-primary">&uarr;</button>
                        <button id="down" className="btn btn-sm btn-primary">&darr;</button>
                    </span>
                </li>
        );
    }
});


module.exports = FeedItem;