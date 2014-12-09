var React = require('react'),
    MealRow = require('./meal-row.js.jsx');

var ShoppingList = React.createClass({

  didRemoveMeal: function(index) {
    this.props.onMealRemove(index);
  },

  render: function() {
    var meals = [];

    this.props.meals.forEach(function(meal, index) {
      meals.push(<MealRow key={index} meal={meal} onRemove={this.didRemoveMeal.bind(this, index)}/>)
    }.bind(this));

    return (
      <div className="shopping-list">
        <h1>Shopping List</h1>
        {meals}
      </div>
    );
  }
});

module.exports = ShoppingList;
