class NachosController < ApplicationController
  before_action :set_nacho, only: [:show, :edit, :update, :destroy]

  # GET /nachos
  # GET /nachos.json
  def index
    @nachos = Nacho.all
  end

  # GET /nachos/1
  # GET /nachos/1.json
  def show
  end

  # GET /nachos/new
  def new
    @nacho = Nacho.new
  end

  # GET /nachos/1/edit
  def edit
  end

  # POST /nachos
  # POST /nachos.json
  def create
    @nacho = Nacho.new(nacho_params)

    respond_to do |format|
      if @nacho.save
        format.html { redirect_to @nacho, notice: 'Nacho was successfully created.' }
        format.json { render :show, status: :created, location: @nacho }
      else
        format.html { render :new }
        format.json { render json: @nacho.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /nachos/1
  # PATCH/PUT /nachos/1.json
  def update
    respond_to do |format|
      if @nacho.update(nacho_params)
        format.html { redirect_to @nacho, notice: 'Nacho was successfully updated.' }
        format.json { render :show, status: :ok, location: @nacho }
      else
        format.html { render :edit }
        format.json { render json: @nacho.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /nachos/1
  # DELETE /nachos/1.json
  def destroy
    @nacho.destroy
    respond_to do |format|
      format.html { redirect_to nachos_url, notice: 'Nacho was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_nacho
      @nacho = Nacho.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def nacho_params
      params.require(:nacho).permit(:name, :tasty)
    end
end
