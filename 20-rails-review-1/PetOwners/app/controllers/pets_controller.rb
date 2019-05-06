class PetsController < ApplicationController

  def index
    @pets = Pet.all
  end

  def show
    @pet = Pet.find(params[:id])
  end

  def new
    @pet = Pet.new
    @owners = Owner.all

  end

  def create
    @pet = Pet.create(pet_params)
    @owners = Owner.all
    if @pet.valid?

        flash[:message] = "Pet created Successfully"
        redirect_to @pet
    else

      flash[:message] = "#{@pet.errors.full_messages[0]}"
      render :new
    end

  end

  def edit
    @pet = Pet.find(params[:id])
  end

  def update
    @pet = Pet.find(params[:id])
    @pet.update(pet_params)
  end

  def destroy
    @pet = Pet.find(params[:id])
    @pet.destroy
  end

private

def pet_params
  params.require(:pet).permit(:name, :animal_type, :owner_id)
end


end
