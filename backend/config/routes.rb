Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Render dynamic PWA files from app/views/pwa/* (remember to link manifest in application.html.erb)
  # get "manifest" => "rails/pwa#manifest", as: :pwa_manifest
  # get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker

  # Defines the root path route ("/")
  # root "posts#index"

  # Namespaced under /api so API paths never collide with frontend page
  # routes of the same name (e.g. the React app's own /comments page).
  scope :api do
    resources :comments, only: %i[index create]
  end

  # Everything else is the React SPA. Must stay last: routes above are
  # matched first, and any request for a file that actually exists under
  # public/ (JS, CSS, images) never reaches the router at all.
  root "static#index"
  get "*path", to: "static#index", constraints: ->(req) { !req.path.start_with?("/api") }
end
