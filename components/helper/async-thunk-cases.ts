//This helper function is to truncate the .addCases for the thunks that manage updating data
//on input fields when it comes to both character and campaign view.

//This function coverts field names that have an underscore in them. Like character_level
function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+|\_+)/g, function (match, index) {
    if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
}

//This function capatilzes the first letter of a word.
function capitalize(str) {
  const lower = str.toLowerCase();
  return str.charAt(0).toUpperCase() + lower.slice(1);
}

//The function to generate the 3 thunks; pending, fulfilled, rejected.
export const createAsyncThunkCases = (slice, field) => {
  const camelizedField = camelize(field);
  return [
    { type: slice.actions[`update${capitalize(camelizedField)}`].pending, reducer: (state) => {
      state.loadingFields[field] = true;
      state.errors[field] = null;
    }},
    { type: slice.actions[`update${capitalize(camelizedField)}`].fulfilled, reducer: (state, action) => {
      state.loadingFields[field] = false;
      state[field] = action.payload[field];
      state.errors[field] = null;
    }},
    { type: slice.actions[`update${capitalize(camelizedField)}`].rejected, reducer: (state, action) => {
      state.loadingFields[field] = false;
      state.errors[field] = action.error.message;
    }},
  ];
};

