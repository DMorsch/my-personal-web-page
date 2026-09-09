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
  def setup
    @comment = Comment.new(name: "Ada", message: "Nice portfolio!")
  end

  test "is valid with a name and a message" do
    assert @comment.valid?
  end

  test "persists with valid attributes" do
    assert_difference -> { Comment.count }, 1 do
      @comment.save!
    end
  end

  test "defaults name to Anonymous for new records" do
    assert_equal "Anonymous", Comment.new.name
  end

  test "is invalid without a name" do
    @comment.name = nil

    assert_not @comment.valid?
    assert_includes @comment.errors[:name], "can't be blank"
  end

  test "is invalid with a blank name" do
    @comment.name = "   "

    assert_not @comment.valid?
    assert_includes @comment.errors[:name], "can't be blank"
  end

  test "is invalid without a message" do
    @comment.message = nil

    assert_not @comment.valid?
    assert_includes @comment.errors[:message], "can't be blank"
  end

  test "is invalid with a blank message" do
    @comment.message = "   "

    assert_not @comment.valid?
    assert_includes @comment.errors[:message], "can't be blank"
  end

  test "reports errors on every missing required attribute at once" do
    comment = Comment.new(name: nil, message: nil)

    assert_not comment.valid?
    assert_includes comment.errors[:name], "can't be blank"
    assert_includes comment.errors[:message], "can't be blank"
  end
end
