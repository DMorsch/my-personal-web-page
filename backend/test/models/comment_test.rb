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

require "test_helper"

class CommentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
