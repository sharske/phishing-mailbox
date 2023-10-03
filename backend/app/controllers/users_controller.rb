class UsersController < ApplicationController
  def create
    user = User.new(user_params)
    if user.save
      user_success(user)
    else
      render_404
    end
  end

  def login
    user = User.find_by(user_params)
    if user
      user_success(user)
    else
      render_404
    end
  end
  
  def show
    user = User.find(params[:id])
    if user
      user_success(user)
    else
      render_404
    end
  end

  def index
    user = User.all
    if user
      users_success(user)
    else
      render_404 
    end
  end
  
  private
  
  def user_params
    params.permit(:email, :password)
  end
end
