class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  layout :layout_by_resource

  private

  # https://github.com/plataformatec/devise/wiki/How-To:-Create-custom-layouts
  def layout_by_resource
    if controller_name == "registrations" && (action_name == "edit" || action_name == "update")
      "application"
    elsif devise_controller?
      "auth"
    else
      "application"
    end
  end
end
