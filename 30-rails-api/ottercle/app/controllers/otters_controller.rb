class OttersController < ApplicationController

  def index
    # model
    @otters = Otter.all
    # response
    render json: @otters, status: 200
  end


  def show
    # byebug
    @otter = Otter.find(params[:id])
    render json: @otter, status: :ok
  end

  def create

    @otter = Otter.create(otter_params)
    render json: @otter
  end


private

  def otter_params
    params.require(:otter).permit(:name, :age, :cuteness_level)
  end

end
