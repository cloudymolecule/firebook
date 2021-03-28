class AppointmentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :time, :barber, :client, :day_id
  belongs_to :day
end
