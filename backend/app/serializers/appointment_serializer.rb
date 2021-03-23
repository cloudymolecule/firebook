class AppointmentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :time, :client, :day_id
  belongs_to :day
end
