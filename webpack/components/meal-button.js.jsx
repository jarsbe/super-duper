var React = require('react/addons');

var MealButton = React.createClass({

  getGridItemIdsToAnimate: function() {
    var nextGridItems = $(this.getDOMNode()).nextAll('.grid-item');
    var nextGridItemsIds = [$(this.getDOMNode()).data('reactid')];

    nextGridItems.toArray().forEach(function(gridItem, index){
      nextGridItemsIds.push($(gridItem).data('reactid'));
    });

    return nextGridItemsIds;
  },

  onDelete: function(event) {
    event.stopPropagation();

    var result = confirm('Are you sure?');

    if (result) {
      var ids = this.getGridItemIdsToAnimate();

      this.props.onDelete();
      this.props.onReflowGrid(ids);
    }
  },

  getDefaultProps: function() {
    return {
      category: 'other'
    };
  },

  getInitialState: function() {
    return {
      nextMealButtonIds: []
    };
  },

  render: function() {
    return (
      <div className='grid-item meal-button' onClick={this.props.onSelect}>
        <div className={'meal-button-bar ' + this.props.category}></div>
        <div className='meal-button-label'>
          <span className='name'>{this.props.name}</span>
        </div>
      </div>
    );
  }
});

module.exports = MealButton;
