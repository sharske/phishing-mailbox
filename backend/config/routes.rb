Rails.application.routes.draw do
  post "/login", to:"users#login"
  get "/users", to:"users#index"
  get "/users/:id", to:"users#show"
  post "/sign_up", to:"users#create"
end
