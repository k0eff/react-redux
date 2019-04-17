import updateUser from "../actions/userActions";

export default function userReducer(state = "", { type, payload }) {
  switch (type) {
    case "users:updateUser":
      return payload.user;
    default:
      return state;
  }
}
