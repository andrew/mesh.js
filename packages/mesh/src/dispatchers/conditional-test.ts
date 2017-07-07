import { createConditionalDispatcher } from "./conditional";
import { readAll } from "../";
import { expect } from "chai";

describe(__filename + "#", () => {
  it("can be created", () => {
    createConditionalDispatcher(() => false);
  });
  it("can redirect messages based on the tester", async () => {
    const dispatch = createConditionalDispatcher(({pass}) => pass, () => "a", () => "b");
    expect(await readAll(dispatch({}))).to.eql(["b"]);
    expect(await readAll(dispatch({ pass: true }))).to.eql(["a"]);
  });
});