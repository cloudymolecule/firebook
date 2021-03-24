class Day < ApplicationRecord
    has_many :appointments, :dependent => :destroy
    has_many :barbers, :dependent => :destroy
end