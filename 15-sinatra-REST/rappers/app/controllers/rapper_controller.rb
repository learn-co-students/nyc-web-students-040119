class RapperController < ApplicationController

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
    binding.pry
    @rapper = Rapper.create(params)
    redirect "/rappers/#{@rapper.id}"
  end

  #Create and Update and Delete 
  #For Update:
    # - you need a form
    #   - form should populate with the current rapper's information
    # - form needs to submit to a new controller action

  #For Delete:
    # - Straight forward delete action/route/resource that finds the rapper in question and deletes that rapper from the DB


end
