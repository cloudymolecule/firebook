class Day < ApplicationRecord
    has_many :appointments, :dependent => :destroy
end
