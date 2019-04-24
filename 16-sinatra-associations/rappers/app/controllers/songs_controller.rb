class SongsController < ApplicationController

  # index
  get '/songs' do
    @songs = Song.all
    erb :"songs/index"
  end

  # new
  get '/songs/new' do
    @rappers = Rapper.all
    erb :"songs/new"
  end

  # show
  get '/songs/:id' do
    @song = Song.find(argument based on params)
    erb :"songs/show"
  end


  # create
  post '/songs' do
    binding.pry
    @song = Song.create(some argument based on params )
    redirect "songs/#{@song.id}"
  end

  # edit
  get '/songs/:id/edit' do
    @song = Song.find(some argument based on params )
    erb  :"songs/edit"
  end

  # update
  patch '/songs/:id' do
    @song = Song.find(whatever )
    @song.update(whatever)
    erb :"songs/show"
  end

  # delete
  delete '/songs/:id' do
    @song = Song.find(whatever)
    @song.destroy
    redirect "/songs"
  end


end
