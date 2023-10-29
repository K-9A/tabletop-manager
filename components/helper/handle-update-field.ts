//The purpose of this helper function is to create a reusable function that aids in creating a 
//handle update call in all of the view campaign/character sheet input fields.
const handleUpdateField = async (dispatch, updateFunction, campaignId, value) => {
    try {
      await dispatch(updateFunction({ campaignId, value })).unwrap();

    } catch (error) {
      console.error("Error updating field:", error);
      // Handle error
    }
  };