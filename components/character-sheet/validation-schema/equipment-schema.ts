import * as Yup from "yup";

export const equipmentSchema = Yup.object({
    equipment: Yup.array().of(
      Yup.object({ equipment_name: Yup.string().required("Name is required") })
    ),
  });