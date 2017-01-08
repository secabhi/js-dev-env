export const schema = {
  "type": "object",
  "properties": {
    "employee": {
      "type": "array",
      "minItems": 3,
      "maxItems": 5,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number",
            "unique": true,
            "minimum": 1
          },
          "name": {
            "type": "string",
            "faker": "name.firstName"
          }
        },
        required: ['id', 'name']
      }
    }
  },
  required: ['employee']
};
