class ApplicationController < ActionController::Base
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern

  # Changes to the importmap will invalidate the etag for HTML responses
  stale_when_importmap_changes

  # This app only serves JSON to the separate frontend SPA (see config/initializers/cors.rb),
  # so there's no session-backed HTML form to embed a CSRF token in.
  skip_before_action :verify_authenticity_token
end
