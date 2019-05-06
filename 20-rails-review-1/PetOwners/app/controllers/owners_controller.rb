class OwnersController < ApplicationController
  def index
    @owners = Owner.all
  end

  def show
    @owner = Owner.find(params[:id])
  end

  def new
    @owner = Owner.new
  end

  def create
    @owner = Owner.create(owner_params)
    redirect_to @owner
  end

  def edit
    @owner = Owner.find(params[:id])
  end

  def update
    @owner = Owner.find(params[:id])
    @owner.update(owner_params)
  end

  def delete
    byebug
    @owner = Owner.find(params[:id])
    @owner.destroy
  end

  def petgawd
    @owners = Owner.you_da_pet_gawd
    # render :petgawd
  end

private

def owner_params
  params.require(:owner).permit(:first_name, :last_name, :age, :email)
end



end
