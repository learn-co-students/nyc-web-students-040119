class UsersController < ApplicationController

def create
  redirect_to @user
end

def profile
    @user = User.find(session[:user])
    render "profile"
end

def show
  @user = User.new
end

  private

  def user_params
    params.require(:user).permit(:name, :password)
  end

end
