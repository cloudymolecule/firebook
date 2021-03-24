class DaySerializer
  include FastJsonapi::ObjectSerializer
  attributes :date, :open_hour, :close_hour, :appointments, :barbers
end
