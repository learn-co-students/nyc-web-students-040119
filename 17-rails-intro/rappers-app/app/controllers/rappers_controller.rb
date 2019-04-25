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

  def show
  end

  def new
  end

  def edit
  end
end
