class ApplicationController < ActionController::Base

  before_action :authorized?
  helper_method :current_user

  def current_user
    if session[:user]
      User.find(session[:user])
    end
  end

  def logged_in?
    !!current_user
  end

  def authorized?
    if logged_in?
      true
    else
      redirect_to login_path
    end
  end

end
