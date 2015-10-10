import { BufferedResponse, Response } from "../..";
import expect from "expect.js";
import co from "co";

describe(__filename + "#", function() {
  it("is a response", function() {
    expect(new BufferedResponse()).to.be.an(Response);
  });

  it("can created a buffered response with no content", co.wrap(function*() {
    var response = new BufferedResponse();
    expect((yield response.read()).done).to.be(true);
  }));

  it("can return an error", co.wrap(function*() {
    var response = new BufferedResponse(new Error("an error"));
    var err;

    try {
      yield response.read();
    } catch(e) { err = e; }

    expect(err.message).to.be("an error");
  }));

  it("can return one chunk", co.wrap(function*() {
    var response = new BufferedResponse(void 0, "a");
    expect((yield response.read()).value).to.be("a");
    expect((yield response.read()).done).to.be(true);
  }));

  it("can return many chunks", co.wrap(function*() {
    var response = new BufferedResponse(void 0, ["a", "b"]);
    expect((yield response.read()).value).to.be("a");
    expect((yield response.read()).value).to.be("b");
    expect((yield response.read()).done).to.be(true);
  }));
});