var MealRow = React.createClass({

  render: function() {
    var ingredients = [];

    this.props.meal.ingredients.forEach(function(ingredient, index) {
      ingredients.push( <li key={index}>{ingredient.name}</li> )
    });

    return (
      <div>
        <h3>{this.props.meal.name}</h3>
        <ul>
          {ingredients}
        </ul>
      </div>
    );
  }
});
