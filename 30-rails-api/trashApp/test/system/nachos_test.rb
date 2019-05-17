require "application_system_test_case"

class NachosTest < ApplicationSystemTestCase
  setup do
    @nacho = nachos(:one)
  end

  test "visiting the index" do
    visit nachos_url
    assert_selector "h1", text: "Nachos"
  end

  test "creating a Nacho" do
    visit nachos_url
    click_on "New Nacho"

    fill_in "Name", with: @nacho.name
    check "Tasty" if @nacho.tasty
    click_on "Create Nacho"

    assert_text "Nacho was successfully created"
    click_on "Back"
  end

  test "updating a Nacho" do
    visit nachos_url
    click_on "Edit", match: :first

    fill_in "Name", with: @nacho.name
    check "Tasty" if @nacho.tasty
    click_on "Update Nacho"

    assert_text "Nacho was successfully updated"
    click_on "Back"
  end

  test "destroying a Nacho" do
    visit nachos_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Nacho was successfully destroyed"
  end
end
