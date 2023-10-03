class ApplicationController < ActionController::API
  rescue_from Exception, with: :render_500
  rescue_from ActiveRecord::RecordNotFound, with: :render_404
  rescue_from ActionController::RoutingError, with: :render_404
  rescue_from ActionController::BadRequest, with: :render_400

  def users_success(users)
    render status: 200, json: users, only: [:email, :password]
  end

  def user_success(user)
    render status: 200, json: {
      email: user.email,
      password: user.password
    }
  end


  def render_400
    render status: 400, json: {
      message: "BadRequest"
    }
  end

  def render_404
    render status: 404, json: {
      message: "SessionError"
    }
  end

  def render_500
    render status: 500, json: {
      message: "InternalServerError" 
    }
  end

end
