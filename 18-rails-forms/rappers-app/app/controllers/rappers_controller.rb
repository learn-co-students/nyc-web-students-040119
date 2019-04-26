class RappersController < ApplicationController
  def index
    # byebug
    @rappers = Rapper.all
  end


def swag

end

# # index in Sinatra
#   get '/rappers' do
#
#   end

def new
end

def show
end


def edit
end

def update
  byebug
end

def create
  @rapper = Rapper.create(rapper_params)
  redirect_to @rapper
  # "/rappers/#{@rapper.id}"
end


  private

  def rapper_params
    params.require(:rapper).permit(:name, :age)
  end
end
