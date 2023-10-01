import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export async function validateEmail(email: string): Promise<boolean> {
    return true;
}

export async function User () {
    return true;
}



export const UserSchema = SchemaFactory.createForClass(User);


