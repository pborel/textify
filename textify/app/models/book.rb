class Book < ActiveRecord::Base
  belongs_to  :playlist
  has_many    :comments
end
