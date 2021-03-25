class DaysController < ApplicationController
  
  def index
    days = Day.all
    
    render json: DaySerializer.new(days)
  end

  def show
    day = Day.find(params[:id])
    render json: DaySerializer.new(day)
  end

  def create
    day = Day.new(day_params)

    if day.save
      render json: DaySerializer.new(day)
    else
      render json: day.errors, status: :unprocessable_entity
    end
  end

  def update
    day = Day.find(params[:id])
    if day.update(day_params)
      render json: day
    else
      render json: day.errors, status: :unprocessable_entity
    end
  end

  def destroy
    day = Day.find(params[:id])
    day.destroy
  end

  private
    
    def day_params
      params.require(:day).permit(:num_day, :month, :year, :open_hour, :open_minutes, :open_ampm, :close_hour, :close_minutes, :close_ampm)
    end

end
