class API::MealsController < ApplicationController
  def index
    render json: current_user.meals.includes(:ingredients), each_serializer: MealSerializer, root: false
  end

  def create
    @meal = current_user.meals.build(meal_params)

    if @meal.save
      render json: @meal
    else
      render json: { success: false }, status: 500
    end
  end

  def update
  end

  def destroy
    @meal = current_user.meals.find(params[:id])

    if @meal.destroy
      render json: @meal
    else
      render json: { success: false }, status: 500
    end
  end

private

  def meal_params
    params[:meal].permit(
      :name,
      :category,
      ingredients_attributes: [:name]
    )
  end
end
