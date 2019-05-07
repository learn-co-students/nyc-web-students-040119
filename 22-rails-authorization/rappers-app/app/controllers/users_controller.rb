class UsersController < ApplicationController

  skip_before_action :authorized?, only: [:new, :create]

def new
  @user = User.new
end

def create
  @user = User.create(user_params)
  session[:user] = @user.id
  redirect_to @user
end

def profile
    @user = User.find(params[:id])
    render "profile"
end

def show
  @user = User.find(params[:id])

end


  private

  def user_params
    params.require(:user).permit(:name, :username, :password)
  end

end
