class Appointment < ApplicationRecord
    belongs_to :day

    validates :time, :client, :barber, presence: true
    validates :client, :barber, length: {maximum: 10}
    validates_uniqueness_of :barber, :scope => [:time, :day_id]
end