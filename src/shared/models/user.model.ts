import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import validator from 'validator';

@Schema
export class User extends Document {
  @Prop({ required: true, unique: true, validate: { validator: validateEmail, message: 'Invalid email address' } })
  email!: string;

  @Prop({ required: true })
  username!: string;

  // Other user properties can be added here, such as password, firstName, lastName, etc.
}

// Define the email validation function
function validateEmail(email: string): boolean {
  // Use a validation library (e.g., validator.js) for email validation
  return validator.isEmail(email);
}

export const UserSchema = SchemaFactory.createForClass(User);

// Export the User schema
export const UserSchema = SchemaFactory.createForClass(User);