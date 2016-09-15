import {expect} from 'chai';
import {Map, fromJS, List} from 'immutable';
import projectListReducer from './projectListReducer';
import {
  GET_ALL_PROJECT_REQUEST_SUCCESS
} from '../../../../shared/projectActionTypes'


describe("projectListReducer", function () {
  it("has initial state", function () {
    const action = {type: "RANDOM"};
    const nextState = projectListReducer(undefined, action);
    expect(nextState.get("projects")).to.equal(List());
  });

  it("handles GET_ALL_PROJECT_REQUEST_SUCCESS", function () {
    const initialState = Map();
    const action = {
      type: GET_ALL_PROJECT_REQUEST_SUCCESS,
      projects: List.of("Project1", "Project2")
    };
    const nextState = projectListReducer(initialState, action);
    expect(nextState).to.equal(fromJS({
      projects: List.of("Project1", "Project2")
    }))

  });
});
