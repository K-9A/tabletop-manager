export function isErrorWithResponse(
    error: any
  ): error is { response: { data: { error: string } } } {
    return (
      error && error.response && typeof error.response.data.error === "string"
    );
  }
  
  export function isErrorWithMessage(error: any): error is { message: string } {
    return error && typeof error.message === "string";
  }
  