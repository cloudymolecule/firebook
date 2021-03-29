class AppointmentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :time, :barber, :client, :day_id
  belongs_to :day
end
