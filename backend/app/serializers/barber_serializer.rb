class BarberSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name
  belongs_to :day
end