class Day < ApplicationRecord
    has_many :appointments, :dependent => :destroy

    validates :num_day, :month, :year, :open_minutes, :open_ampm, :close_ampm, :close_minutes, presence: true
    validates :num_day, :year, numericality: {only_integer: true, message: "only allows numbers"}
    validates :num_day, numericality: {less_than_or_equal_to: 31}
    validates :year, numericality: {greater_than: 1960, less_than_or_equal_to: Date.current.year}
    validate :validate_time, if: :hours_present?
    validates_length_of :num_day, maximum: 4
    validates_length_of :year, minimum: 4, maximum: 4
    validates_uniqueness_of :num_day, :scope => [:month, :year]

    private

    def hours_present?
        open_hour && close_hour
    end

    def validate_time
        if open_minutes == 0 && close_minutes == 0 || open_minutes == 30 && close_minutes == 30
            if open_hour == close_hour
                errors.add(:open_hour, "can't be the same as closing hour")
            end
        end
        if open_minutes == 30 && close_minutes == 0
            if open_hour == close_hour
                errors.add(:open_hour, "can't be later than closing hour")
            end
        end
        if open_hour > close_hour
            errors.add(:open_hour, "can't be later than closing hour")
        end
        if close_hour < open_hour
            errors.add(:close_hour, "can't be earlier than opening hour")
        end
    end
end
