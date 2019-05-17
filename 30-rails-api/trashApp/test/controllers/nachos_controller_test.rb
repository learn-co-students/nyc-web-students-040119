require 'test_helper'

class NachosControllerTest < ActionDispatch::IntegrationTest
  setup do
    @nacho = nachos(:one)
  end

  test "should get index" do
    get nachos_url
    assert_response :success
  end

  test "should get new" do
    get new_nacho_url
    assert_response :success
  end

  test "should create nacho" do
    assert_difference('Nacho.count') do
      post nachos_url, params: { nacho: { name: @nacho.name, tasty: @nacho.tasty } }
    end

    assert_redirected_to nacho_url(Nacho.last)
  end

  test "should show nacho" do
    get nacho_url(@nacho)
    assert_response :success
  end

  test "should get edit" do
    get edit_nacho_url(@nacho)
    assert_response :success
  end

  test "should update nacho" do
    patch nacho_url(@nacho), params: { nacho: { name: @nacho.name, tasty: @nacho.tasty } }
    assert_redirected_to nacho_url(@nacho)
  end

  test "should destroy nacho" do
    assert_difference('Nacho.count', -1) do
      delete nacho_url(@nacho)
    end

    assert_redirected_to nachos_url
  end
end
