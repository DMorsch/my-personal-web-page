class StaticController < ApplicationController
  # Serves the built React SPA's index.html. Any real asset request
  # (JS, CSS, images) is already served directly by Rails' static file
  # server before it ever reaches this controller; this only fires for
  # SPA routes like /comments or /about, letting react-router-dom take
  # over client-side.
  def index
    render file: Rails.public_path.join("index.html"), layout: false
  end
end
