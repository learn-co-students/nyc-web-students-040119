class RappersController < ApplicationController

  # index action
    get "/rappers" do
      @rappers = Rapper.all
      erb :"rappers/index"
    end

# NEW action

    get "/rappers/new" do
      erb :"rappers/new"
    end

# show action
    get "/rappers/:id" do
      @rapper = Rapper.find(params[:id])
      erb :"rappers/show"
    end


  post "/rappers" do

    @rapper = Rapper.create(params)
    redirect "/rappers/#{@rapper.id}"
  end

  #Create an Update and Delete
  #For Update:
    # - you need a form
    #   - form should populate with the current rapper's information
    # - form needs to submit to a new controller action

    get "/rappers/:id/edit" do
      @rapper = Rapper.find(params[:id])
      erb :"rappers/edit"
    end

    patch "/rappers/:id" do
      @rapper = Rapper.find(params[:id])
      #update rapper's name
      @rapper.update(name: params[:name])
      erb :"rappers/show"
    end

  #For Delete:
    # - Straight forward delete action/route/resource that finds the rapper in question and deletes that rapper from the DB

    delete "/rappers/:id" do
      Rapper.find(params[:id]).destroy
      redirect "/rappers"
    end



end
