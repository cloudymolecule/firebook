class DaySerializer
  include FastJsonapi::ObjectSerializer
  attributes :num_day, :month, :year, :open_hour, :open_minutes, :open_ampm, :close_hour, :close_minutes, :close_ampm, :id, :appointments
end
