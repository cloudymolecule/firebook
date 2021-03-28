class Appointment < ApplicationRecord
    belongs_to :day

    validates :time, :client, :barber, presence: true
    validates :client, :barber, length: {maximum: 4}
end