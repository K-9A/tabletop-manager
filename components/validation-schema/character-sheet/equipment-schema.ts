import * as Yup from "yup";

interface EquipmentSchema {
  equipment_name: Yup.StringSchema;
  equipment_category: Yup.StringSchema;
  equipment_properties: Yup.StringSchema;
}

export const equipmentRules: EquipmentSchema = {
  equipment_name: Yup.string().notRequired(),
  equipment_category: Yup.string().notRequired(),
  equipment_properties: Yup.string().notRequired(),
};

export const equipmenSchema = Yup.object({ ...equipmentRules });