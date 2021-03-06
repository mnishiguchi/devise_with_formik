Rails.application.routes.draw do
  resource :user, only: :show
  get "users", to: redirect("/user")
  devise_for :users, controllers: { sessions: "users/sessions",
                                    passwords: "users/passwords",
                                    registrations: "users/registrations",
                                    confirmations: "users/confirmations" }
  root to: "pages#home"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
