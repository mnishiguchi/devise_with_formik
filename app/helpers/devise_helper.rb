# https://github.com/plataformatec/devise/wiki/Override-devise_error_messages!-for-views
# https://semantic-ui.com/collections/message.html
module DeviseHelper
  def devise_error_messages!
    return "" unless devise_error_messages?

    messages = resource.errors.full_messages.map { |msg| content_tag(:p, msg) }.join
    # sentence = I18n.t("errors.messages.not_saved",
    #                   count: resource.errors.count,
    #                   resource: resource.class.model_name.human.downcase)

    html = <<-HTML
    <div class="ui negative message" id="error_explanation">
      #{messages}
    </div>
    HTML

    html.html_safe
  end

  def devise_error_messages?
    !resource.errors.empty?
  end
end
