class App
  def call(environment_hash)
    status_code = 200
    header = {}
    body = ['hello']
    req = Rack::Request.new(environment_hash)
    resp = Rack::Response.new

    if req.path.match("/cohort/")
      resp.write("Hello Dan at /")

    elsif req.path.match("/cohort")
      resp.write("Second Test")
    end
    return [status_code, header, resp]
  end
end
