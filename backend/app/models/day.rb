class Day < ApplicationRecord
    has_many :appointments, :dependent => :destroy

    validates :num_day, :month, :year, :open_hour, :open_minutes, :open_ampm, :close_ampm, :close_hour, :close_minutes, presence: true
    validates :num_day, :year, numericality: {only_integer: true, message: "Only whole numbers allowed."}
    validates :num_day, length: {maximum: 2}
    validates :year, length: {maximum: 4}
    validate :validate_time

    private

    def validate_time
        if open_minutes == 0 && close_minutes == 0 || open_minutes == 30 && close_minutes == 30
            if open_hour == close_hour
                errors.add(:open_hour, "can't be the same as closing hour.")
            end
        end
        if open_minutes == 30 && close_minutes == 0
            if open_hour == close_hour
                errors.add(:open_hour, "can't be later than closing hour.")
            end
        end
        # byebug
        if open_hour > close_hour
            errors.add(:open_hour, "can't be later than closing hour.")
        end
        if close_hour < open_hour
            errors.add(:close_hour, "can't be earlier than opening hour.")
        end
    end

end
