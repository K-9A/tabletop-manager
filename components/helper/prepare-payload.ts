//Function to insert characterId into the creation process of characterSheet
function preparePayload(data, characterId) {
    return {
      ...data,
      characterId
    };
  }

  export default preparePayload;