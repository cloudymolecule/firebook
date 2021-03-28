class AppointmentsController < ApplicationController

  def index
    appointments = Appointment.all
    render json: AppointmentSerializer.new(appointments)
  end

  def show
    appointment = Appointment.find(params[:id])
    render json: AppointmentSerializer.new(appointment)
  end

  def create
    appointment = Appointment.new(appointment_params)

    if appointment.save
      render json: AppointmentSerializer.new(appointment)
    else
      render json: {errors: appointment.errors.full_messages}
    end
  end

  # def update
  #   if appointment.update(appointment_params)
  #     render json: appointment
  #   else
  #     render json: appointment.errors, status: :unprocessable_entity
  #   end
  # end

  # def destroy
  #   appointment.destroy
  # end

  private

    def appointment_params
      params.require(:appointment).permit(:time, :client, :barber, :day_id)
    end

end
