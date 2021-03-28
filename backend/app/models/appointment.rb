class Appointment < ApplicationRecord
    belongs_to :day

    validates :time, :client, :barber, presence: true
end