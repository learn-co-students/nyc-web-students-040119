class SongsController < ApplicationController

def index
  @songs = Song.all
end

# Create A New Song

def new
  @song = Song.new
  @rappers = Rapper.all
end

def create
  @song = Song.new(song_params)
  @rappers = Rapper.all
  if @song.valid?
    @song.save
    byebug
    flash[:notice] = "Post successfully created"
    redirect_to @song
  else
    byebug
    flash[:notice] = "#{@song.errors.full_messages[0]}"
    render "new"
  end


end

def show
 @song = Song.find(params[:id])
end

private

def song_params
  params.require(:song).permit(:title, :duration, :rapper_id)
end

end
