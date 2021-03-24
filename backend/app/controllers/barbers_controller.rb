class BarbersController < ApplicationController

  def index
    barbers = Barber.all

    render json: barbers
  end

  def show
    render json: barber
  end

  def create
    barber = Barber.new(barber_params)

    if barber.save
      render json: barber, status: :created, location: barber
    else
      render json: barber.errors, status: :unprocessable_entity
    end
  end

  def update
    if barber.update(barber_params)
      render json: barber
    else
      render json: barber.errors, status: :unprocessable_entity
    end
  end

  def destroy
    barber.destroy
  end

  private

    def barber_params
      params.require(:barber).permit(:name)
    end
    
end