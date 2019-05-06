class RappersController < ApplicationController
  def index
    @user = User.find(session[:user])
    if @user
      @rappers = Rapper.all
    else
      redirect_to "/login"
    end
  end

def new
  @rapper = Rapper.new
end

def show
end


def edit
  @rapper = Rapper.find(params[:id])
end

def update
  byebug
end

def create
  @rapper = Rapper.create(rapper_params)
  redirect_to @rapper
end


  private

  def rapper_params
    params.require(:rapper).permit(:name, :age)
  end
end
