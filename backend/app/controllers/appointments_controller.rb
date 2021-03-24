class AppointmentsController < ApplicationController

  def index
    appointments = Appointment.all

    render json: appointments
  end

  def show
    render json: appointment
  end

  def create
    appointment = Appointment.new(appointment_params)

    if appointment.save
      render json: appointment, status: :created, location: appointment
    else
      render json: appointment.errors, status: :unprocessable_entity
    end
  end

  def update
    if appointment.update(appointment_params)
      render json: appointment
    else
      render json: appointment.errors, status: :unprocessable_entity
    end
  end

  def destroy
    appointment.destroy
  end

  private

    def appointment_params
      params.require(:appointment).permit(:time, :client, :barber)
    end

end
