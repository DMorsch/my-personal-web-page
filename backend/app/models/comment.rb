# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  message    :string           not null
#  name       :string           default("Anonymous")
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord
  validates :name, presence: true
  validates :message, presence: true
end
