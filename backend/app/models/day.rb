class Day < ApplicationRecord
    has_many :appointments, :dependent => :destroy

    validates :num_day, :month, :year, :open_hour, :open_minutes, :open_ampm, :close_ampm, :close_hour, :close_minutes, presence: true
    validates :num_day, :year, numericality: {only_integer: true, message: "Only whole numbers allowed."}
    validates :num_day, length: {maximum: 2}
    validates :year, length: {maximum: 4}
    
    def validate_open_hour
        
    end

    def validate_close_hour
        
    end
end

# validates :province, inclusion: { in: %w[British Columbia] }